# Sistema de Mensajería con Patrón Broker

## 📋 Información del Proyecto

**Desarrollador:** [Tu Nombre]  
**Fecha:** [Fecha de Entrega]  
**Versión:** 1.0.0  
**Estado:** Producción

## 📝 Descripción

Este proyecto implementa un sistema de mensajería en tiempo real utilizando el patrón de arquitectura Broker. La aplicación demuestra la comunicación desacoplada entre componentes a través de un intermediario centralizado, permitiendo una arquitectura escalable y mantenible.

## 🎯 Objetivos Cumplidos

- ✅ Implementación completa del patrón Broker
- ✅ Sistema de publicación/suscripción en tiempo real
- ✅ Interfaz de usuario intuitiva y responsive
- ✅ Gestión eficiente de mensajes por tópicos
- ✅ Código limpio y bien documentado

## 🛠️ Tecnologías Utilizadas

- React 18.3.1
- TypeScript
- Tailwind CSS
- Lucide React (iconos)
- Vite (bundler)

## 📦 Requisitos del Sistema

- Node.js 18.x o superior
- npm 9.x o superior

## 🚀 Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd sistema-mensajeria-broker
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 💡 Funcionalidades Implementadas

### Publicadores
- Sistema de notificaciones
- Sistema de alertas
- Envío de mensajes en tiempo real
- Validación de mensajes

### Suscriptores
- Gestor de notificaciones
- Monitor de alertas
- Registro de notificaciones
- Panel de alertas

## 🔍 Estructura del Proyecto

```
src/
├── broker/
│   └── MessageBroker.ts     # Implementación del patrón Broker
├── components/
│   ├── Publisher.tsx        # Componente publicador
│   └── Subscriber.tsx       # Componente suscriptor
└── App.tsx                  # Componente principal
```

## ⚙️ Configuración de Desarrollo

Para ejecutar en modo desarrollo:
```bash
npm run dev
```

Para construir el proyecto:
```bash
npm run build
```

## 📈 Pruebas y Validación

El sistema ha sido probado exhaustivamente para garantizar:
- Comunicación efectiva entre publicadores y suscriptores
- Gestión correcta de múltiples tópicos
- Manejo adecuado de desuscripciones
- Rendimiento óptimo con múltiples mensajes

## 📚 Documentación Adicional

- [DESCRIPCION.md](./DESCRIPCION.md) - Descripción detallada del sistema
- [PRUEBAS.md](./PRUEBAS.md) - Guía de pruebas y validación

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear una rama para la nueva funcionalidad
3. Commit de los cambios
4. Push a la rama
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.