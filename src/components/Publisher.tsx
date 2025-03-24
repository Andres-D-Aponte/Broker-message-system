import React, { useState } from 'react';
import { broker } from '../broker/MessageBroker';
import { Send } from 'lucide-react';

interface PublisherProps {
  topic: string;
  title: string;
}

export function Publisher({ topic, title }: PublisherProps) {
  const [message, setMessage] = useState('');

  const handlePublish = () => {
    if (message.trim()) {
      broker.publish(topic, {
        id: Date.now(),
        content: message,
        timestamp: new Date().toISOString()
      });
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Publicador: {title}</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe un mensaje..."
        />
        <button
          onClick={handlePublish}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <Send size={18} />
          Enviar
        </button>
      </div>
    </div>
  );
}