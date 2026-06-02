---
layout: slide-01-portada
---

::title::
Internet de las Cosas

::week::
Semana 4

::date::
Mayo 25 de 2026

<!--
Notas del presentador:
Dé la bienvenida formal a la Open Class de la semana 4. Presente la sesión como un espacio de conexión entre la teoría del Internet de las Cosas y la programación práctica de dispositivos conectados. Enfatice que la clase no reemplaza el aula virtual, sino que ofrece una experiencia guiada, aplicada y participativa para comprender cómo se programa una solución IoT desde un microcontrolador, un sensor, una lógica de decisión y una posible conexión hacia servicios de datos. Recuerde la tolerancia máxima de cinco minutos para iniciar, el propósito académico de la sesión y la importancia de participar activamente en la actividad corta, la práctica en Wokwi, la socialización y el cierre institucional.
-->

---
layout: slide-02-titulo
---

::title::
Desarrollo y programación en IoT

<!--
Notas del presentador:
Explique que esta semana se centra en los fundamentos del desarrollo de software para sistemas IoT. La intención es que los estudiantes identifiquen lenguajes, plataformas, entornos de desarrollo, arquitecturas de software, protocolos de comunicación, prácticas de seguridad y servicios en la nube que permiten construir soluciones conectadas. Anticipe que la clase tendrá momentos conceptuales y prácticos: primero se activarán saberes previos, luego se desarrollarán los conceptos principales, después se relacionarán con la evaluación de la semana y finalmente se realizará una práctica guiada en Wokwi usando ESP32 y MicroPython.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Programar IoT es integrar capas

::image:: 
<img src="/imagenes/iot_capas_desarrollo.png" alt="Imagen de apoyo sobre capas de desarrollo en IoT" />

::content::
Un sistema IoT combina elementos físicos y digitales:

* Sensores que capturan variables del entorno.
* Microcontroladores que ejecutan instrucciones.
* Lenguajes de programación que controlan hardware y lógica.
* Protocolos que permiten comunicación entre dispositivos y servicios.
* Plataformas que gestionan datos, dispositivos y automatizaciones.
* Prácticas de seguridad que protegen información, identidad y operación.

Programar IoT implica tomar decisiones técnicas sobre eficiencia, confiabilidad, interoperabilidad, escalabilidad y seguridad.

<!--
Notas del presentador:
Explique que el desarrollo IoT se diferencia de una aplicación tradicional porque no se limita a una pantalla o a una base de datos. En IoT existe una relación directa con el mundo físico: temperatura, humedad, energía, presencia, movimiento, distancia, presión o luminosidad. Cada lectura puede generar una acción, una alerta, un registro o una decisión automatizada. Señale que herramientas como Wokwi permiten simular parte de este proceso sin requerir inicialmente todos los componentes físicos. Wokwi documenta que su simulador ESP32 permite ejecutar proyectos con Arduino Core, MicroPython, CircuitPython, Rust y firmware personalizado. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad: de lo cotidiano al IoT

::content::
**Instrucción:**
seleccione un objeto cotidiano del aula, la casa o el trabajo y responda rápidamente:

1. ¿Qué variable podría medir?
2. ¿Qué sensor podría utilizar?
3. ¿Qué decisión automática podría tomar?
4. ¿Qué dato enviaría a una plataforma?
5. ¿Qué riesgo de seguridad debería evitar?

**Producto rápido:**
Una idea de solución IoT expresada en una frase.

**Ejemplo:**
“Un aula inteligente mide temperatura y ocupación para activar ventilación y reportar condiciones al panel de mantenimiento”.

<!--
Notas del presentador:
Organice la actividad de forma ágil. Puede pedir respuestas por chat, voz, formulario breve o lluvia de ideas. La clave no es construir todavía una solución perfecta, sino identificar la estructura mínima de una idea IoT: variable, sensor, procesamiento, acción y comunicación. Invite a los estudiantes a pensar en objetos como lámparas, puertas, ventiladores, tomacorrientes, tableros, plantas, neveras, casilleros, máquinas o vehículos. Cierre la actividad mostrando que cada idea requiere decisiones de programación y arquitectura.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización rápida de la actividad

::left::
**Para compartir:**

* Objeto seleccionado.
* Variable medida.
* Sensor o entrada.
* Acción automática.
* Dato que se enviaría.
* Riesgo de seguridad.

::right::
**Criterios:**

* ¿La variable es observable?
* ¿La acción es coherente?
* ¿El dato aporta valor?
* ¿La solución requiere conectividad?
* ¿El riesgo de seguridad fue considerado?
* ¿Se podría simular en Wokwi?

<!--
Notas del presentador:
Seleccione dos o tres participaciones. Evite que la socialización se extienda más de lo previsto. Use las respuestas para introducir el desarrollo conceptual: toda solución IoT necesita una arquitectura de software. Pregunte qué lenguaje usarían, dónde se ejecutaría el código, cómo se comunicaría el dispositivo y qué plataforma permitiría monitorear la solución. Esta transición ayuda a que el tema no se perciba como abstracto, sino como una necesidad técnica derivada de una idea aplicada.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender el desarrollo en IoT

::content::
En el desarrollo de sistemas IoT, un **microcontrolador** es una unidad de cómputo compacta que integra procesador, memoria y periféricos de entrada/salida para interactuar con sensores y actuadores. A diferencia de un computador convencional, suele operar con recursos limitados, por lo que el código debe ser eficiente, estable y adecuado al hardware. Un **sensor** convierte una condición física del entorno en una señal o dato que puede ser interpretado por el sistema; por ejemplo, temperatura, humedad, movimiento, luz o distancia. Un **actuador** realiza una acción sobre el entorno, como encender un LED, activar un relé, mover un motor o emitir una alerta.

