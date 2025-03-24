import React, { useEffect, useState } from 'react';
import { broker } from '../broker/MessageBroker';
import { MessageSquare } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  timestamp: string;
}

interface SubscriberProps {
  topic: string;
  name: string;
}

export function Subscriber({ topic, name }: SubscriberProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = broker.subscribe<Message>(topic, (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => unsubscribe();
  }, [topic]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="text-blue-500" />
        <h2 className="text-lg font-semibold">Suscriptor: {name}</h2>
      </div>
      <div className="space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-50 p-3 rounded-md">
            <p className="text-gray-800">{msg.content}</p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-gray-500 italic">No hay mensajes aún</p>
        )}
      </div>
    </div>
  );
}