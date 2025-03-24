# Guía de Pruebas del Patrón Broker

## 🎯 Funcionamiento del Sistema

El sistema implementa el patrón Broker a través de tres componentes principales:

1. **MessageBroker** (`src/broker/MessageBroker.ts`):
   - Actúa como intermediario central
   - Gestiona la comunicación entre publicadores y suscriptores
   - Mantiene el registro de suscripciones

2. **Publishers** (`src/components/Publisher.tsx`):
   - Envían mensajes al broker
   - No conocen a los suscriptores
   - Están desacoplados del destino final del mensaje

3. **Subscribers** (`src/components/Subscriber.tsx`):
   - Reciben mensajes del broker
   - No conocen el origen de los mensajes
   - Se suscriben a tópicos específicos

## 📝 Cómo Probar el Sistema

1. **Prueba Básica de Publicación/Suscripción**:
   - Escribe un mensaje en el publicador "notifications"
   - Observa cómo SOLO los suscriptores de "notifications" reciben el mensaje
   - Escribe un mensaje en el publicador "alerts"
   - Verifica que SOLO los suscriptores de "alerts" reciben el mensaje

2. **Prueba de Desacoplamiento**:
   - Los publicadores no tienen referencia directa a los suscriptores
   - Los suscriptores no conocen quién publica los mensajes
   - Toda la comunicación pasa por el broker

3. **Prueba de Múltiples Suscriptores**:
   - Envía un mensaje desde cualquier publicador
   - Verifica que TODOS los suscriptores del mismo tópico reciben el mensaje
   - Esto demuestra la capacidad de broadcast del broker

4. **Prueba de Independencia de Tópicos**:
   - Los mensajes enviados a "notifications" no aparecen en suscriptores de "alerts"
   - Los mensajes enviados a "alerts" no aparecen en suscriptores de "notifications"

## 🔍 Evidencia del Patrón Broker

El patrón Broker se evidencia en:

1. **Desacoplamiento Total**:
   ```typescript
   // Publisher no conoce a los suscriptores
   broker.publish(topic, message);
   
   // Subscriber no conoce a los publicadores
   broker.subscribe(topic, message => {});
   ```

2. **Centralización**:
   - Toda la comunicación pasa por `MessageBroker`
   - No hay comunicación directa entre componentes

3. **Gestión de Tópicos**:
   - El broker mantiene un registro de suscriptores por tópico
   - Los mensajes se distribuyen según el tópico

4. **Limpieza de Recursos**:
   - Los suscriptores se desuscriben automáticamente al desmontarse
   - Evita memory leaks y suscripciones huérfanas

## 🚀 Pasos para Probar

1. Inicia la aplicación:
   ```bash
   npm run dev
   ```

2. Abre dos ventanas del navegador lado a lado

3. En la primera ventana:
   - Escribe un mensaje en el publicador "notifications"
   - Observa que solo los suscriptores de "notifications" lo reciben

4. En la segunda ventana:
   - Escribe un mensaje en el publicador "alerts"
   - Observa que solo los suscriptores de "alerts" lo reciben

5. Verifica:
   - Los mensajes llegan instantáneamente
   - Cada mensaje tiene su timestamp
   - Los suscriptores mantienen el historial de mensajes