El **firmware** es el software que se ejecuta directamente en el dispositivo embebido. En IoT, este firmware puede leer sensores, aplicar reglas, comunicarse por Wi-Fi, BLE, MQTT o HTTP, y enviar datos a una plataforma. 
Un **IDE** o entorno de desarrollo integrado facilita la escritura, prueba y depuración del programa. Plataformas como Wokwi permiten simular proyectos con ESP32 y MicroPython, lo cual reduce la barrera de entrada al aprendizaje práctico.

La **interoperabilidad** se refiere a la capacidad de dispositivos, plataformas y servicios de diferentes fabricantes para comunicarse mediante estándares comunes. Protocolos como MQTT son relevantes porque permiten un modelo de publicación y suscripción ligero, útil para dispositivos con recursos limitados. La **nube** permite almacenar, procesar, visualizar y escalar los datos generados por muchos dispositivos. Finalmente, la **seguridad** debe considerarse desde el diseño: autenticación, cifrado, actualización de firmware, gestión de credenciales y protección de datos son elementos esenciales para evitar accesos no autorizados y fallos operativos.

<!--
Notas del presentador:
Use esta diapositiva como base conceptual extendida. Puede dividir la explicación en tres bloques: primero, el dispositivo físico; segundo, el software que vive dentro del dispositivo; tercero, la comunicación y gestión de datos. Es importante que el estudiante entienda que IoT no es solamente conectar cosas a internet, sino construir sistemas ciberfísicos donde un evento del mundo real se convierte en dato, el dato se procesa y el sistema responde. MQTT está documentado como un protocolo estándar OASIS, ligero y basado en publicación/suscripción para mensajería IoT. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Lenguajes usados en IoT

::rightTitle::
Criterios de selección

::left::
**MicroPython**
Apropiado para aprendizaje, prototipado rápido y control de hardware en placas compatibles.

**C/C++**
Frecuente en firmware de alto rendimiento y control de bajo nivel.

**JavaScript / Node.js**
Útil en gateways, paneles, servicios web y prototipos conectados.

**Java**
Presente en sistemas empresariales, automatización e integración con plataformas robustas.

**Python**
Usado en análisis de datos, automatización, scripts, pruebas y prototipos.

::right::
La elección depende de:

* Recursos del dispositivo.
* Consumo energético.
* Necesidad de tiempo real.
* Facilidad de depuración.
* Comunidad y bibliotecas.
* Compatibilidad con sensores.
* Integración con nube.
* Seguridad y mantenimiento.
* Escalabilidad del proyecto.
* Perfil del equipo desarrollador.

<!--
Notas del presentador:
Aclare que no existe un único lenguaje universal para IoT. En una misma solución puede haber MicroPython o C++ en el microcontrolador, Python para análisis de datos, JavaScript para el panel web y servicios en la nube para almacenamiento. Relacione esta idea con la evaluación: cuando se pregunta por un lenguaje utilizado en automatización IoT, se espera reconocer opciones que sí tienen presencia real en desarrollo de sistemas, no lenguajes históricos o no orientados al contexto propuesto. Explique que Java puede aparecer en integraciones empresariales y automatización, aunque para microcontroladores educativos de bajo costo es común encontrar MicroPython, C/C++ o Arduino.
-->

---
layout: slide-04-imagen-derecha
---

::title::
ESP32 y MicroPython: una dupla para aprender haciendo

::image:: 
<img src="/imagenes/iot_esp32_micropython.png" alt="Imagen de apoyo sobre ESP32 programado con MicroPython" />

::content::
El **ESP32** es una placa ampliamente usada en educación y prototipado IoT por integrar conectividad, entradas/salidas digitales, lectura de sensores y capacidad de ejecutar lógica local.

**MicroPython** permite escribir programas con una sintaxis cercana a Python para controlar pines, leer sensores y construir prototipos de manera rápida.

En Wokwi, los proyectos MicroPython se ejecutan desde un archivo `main.py`, lo que facilita simular el comportamiento del dispositivo antes de llevarlo al montaje físico.

<!--
Notas del presentador:
Explique que el ESP32 es una excelente puerta de entrada al desarrollo IoT porque permite trabajar con sensores, actuadores y comunicación inalámbrica en una sola placa. En la práctica de hoy no se profundizará en todas sus capacidades, pero sí se usará una lógica representativa: leer una variable ambiental y activar una alerta. Wokwi documenta que los proyectos MicroPython incluyen un archivo main.py que se carga y ejecuta automáticamente al iniciar la simulación. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-08-titulo-texto
---

::title::
IDE y entornos de desarrollo para proyectos IoT

::content::
Un entorno de desarrollo para IoT debe permitir escribir, probar, cargar, depurar y documentar el software del dispositivo.

**Opciones frecuentes:**

* **Wokwi:** simulación de circuitos, sensores, microcontroladores y ejecución de código en navegador.
* **Arduino IDE:** programación de placas compatibles usando C/C++ y bibliotecas del ecosistema Arduino.
* **Thonny:** edición y ejecución de MicroPython en placas compatibles.
* **VS Code:** desarrollo más avanzado mediante extensiones, control de versiones y organización de proyectos.
* **PlatformIO:** gestión profesional de proyectos embebidos, dependencias, placas y entornos.

Un buen entorno reduce errores, acelera la iteración y facilita la colaboración entre perfiles de electrónica, software, datos y diseño.

<!--
Notas del presentador:
Indique que la elección del IDE depende del nivel de experiencia, el tipo de hardware, el lenguaje y el objetivo del proyecto. Para esta clase se privilegia Wokwi porque permite iniciar sin instalar drivers ni conectar componentes físicos. Sin embargo, cuando el proyecto pasa a una fase física, puede ser necesario usar Thonny, Arduino IDE, VS Code o PlatformIO. Aproveche para explicar que el desarrollo profesional IoT requiere trazabilidad del código, pruebas, documentación y control de versiones.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Arquitectura de software en IoT

