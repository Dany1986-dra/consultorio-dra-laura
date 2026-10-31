# Documentación del Proyecto: SonrisaApp (Consultorio Dental Dra. Laura)

Este documento recopila las peticiones (prompts) originales, el desarrollo por fases, las características del sistema y la metodología aplicada con Inteligencia Artificial para el consultorio dental de la Dra. Laura.

---

## 1. Peticiones (Prompts) de las Tareas 1, 2 y 3

### Petición de la Tarea 1: Prototipo Funcional
> "Actualiza y convierte el prototipo del consultorio dental de la Dra. Laura en una aplicación funcional, vendible y lista para publicar. El objetivo principal es reducir las inasistencias y lograr que los pacientes terminen tratamientos de varias sesiones, sin incluir facturación ni expediente clínico. Contexto: la Dra. Laura trabaja con una asistente y actualmente agenda en Google Calendar. Cerca del 30% de los pacientes no acude y la asistente pierde gran parte de la mañana enviando recordatorios individuales por WhatsApp. Los tratamientos como endodoncias y ortodoncia se abandonan cuando desaparece el dolor."

### Petición de la Tarea 2: Spec-Driven Development y Diseño de Marca
> "Aplica Spec Driven Development: Crea un archivo de instrucciones generales del proyecto con reglas de producto, diseño, accesibilidad y desarrollo. Crea una especificación del feature principal: seguimiento automático de citas y tratamientos. Incluye problema, solución y entre 3 y 5 criterios de aceptación verificables. Crea una skill de diseño de marca para la aplicación: nombre, tono, colores, tipografía, espaciado, componentes, estados, accesibilidad y estilo visual."

### Petición de la Tarea 3: ICP, Nueva SPEC y Lanzamiento a Producción
> "Paso 1: ICP y user persona. Basándote en la definición del problema que atacaste, define el ICP o user persona. Paso 2: Funciona e importa. Crea una nueva SPEC para una característica nueva sobre el proyecto de la clase 2, incluyendo criterios de aceptación y métricas de éxito. Paso 3: Lanza a producción. En este último entregable, la URL funcionando en línea es 100% requerida, así que define a dónde lanzarás tu página, y hazlo (Vercel, Netlify, Render)."

---

## 2. Desarrollo por Fases y Entregables

### Fase 1: Prototipo Operativo y Automatización Básica
* **Dashboard:** Vista centralizada de la agenda del día.
* **Integración WhatsApp:** Enlaces URI directos (`wa.me`) con mensajes prellenados para evitar la escritura manual de recordatorios por parte de la asistente.
* **Integración Calendario:** Acceso directo a [Google Calendar](https://calendar.google.com) para la creación rápida de nuevas citas.

### Fase 2: Spec-Driven Development (SDD) y Marca ("SonrisaApp")
* **Reglas de Producto:** Enfoque en la reducción del ausentismo (~30%) y retención de tratamientos largos (endodoncias/ortodoncia), omitiendo expedientes médicos complejos y facturación.
* **Criterios de Aceptación (SPEC Principal):** Validación de estados de confirmación, alertas de inasistencia y filtros dinámicos.
* **Identidad Visual:** Paleta de colores basada en Azul Clínico (`#0284c7`) y Verde WhatsApp (`#25d366`), con tipografía legible (*Inter*).

### Fase 3: ICP, Nueva SPEC y Producción
* **ICP / User Persona:** Sofía (Asistente Dental y Recepcionista), cuyo objetivo es reducir el tiempo administrativo diario de 2 horas a menos de 20 minutos y disminuir el ausentismo clínico.
* **Nueva SPEC (Modo Oscuro y Filtrado Dinámico):** Incorporación de un módulo de alternancia de tema (Modo Oscuro / Claro) mediante un solo clic, adaptado para turnos vespertinos y control visual optimizado.
* **Métricas de Éxito:** Reducción del ausentismo del 30% al 10% e incremento del 85% en la finalización de tratamientos multisesión.
* **Despliegue:** Arquitectura modular separada en VS Code (`index.html`, `style.css`, `script.js`) lista para producción en plataformas en la nube como [Vercel](https://vercel.com) o [Netlify](https://www.netlify.com).

---

## 3. Características Clave del Sistema

1. **Dashboard Centralizado:** Monitoreo visual de la agenda diaria de la clínica.
2. **Mensajería Instantánea por WhatsApp:** Botones con plantillas prellenadas de confirmación, recordatorio y reactivación.
3. **Control de Tratamientos Multisesión:** Seguimiento del número de sesión actual para evitar abandonos tras la desaparición del dolor.
4. **Centro de Alertas:** Notificaciones visuales de pacientes en riesgo o con inasistencia reciente.
5. **Búsqueda y Filtros Globales:** Filtrado en tiempo real por nombre de paciente o estado clínico.
6. **Modo Oscuro Nativo:** Alternancia de tema para mayor comodidad visual de la asistente.
7. **Diseño Responsive:** Adaptabilidad fluida (*mobile-first*) para computadoras, tablets y teléfonos móviles.

---

## 4. Herramienta de IA Utilizada

* **Asistente de Desarrollo:** Desarrollado íntegramente con asistencia de **Gemini** como IA colaboradora personal y de ingeniería de software.
* **Metodología Aplicada:** *Spec-Driven Development (SDD)* para el diseño, estructuración modular del código fuente y documentación técnica orientada a producción.

---

© 2026 SonrisaApp. Todos los derechos reservados. 
 Daniel Rivera Alpízar.
*Sistema optimizado para la gestión del consultorio dental de la Dra. Laura.*