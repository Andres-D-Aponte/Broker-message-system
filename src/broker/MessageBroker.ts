// Message broker implementation
type Subscriber<T> = (message: T) => void;

interface StoredMessage {
  id: number;
  content: string;
  timestamp: string;
  topic: string;
}

export class MessageBroker {
  private topics: Map<string, Set<Subscriber<any>>>;
  private storageKey = 'broker_messages';

  constructor() {
    this.topics = new Map();
    this.initializeStorageListener();
  }

  private initializeStorageListener() {
    window.addEventListener('storage', (event) => {
      if (event.key === this.storageKey && event.newValue) {
        const message: StoredMessage = JSON.parse(event.newValue);
        this.notifySubscribers(message.topic, {
          id: message.id,
          content: message.content,
          timestamp: message.timestamp
        });
      }
    });
  }

  private notifySubscribers(topic: string, message: any) {
    if (!this.topics.has(topic)) return;

    for (const subscriber of this.topics.get(topic)!) {
      subscriber(message);
    }
  }

  subscribe<T>(topic: string, subscriber: Subscriber<T>): () => void {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, new Set());
    }

    this.topics.get(topic)!.add(subscriber);

    // Return unsubscribe function
    return () => {
      this.topics.get(topic)?.delete(subscriber);
      if (this.topics.get(topic)?.size === 0) {
        this.topics.delete(topic);
      }
    };
  }

  publish<T extends { id: number; content: string; timestamp: string }>(topic: string, message: T): void {
    // Store message in localStorage to share between windows
    const storedMessage: StoredMessage = {
      ...message,
      topic
    };
    localStorage.setItem(this.storageKey, JSON.stringify(storedMessage));

    // Notify local subscribers
    this.notifySubscribers(topic, message);
  }
}

// Create a singleton instance
export const broker = new MessageBroker();