::left::
**En el dispositivo**

* Lectura de sensores.
* Control de actuadores.
* Validación básica de datos.
* Reglas locales.
* Gestión de errores.
* Comunicación con red.
* Ahorro energético.
* Registro de eventos.

::right::
**Fuera del dispositivo**

* Broker MQTT.
* API HTTP.
* Base de datos.
* Plataforma IoT.
* Dashboard.
* Analítica de datos.
* Alertas.
* Actualizaciones.
* Gestión de usuarios y dispositivos.

<!--
Notas del presentador:
Explique que una arquitectura IoT distribuye responsabilidades. No todo debe resolverse dentro del microcontrolador, especialmente si sus recursos son limitados. Algunas decisiones pueden tomarse en el borde, por ejemplo activar una alarma si la temperatura supera un umbral. Otras se gestionan mejor en la nube, como almacenar datos históricos, analizar tendencias, administrar usuarios o integrar varios dispositivos. AWS IoT Core se presenta como un servicio que permite comunicación segura bidireccional entre dispositivos conectados y servicios de AWS, con capacidades asociadas a gateway y SDK de dispositivos. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Comunicación entre dispositivos: BLE, Wi-Fi, HTTP y MQTT

::image:: 
<img src="/imagenes/iot_protocolos_comunicacion.png" alt="Imagen de apoyo sobre protocolos de comunicación IoT" />

::content::
En IoT, la comunicación debe seleccionarse según el contexto:

**BLE** es común para comunicación inalámbrica de corto alcance y bajo consumo.

**Wi-Fi** permite conectividad IP con mayor ancho de banda, adecuada para prototipos, hogares, aulas y redes locales.

**HTTP** es útil para integrarse con servicios web, APIs y aplicaciones tradicionales.

**MQTT** es especialmente relevante en IoT por su modelo ligero de publicación/suscripción, útil para telemetría, eventos y comunicación dispositivo-nube.

<!--
Notas del presentador:
Relacione esta diapositiva con la pregunta de evaluación sobre comunicación de corto alcance y con la pregunta sobre interoperabilidad. BLE suele asociarse a bajo consumo y cercanía entre dispositivos. MQTT es ampliamente adoptado para comunicación IoT por su ligereza, su modelo de tópicos y su capacidad de desacoplar publicadores y suscriptores. OASIS describe MQTT como un protocolo ligero de publicación/suscripción apto para comunicación M2M e IoT cuando se requiere una huella pequeña de código o bajo uso de ancho de banda. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-08-titulo-texto
---

::title::
Seguridad en el desarrollo IoT

::content::
La seguridad debe diseñarse desde el inicio y no añadirse al final.

**Buenas prácticas esenciales:**

* Usar cifrado en las comunicaciones.
* Evitar contraseñas por defecto o en texto claro.
* Proteger credenciales y llaves.
* Autenticar dispositivos y usuarios.
* Actualizar firmware.
* Validar datos recibidos.
* Segmentar redes.
* Registrar eventos relevantes.
* Aplicar mínimos privilegios.
* Diseñar recuperación ante fallos.

En soluciones conectadas, una mala práctica de seguridad puede comprometer datos, dispositivos, usuarios y procesos físicos.

<!--
Notas del presentador:
Explique que la pregunta de evaluación sobre comunicaciones seguras apunta a reconocer la importancia del cifrado de extremo a extremo cuando se transmiten datos entre dispositivos y servidores. Aunque el rendimiento es importante, nunca debe justificar deshabilitar medidas de seguridad fundamentales. Use ejemplos sencillos: un sensor de aula podría parecer inofensivo, pero si comparte credenciales de red, ubicación, patrones de ocupación o acceso remoto, se convierte en un punto vulnerable. En Wokwi, la guía de Wi-Fi señala que el gateway público permite aprender redes con ESP32, pero no debe usarse para datos privados o sensibles, porque el tráfico puede ser monitoreado con fines de seguridad. :contentReference[oaicite:5]{index=5}
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Nube, plataformas y gestión de dispositivos

::image:: 
<img src="/imagenes/iot_nube_gestion_dispositivos.png" alt="Imagen de apoyo sobre nube y gestión de dispositivos IoT" />

::content::
Las plataformas IoT facilitan el trabajo con muchos dispositivos conectados.

Permiten:

* Registrar y autenticar dispositivos.
* Recibir telemetría.
* Monitorear estados.
* Gestionar actualizaciones.
* Integrar reglas y alertas.
* Enviar datos a dashboards.
* Escalar almacenamiento y procesamiento.
* Conectar servicios de analítica.

Ejemplos: **Azure IoT Hub**, **AWS IoT** y servicios integrados de analítica o mensajería.

<!--
Notas del presentador:
Relacione esta diapositiva con las preguntas de evaluación sobre Azure IoT Hub, AWS IoT y computación en la nube. Explique que cuando se pasa de un prototipo individual a una solución institucional o industrial, se requiere gestionar dispositivos de forma centralizada. Azure IoT Hub se presenta como una plataforma para conectar, monitorear y administrar activos IoT, con comunicación bidireccional, autenticación por dispositivo y gestión incorporada. :contentReference[oaicite:6]{index=6}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
IoT + analítica de datos + aprendizaje automático

::left::
**Analítica de datos**

Los datos IoT pueden convertirse en información útil mediante:

* Limpieza.
* Agregación.
* Visualización.
* Detección de patrones.
* Alertas.
* Predicción.
* Toma de decisiones.

Herramientas como **Apache Spark** se usan para procesamiento distribuido y análisis de grandes volúmenes de datos.

::right::
**Aprendizaje automático**

El aprendizaje automático puede apoyar:

* Clasificación de eventos.
* Detección de anomalías.
* Mantenimiento predictivo.
* Reconocimiento de patrones.
* Automatización inteligente.

