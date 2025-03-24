import React from 'react';
import { Publisher } from './components/Publisher';
import { Subscriber } from './components/Subscriber';
import { Activity } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="text-blue-500 w-8 h-8" />
          <h1 className="text-3xl font-bold text-gray-800">Sistema de Mensajería</h1>
        </div>

        <div className="grid gap-8">
          {/* Publishers */}
          <div className="grid md:grid-cols-2 gap-4">
            <Publisher topic="notifications" title="Notificaciones" />
            <Publisher topic="alerts" title="Alertas" />
          </div>

          {/* Subscribers */}
          <div className="grid md:grid-cols-2 gap-4">
            <Subscriber topic="notifications" name="Gestor de Notificaciones" />
            <Subscriber topic="alerts" name="Monitor de Alertas" />
            <Subscriber topic="notifications" name="Registro de Notificaciones" />
            <Subscriber topic="alerts" name="Panel de Alertas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;