**TensorFlow** y sus variantes para dispositivos permiten explorar modelos de ML en escenarios IoT.

<!--
Notas del presentador:
Explique que IoT genera datos, pero el valor surge cuando esos datos se interpretan. Apache Spark Structured Streaming permite construir aplicaciones y canalizaciones de streaming con APIs familiares de Spark. :contentReference[oaicite:7]{index=7} También indique que TensorFlow Lite para Microcontroladores, actualmente presentado por Google AI Edge como LiteRT for Microcontrollers, está diseñado para ejecutar modelos de aprendizaje automático en microcontroladores y otros dispositivos con muy poca memoria. :contentReference[oaicite:8]{index=8}
-->

---
layout: slide-08-titulo-texto
---

::title::
Metodologías ágiles aplicadas a proyectos IoT

::content::
Los proyectos IoT combinan hardware, software, datos, conectividad, seguridad y experiencia de usuario. Por eso, conviene trabajar con iteraciones breves.

**Enfoque sugerido:**

1. Definir el problema y la variable a medir.
2. Construir un prototipo mínimo funcional.
3. Simular el comportamiento.
4. Probar con datos controlados.
5. Validar con usuarios o contexto real.
6. Mejorar el hardware, el código y la comunicación.
7. Documentar decisiones técnicas.
8. Repetir el ciclo.

La iteración rápida evita invertir demasiado tiempo en una solución que aún no ha sido validada.

<!--
Notas del presentador:
Explique que IoT exige colaboración multidisciplinaria. Un equipo puede incluir personas con conocimientos de electrónica, programación, redes, análisis de datos, diseño de interfaces, ciberseguridad y gestión del proyecto. Las metodologías ágiles ayudan a coordinar esa complejidad mediante entregables pequeños, pruebas frecuentes y retroalimentación. Relacione esta idea con la práctica de Wokwi: antes de comprar sensores o soldar circuitos, se puede simular una primera versión, detectar errores de lógica y mejorar el diseño.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ejemplo aplicado 1: aula inteligente

::content::
Una institución desea monitorear las condiciones ambientales de un aula para mejorar la comodidad y apoyar decisiones de mantenimiento.

**Variables posibles:**

* Temperatura.
* Humedad.
* Nivel de iluminación.
* Ocupación.
* Ruido ambiental.
* Consumo energético.

**Lógica IoT inicial:**

* Si la temperatura supera un umbral, generar alerta.
* Si la humedad está fuera de rango, registrar evento.
* Si el aula está vacía, sugerir ahorro energético.
* Si hay condiciones críticas, enviar notificación al responsable.

<!--
Notas del presentador:
Use este ejemplo para conectar el tema con un entorno cercano a los estudiantes. Señale que el valor no está únicamente en medir, sino en usar la medición para tomar decisiones. Pregunte al grupo qué lenguaje usarían para el microcontrolador, qué protocolo usarían para enviar datos y qué dashboard permitiría visualizar tendencias. Este ejemplo también prepara la práctica guiada, porque se usará una versión simplificada con DHT22 y LED de alerta.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ejemplo aplicado 2: monitoreo energético

::content::
Una empresa desea identificar puntos críticos de consumo energético mediante sensores conectados.

**Componentes conceptuales:**

* Sensores de corriente o potencia.
* Microcontrolador o gateway.
* Comunicación hacia plataforma IoT.
* Almacenamiento de datos.
* Dashboard de consumo.
* Alertas por comportamiento inusual.
* Analítica para detectar patrones.
* Seguridad en transmisión y acceso.

**Valor esperado:**
Reducir desperdicios, anticipar fallas, mejorar decisiones operativas y documentar indicadores de sostenibilidad.

<!--
Notas del presentador:
Explique que este ejemplo se relaciona con retos de innovación e industria. En monitoreo energético, el sistema no solo mide: también ayuda a priorizar decisiones y justificar acciones. Destaque la importancia de protocolos, nube, analítica y seguridad. Si el sistema crece a varias sedes o áreas de producción, se vuelve indispensable una plataforma de gestión de dispositivos y datos. Relacione esto con las preguntas de evaluación sobre nube, AWS IoT, Azure IoT Hub y Apache Spark.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Relación con la evaluación de la semana

::left::
**Conceptos que aparecen en la evaluación**

* TensorFlow.
* Cifrado de extremo a extremo.
* Java.
* Bluetooth Low Energy.
* MQTT.
* Computación en la nube.
* Python.
* Azure IoT Hub.
* AWS IoT.
* Apache Spark.

::right::
**Cómo abordarlos**

* Reconocer el rol de cada tecnología.
* Diferenciar lenguajes, plataformas y protocolos.
* Asociar BLE con corto alcance.
* Asociar MQTT con interoperabilidad IoT.
* Asociar nube con escalabilidad.
* Asociar cifrado con seguridad.
* Asociar Spark con análisis de datos.
* Asociar plataformas IoT con gestión de dispositivos.

<!--
Notas del presentador:
Presente esta diapositiva como una guía de estudio, no como una simple lista de respuestas. Explique que la evaluación busca verificar comprensión de relaciones: tecnología y función. Por ejemplo, TensorFlow se relaciona con aprendizaje automático; MQTT con mensajería IoT; BLE con comunicación de corto alcance; Azure IoT Hub con gestión y monitoreo de dispositivos; AWS IoT con desarrollo y operación de soluciones IoT; Apache Spark con procesamiento y análisis de datos. Invite a los estudiantes a justificar cada elección.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Pregunta tipo evaluación

::rightTitle::
Razonamiento esperado

::left::
¿Qué estándar de comunicación es ampliamente adoptado para asegurar la interoperabilidad entre dispositivos IoT de diferentes fabricantes?

Opciones posibles:

* HTTP.
* MQTT.
* SMTP.
* Telnet.

::right::
La respuesta esperada es **MQTT**, porque su modelo ligero de publicación y suscripción facilita la comunicación entre dispositivos, aplicaciones y servicios mediante tópicos.

No basta con memorizar el nombre: se debe comprender que MQTT desacopla quien publica un dato de quien lo consume.

<!--
Notas del presentador:
Use esta diapositiva para modelar cómo se responde una pregunta de selección múltiple. No se trata solo de escoger la opción correcta, sino de descartar distractores. HTTP puede servir para APIs, pero no es la respuesta más específica cuando se pregunta por interoperabilidad IoT basada en mensajería ligera. SMTP está relacionado con correo electrónico y Telnet es un protocolo inseguro y obsoleto para acceso remoto. MQTT es un estándar OASIS orientado a mensajería IoT y M2M. :contentReference[oaicite:9]{index=9}
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Protocolos de comunicación en IoT: MQTT

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/d23ORZ8wETQ?si=SblJoJG5wkYVQVQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Use esta diapositiva como orientación de curaduría. Antes de la clase, seleccione videos cortos y verificados, preferiblemente en español, con una duración no mayor a cinco minutos. No es indispensable reproducir ambos durante la sesión; pueden quedar como recurso de refuerzo. Si el tiempo es limitado, priorice el video de Wokwi antes de la práctica. Si el grupo ya conoce Wokwi, priorice un video breve sobre MQTT para fortalecer la comprensión de protocolos.
-->

---
layout: slide-02-titulo
---

::title::
Práctica guiada en Wokwi

<!--
Notas del presentador:
Realice una transición clara hacia la práctica. Indique que ahora se aplicará lo discutido mediante una simulación sencilla: un ESP32 leerá temperatura y humedad con un sensor DHT22, imprimirá datos en el monitor serial y activará un LED de alerta si las condiciones superan un umbral. Esta práctica es intencionalmente simple para que todos puedan seguirla. Explique que el objetivo no es construir todavía una solución completa en la nube, sino entender la lógica fundamental del dispositivo IoT.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad práctica: semáforo ambiental IoT local

::content::
**Propósito:**
Simular un dispositivo IoT básico que mide temperatura y humedad, clasifica el estado ambiental y activa una salida visual de alerta.

**Herramienta:**
Wokwi con ESP32 y MicroPython.

**Idea central:**
El dispositivo lee el sensor DHT22, imprime datos estructurados en el monitor serial y enciende un LED cuando la temperatura o la humedad superan valores definidos.

**Resultado de aprendizaje:**
Comprender cómo un programa embebido integra entrada, procesamiento local, salida visual y datos listos para comunicación.

<!--
Notas del presentador:
Explique que esta práctica representa el primer paso de una arquitectura IoT. El sensor entrega datos; el microcontrolador interpreta esos datos; el LED representa una salida local; el monitor serial permite observar la telemetría. En una evolución posterior, esos datos podrían enviarse por MQTT a un broker o a una plataforma IoT. Wokwi ofrece ejemplos de MicroPython con ESP32, DHT22 y MQTT que muestran cómo publicar datos de clima en un tópico. :contentReference[oaicite:10]{index=10}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios y conexiones sugeridas

::left::
**Componentes en Wokwi**

* ESP32 DevKit.
* Sensor DHT22.
* LED rojo.
* Resistencia de 220 Ω.
* Cables de conexión.
* Monitor serial.

**Archivos del proyecto**

* `main.py`
* `diagram.json`

::right::
**Conexiones sugeridas**

* DHT22 VCC → 3V3 del ESP32.
* DHT22 GND → GND del ESP32.
* DHT22 DATA → GPIO 15.
* LED ánodo → GPIO 21 mediante resistencia de 220 Ω.
* LED cátodo → GND.

**Umbrales iniciales**

* Temperatura alta: mayor o igual a 30 °C.
* Humedad alta: mayor o igual a 70 %.

<!--
Notas del presentador:
Oriente a los estudiantes en la construcción visual del circuito. Recalque que el pin de datos del sensor debe coincidir con el pin declarado en el código. Explique también la función de la resistencia del LED: limitar corriente y proteger el componente. Si algún estudiante usa otro pin, debe modificarlo también en el programa. Si el grupo presenta dificultades, comparta el código primero y luego verifique el diagrama paso a paso.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::

```python {lines:true, linenumbers:true}
# Semáforo ambiental IoT local
# ESP32 + DHT22 + LED de alerta
# Simulación para Wokwi con MicroPython

from machine import Pin
import dht
import time
import ujson

# Configuración de pines
PIN_DHT = 15
PIN_LED_ALERTA = 21

# Umbrales de clasificación ambiental
TEMP_ALTA = 30.0      # grados Celsius
HUM_ALTA = 70.0       # porcentaje de humedad relativa

# Inicialización de componentes
sensor = dht.DHT22(Pin(PIN_DHT))
led_alerta = Pin(PIN_LED_ALERTA, Pin.OUT)

def clasificar_estado(temperatura, humedad):
    """
    Clasifica el estado ambiental según temperatura y humedad.
    Retorna una etiqueta que puede ser usada para alertas o telemetría.
    """
    if temperatura >= TEMP_ALTA and humedad >= HUM_ALTA:
        return "ALERTA_TEMPERATURA_Y_HUMEDAD"
    elif temperatura >= TEMP_ALTA:
        return "ALERTA_TEMPERATURA"
    elif humedad >= HUM_ALTA:
        return "ALERTA_HUMEDAD"
    else:
        return "NORMAL"

def actualizar_salida_visual(estado):
    """
    Enciende el LED cuando existe una condición de alerta.
    Lo apaga cuando el estado ambiental es normal.
    """
    if estado == "NORMAL":
        led_alerta.off()
    else:
        led_alerta.on()

print("Iniciando sistema IoT local con ESP32 + DHT22...")
print("Lectura de temperatura y humedad cada 2 segundos.")
print("Modifique los valores del sensor en Wokwi para probar la alerta.")

while True:
    try:
        # Lectura del sensor
        sensor.measure()
        temperatura = sensor.temperature()
        humedad = sensor.humidity()

        # Procesamiento local
        estado = clasificar_estado(temperatura, humedad)

        # Salida visual
        actualizar_salida_visual(estado)

        # Telemetría simulada en formato JSON
        mensaje = {
            "dispositivo": "esp32-aula-01",
            "temperatura_c": temperatura,
            "humedad_pct": humedad,
            "estado": estado,
            "led_alerta": estado != "NORMAL"
        }

        print(ujson.dumps(mensaje))

    except OSError as error:
        print("Error al leer el sensor DHT22:", error)
        led_alerta.off()

    time.sleep(2)
```

<!--
Notas del presentador:
Lea el código por bloques. Primero explique las importaciones: Pin permite controlar entradas y salidas; dht permite usar el sensor; time permite temporizar; ujson permite imprimir datos estructurados. Luego explique la configuración de pines y umbrales. Después analice las funciones: una clasifica el estado y otra actualiza la salida visual. Finalmente, explique el ciclo principal: medir, procesar, actuar e imprimir telemetría. Este patrón se repite en muchos proyectos IoT: entrada, lógica, salida y comunicación.
-->

---
layout: slide-08-titulo-texto
---

::title::
Archivo `diagram.json` sugerido

::content::

```json {lines:true}
{
  "version": 1,
  "author": "Uri Shaked",
  "editor": "wokwi",
  "parts": [
    {
      "type": "wokwi-esp32-devkit-v1",
      "id": "esp",
      "top": 14.3,
      "left": -5,
      "attrs": { "env": "micropython-20220618-v1.19.1" }
    },
    { "type": "wokwi-dht22", "id": "dht1", "top": -38.1, "left": 167.4, "attrs": {} },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": 119.15,
      "left": 230.4,
      "attrs": { "value": "1000" }
    },
    {
      "type": "wokwi-led",
      "id": "led1",
      "top": 82.8,
      "left": 301.8,
      "attrs": { "color": "red", "flip": "1" }
    }
  ],
  "connections": [
    [ "esp:TX0", "$serialMonitor:RX", "", [] ],
    [ "esp:RX0", "$serialMonitor:TX", "", [] ],
    [ "dht1:VCC", "esp:3V3", "red", [ "v0" ] ],
    [ "dht1:SDA", "esp:D15", "green", [ "v0" ] ],
    [ "dht1:GND", "esp:GND.1", "black", [ "v0" ] ],
    [ "esp:D21", "r1:1", "orange", [ "h18.9", "v47.6" ] ],
    [ "r1:2", "led1:A", "green", [ "v0" ] ],
    [ "led1:C", "esp:GND.1", "black", [ "v0" ] ]
  ],
  "dependencies": {}
}

<!--
Notas del presentador:
Indique que este archivo es opcional si el docente prefiere construir el circuito manualmente desde la interfaz de Wokwi. Sin embargo, compartir el diagram.json puede acelerar la práctica cuando el grupo tiene poco tiempo. Verifique en la clase que los nombres de pines coincidan con el modelo de ESP32 seleccionado. Si Wokwi muestra diferencias de nomenclatura, el criterio central se mantiene: el sensor debe usar GPIO 15 y el LED GPIO 21. Recomiende guardar el proyecto antes de ejecutar.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Wokwi

::content::

1. Crear un nuevo proyecto de ESP32 con MicroPython en Wokwi.
2. Agregar el sensor DHT22, un LED y una resistencia de 220 Ω.
3. Realizar las conexiones sugeridas.
4. Copiar el código completo en el archivo `main.py`.
5. Ejecutar la simulación.
6. Abrir el monitor serial.
7. Modificar la temperatura y la humedad del DHT22 desde el simulador.
8. Observar el cambio del estado en el monitor serial.
9. Verificar que el LED se encienda cuando exista alerta.
10. Cambiar los umbrales y analizar el comportamiento.

<!--
Notas del presentador:
Guíe la prueba paso a paso. Sugiera comenzar con valores normales, por ejemplo 24 °C y 50 % de humedad. Luego aumente la temperatura por encima de 30 °C y observe que el estado cambia. Después aumente la humedad por encima de 70 %. Finalmente, suba ambas variables para observar la clasificación combinada. Recalque que el monitor serial funciona como una primera forma de telemetría; en un sistema conectado, esos datos podrían enviarse a un broker MQTT, una API o una plataforma IoT.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y criterios de logro

::left::
**Producto esperado**

Una simulación funcional en Wokwi donde:

* El ESP32 lee temperatura y humedad.
* El monitor serial muestra datos en formato JSON.
* El sistema clasifica el estado ambiental.
* El LED se enciende ante una condición de alerta.
* Los umbrales pueden modificarse.

::right::
**Criterios de logro**

* El circuito está conectado correctamente.
* El código ejecuta sin errores.
* El sensor responde a cambios simulados.
* La lógica de clasificación es comprensible.
* La salida visual coincide con el estado.
* El estudiante puede explicar cómo evolucionaría hacia MQTT o nube.

<!--
Notas del presentador:
Indique que el producto no será evaluado por complejidad estética, sino por comprensión técnica. Lo importante es que el estudiante pueda explicar qué hace cada parte del sistema. Si algunos estudiantes no logran completar la simulación, pida que observen la ejecución del docente y documenten el patrón de funcionamiento. La práctica se puede complementar posteriormente con MQTT, almacenamiento en la nube o visualización en dashboard.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis sobre la práctica

::content::

1. ¿Qué representa el sensor dentro de la arquitectura IoT?
2. ¿Qué función cumple el ESP32 en el sistema?
3. ¿Por qué conviene clasificar el estado localmente antes de enviar datos?
4. ¿Qué ventajas tendría enviar el mensaje JSON a una plataforma IoT?
5. ¿Qué protocolo sería adecuado para publicar periódicamente estas mediciones?
6. ¿Qué riesgos existirían si las credenciales de red estuvieran escritas directamente en el código?
7. ¿Cómo se podría escalar este prototipo a varias aulas o laboratorios?
8. ¿Qué dato adicional permitiría tomar mejores decisiones?

<!--
Notas del presentador:
Use estas preguntas para orientar la reflexión después de la práctica. No es necesario responder todas si el tiempo es limitado; seleccione tres o cuatro según el avance del grupo. Busque que los estudiantes conecten el ejercicio con el desarrollo conceptual: sensores, microcontrolador, lógica local, comunicación, nube, seguridad y escalabilidad. La pregunta sobre credenciales es clave para reforzar buenas prácticas de seguridad. La pregunta sobre escalabilidad permite volver a plataformas como Azure IoT Hub o AWS IoT.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Extensión 1: comunicación MQTT

::rightTitle::
Extensión 2: analítica y dashboard

::left::
El prototipo puede evolucionar para publicar los datos en un broker MQTT.

**Mensaje posible:**

```json
{
  "dispositivo": "esp32-aula-01",
  "temperatura_c": 31.4,
  "humedad_pct": 72.0,
  "estado": "ALERTA_TEMPERATURA_Y_HUMEDAD"
}
```

**Tópico sugerido:**
`uniminuto/iot/aula01/ambiente`

::right::
Los datos pueden almacenarse y visualizarse para:

* Ver tendencias.
* Comparar aulas.
* Detectar condiciones críticas.
* Generar alertas.
* Apoyar mantenimiento.
* Tomar decisiones institucionales.

Un dashboard convierte la telemetría en información comprensible para usuarios no técnicos.

<!--
Notas del presentador:
Explique que la práctica local es una base. Para transformarla en IoT completo, se necesita comunicación. MQTT resulta pertinente porque los dispositivos publican datos en tópicos y las aplicaciones interesadas se suscriben. También explique que una lectura aislada tiene poco valor, pero muchas lecturas en el tiempo permiten análisis. Allí entran bases de datos, dashboards, servicios en la nube y herramientas de procesamiento de datos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Errores frecuentes en programación IoT

::content::

* Conectar un sensor a un pin distinto al declarado en el código.
* No usar resistencia en salidas LED cuando corresponde.
* Leer sensores demasiado rápido.
* No manejar errores de lectura.
* Mezclar lógica de negocio con configuración sin comentarios.
* Usar nombres de variables poco claros.
* No documentar umbrales.
* Guardar credenciales sensibles en texto plano.
* No validar datos antes de enviarlos.
* Diseñar el prototipo sin pensar en escalabilidad.

<!--
Notas del presentador:
Use esta diapositiva para anticipar fallos reales. En proyectos IoT, muchos errores no son conceptuales sino de integración: el cable está mal ubicado, el pin no coincide, el sensor requiere una pausa, el código no contempla errores o las credenciales quedan expuestas. Invite a los estudiantes a leer los mensajes del monitor serial y a depurar con método. La depuración es una competencia central en el desarrollo IoT.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
**Duración:** 7 minutos.

Cada estudiante o equipo comparte:

* Estado de la simulación.
* Dato observado en el monitor serial.
* Condición que activó el LED.
* Cambio realizado en el umbral.
* Una posible mejora del prototipo.
* Una conexión con la evaluación de la semana.

**Regla de participación:**
Intervenciones breves, concretas y orientadas a aprendizaje colectivo.

<!--
Notas del presentador:
Administre el tiempo con firmeza para no extender la socialización. Pida intervenciones de máximo treinta o cuarenta segundos. Busque diversidad de resultados: un equipo puede mostrar que el LED se activa, otro puede explicar un error corregido, otro puede proponer MQTT y otro puede relacionar la práctica con nube o seguridad. Esta socialización permite evidenciar aprendizaje sin convertir la práctica en una evaluación formal.
-->

---
layout: slide-10-titulo-dos-columnas
---
v
::title::
Resolución de dudas

::left::
**Preguntas técnicas**

* Pines y conexiones.
* Librería DHT.
* Monitor serial.
* Estructura JSON.
* Umbrales.
* Errores de lectura.
* Simulación en Wokwi.
* Evolución hacia MQTT.

::right::
**Preguntas conceptuales**

* Lenguajes de programación.
* Plataformas IoT.
* Seguridad.
* BLE, Wi-Fi, HTTP y MQTT.
* Computación en la nube.
* Gestión de dispositivos.
* Analítica de datos.
* Relación con la evaluación.

<!--
Notas del presentador:
Este espacio debe durar máximo quince minutos; según la planeación de esta sesión se reserva entre cinco y diez minutos al final. Si aparecen preguntas extensas, recomiende dejarlas como seguimiento en el aula virtual o en el espacio institucional correspondiente. Priorice dudas que afecten la comprensión de la evaluación y la práctica. Cierre cada respuesta conectándola con el propósito general: desarrollar soluciones IoT seguras, funcionales y escalables.
-->

---
layout: slide-08-titulo-texto
---

::title::
Síntesis académica de la semana

::content::
El desarrollo de aplicaciones IoT exige integrar programación, hardware, comunicación, seguridad y gestión de datos.

La programación del dispositivo permite leer sensores, controlar actuadores y ejecutar decisiones locales.

Los protocolos y plataformas permiten comunicar datos, gestionar dispositivos y escalar soluciones.

La nube aporta capacidad de almacenamiento, procesamiento, visualización y administración.

La seguridad debe estar presente desde el diseño mediante cifrado, autenticación, protección de credenciales y actualización del sistema.

La simulación en Wokwi permite aprender, probar y depurar antes de implementar en hardware físico.

<!--
Notas del presentador:
Realice una síntesis pausada. Explique que la semana 4 es clave porque pasa de la comprensión general de IoT a la construcción técnica de soluciones. La práctica con ESP32 y MicroPython permite visualizar el ciclo de desarrollo: diseñar, programar, probar, observar, corregir y mejorar. Conecte cada idea con la evaluación de la semana, recordando que las preguntas buscan asociar conceptos con su función dentro del ecosistema IoT.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerde:

* Revisar los recursos y actividades disponibles en el aula virtual.
* Repasar los conceptos asociados a la evaluación de la semana.
* Practicar nuevamente la simulación en Wokwi.
* Documentar dudas técnicas o conceptuales.
* Participar en los espacios de acompañamiento definidos para el curso.
* Diligenciar la **Encuesta de Percepción Estudiantil** cuando sea indicada por la institución.

La retroalimentación estudiantil contribuye al mejoramiento continuo del proceso formativo.

<!--
Notas del presentador:
Haga el recordatorio de manera clara y respetuosa. La Encuesta de Percepción Estudiantil debe presentarse como un mecanismo institucional de mejora continua, no como un trámite aislado. Invite a los estudiantes a responder con responsabilidad, pensando en la calidad de la experiencia académica. También recuerde que la práctica puede repetirse y extenderse, por ejemplo, agregando un segundo LED, un buzzer, un botón, MQTT o almacenamiento de datos.
-->

---
layout: slide-12-cierre
---

::title::
Cierre de la Open Class

::content::
Gracias por su participación.

**Semana 4:** fundamentos del desarrollo y la programación en sistemas IoT.

La próxima etapa consiste en seguir fortaleciendo la integración entre sensores, microcontroladores, comunicación, nube, seguridad y análisis de datos para construir soluciones IoT pertinentes, escalables y sostenibles.

<!--
Notas del presentador:
Cierre la sesión agradeciendo la participación y resaltando los avances alcanzados. Recuerde que el aprendizaje en IoT se consolida mediante práctica continua, depuración y mejora iterativa. Invite a los estudiantes a conservar el proyecto de Wokwi como evidencia de aprendizaje y punto de partida para futuras actividades. Finalice con una frase que conecte tecnología y propósito: un sistema IoT no solo mide el mundo, también ayuda a comprenderlo y actuar mejor sobre él.

**PROMPTS SUGERIDOS PARA LAS IMÁGENES DE LA PRESENTACIÓN**

1. Nombre sugerido: iot_capas_desarrollo.png
Prompt:
Ilustración académica moderna sobre las capas de desarrollo de un sistema IoT. Mostrar sensores conectados a un microcontrolador ESP32, comunicación inalámbrica, nube, dashboard, seguridad y usuarios finales. Estilo flat vector profesional universitario, limpio, sin texto, sin marcas, paleta azul, blanco y gris, formato 16:9, composición clara para diapositiva.

2. Nombre sugerido: iot_esp32_micropython.png
Prompt:
Ilustración técnica y educativa de una placa ESP32 siendo programada con MicroPython. Incluir líneas de código abstractas, pines GPIO, sensor ambiental y monitor serial representado visualmente. Estilo tecnológico limpio, académico, sin texto legible, sin logotipos, paleta azul y verde suave, formato 3:4, ideal para presentación universitaria.

3. Nombre sugerido: iot_protocolos_comunicacion.png
Prompt:
Ilustración conceptual de protocolos de comunicación en IoT. Mostrar dispositivos cercanos conectados por Bluetooth Low Energy, dispositivos conectados por Wi-Fi, mensajes MQTT hacia un broker y una API HTTP hacia la nube. Estilo infográfico sin etiquetas, moderno, profesional, sin marcas, paleta azul, blanco y gris, formato 16:9.

4. Nombre sugerido: iot_nube_gestion_dispositivos.png
Prompt:
Ilustración académica de una plataforma IoT en la nube gestionando muchos dispositivos conectados. Mostrar sensores distribuidos, telemetría, panel de monitoreo, alertas, actualización de firmware y seguridad con escudo digital. Estilo flat vector institucional, limpio, sin texto, sin logotipos, paleta azul, blanco y detalles verdes, formato 16:9.

5. Nombre sugerido: iot_wokwi_practica_dht22.png
Prompt:
Ilustración educativa de una simulación IoT con ESP32, sensor DHT22 y LED de alerta. Mostrar lectura de temperatura y humedad, salida visual encendida y datos tipo JSON fluyendo hacia un monitor serial abstracto. Estilo técnico limpio, universitario, sin texto legible, sin marcas, fondo claro, formato 16:9.

6. Nombre sugerido: iot_analitica_ml.png
Prompt:
Ilustración conceptual sobre IoT, analítica de datos y aprendizaje automático. Mostrar múltiples dispositivos generando datos, una canalización de procesamiento, gráficos de tendencias, detección de anomalías y un modelo de inteligencia artificial en la nube o en el borde. Estilo moderno, académico, limpio, sin texto, sin logotipos, paleta azul, violeta suave y blanco, formato 16:9.

7. Nombre sugerido: iot_seguridad_e2ee.png
Prompt:
Ilustración académica sobre seguridad en comunicaciones IoT. Mostrar dispositivos conectados enviando datos cifrados hacia servidores mediante túneles protegidos, candados digitales, escudos y autenticación. Estilo profesional universitario, limpio, sin texto, sin marcas, paleta azul oscuro, blanco y gris, formato 16:9.

8. Nombre sugerido: iot_metodologias_agiles.png
Prompt:
Ilustración conceptual de un equipo multidisciplinario trabajando en un proyecto IoT con metodología ágil. Mostrar prototipado rápido, simulación, pruebas, sensores, tablero kanban abstracto, iteración y colaboración. Estilo flat vector moderno, académico, sin texto, sin logotipos, paleta azul, amarillo suave y blanco, formato 16:9.
-->
