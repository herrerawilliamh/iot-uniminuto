---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 5

::date::
Junio 01 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 5 y ubicar a los estudiantes en el propósito central de la sesión: comprender cómo se diseña el hardware de un dispositivo IoT desde sus componentes físicos, sus criterios de selección y sus restricciones reales de operación. Enfatizar que esta clase no reemplaza el aula virtual, sino que la complementa con ejemplos, análisis aplicado y una práctica guiada en Wokwi usando ESP32 y MicroPython.
-->

---
layout: slide-02-titulo
---

::title::
Diseño de hardware para IoT

<!--
Notas del presentador:
Presentar el título de la sesión como una transición entre el uso de plataformas IoT, visto en semanas anteriores, y la comprensión del dispositivo físico que captura, procesa y comunica datos. Explicar que un sistema IoT no inicia en la nube, sino en un objeto físico capaz de medir una variable del entorno, convertirla en dato, procesarla y comunicarla. Desde esa perspectiva, el hardware se convierte en una decisión estratégica de diseño, no solamente en una lista de componentes.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Del objeto físico al servicio IoT

::image:: 
<img src="/imagenes/iot_semana5_arquitectura_fisica.png" alt="Imagen de apoyo sobre arquitectura física de un dispositivo IoT" />

::content::
Un dispositivo IoT nace cuando un objeto físico incorpora capacidad de:

* **Medir** una condición del entorno mediante sensores.
* **Procesar** datos con un microcontrolador o sistema embebido.
* **Actuar** sobre el entorno mediante actuadores, alertas o interfaces.
* **Comunicarse** con otros dispositivos, redes o plataformas.
* **Gestionar energía** de forma eficiente.
* **Resistir condiciones reales** de uso, instalación y mantenimiento.

La semana 5 se concentra en el diseño del hardware que permite que esas funciones sean posibles.

<!--
Notas del presentador:
Plantear un ejemplo cotidiano: una estación ambiental, una pulsera inteligente, un medidor de consumo energético o un sistema de monitoreo industrial. En todos los casos existe una capa física que sostiene la operación del sistema. Insistir en que el hardware IoT debe responder a una pregunta de diseño: ¿qué debe medir el dispositivo, dónde va a estar instalado, cómo se alimentará, cómo enviará datos y qué tan fácil será mantenerlo?
-->

---
layout: slide-08-titulo-texto
---

::title::
Decisiones de hardware en 60 segundos

::content::
**Instrucciones:**

1. Imagine un dispositivo IoT para monitorear temperatura y humedad en un cultivo.
2. En 60 segundos, escriba tres decisiones de hardware que tomaría.
3. Clasifique cada decisión en una categoría:

   * Sensor.
   * Microcontrolador.
   * Energía.
   * Comunicación.
   * Protección física.
   * Mantenimiento.
4. Comparta una decisión en el chat o activando el micrófono.


<!--
Notas del presentador:
La actividad busca activar conocimientos previos y hacer visible que el diseño de hardware depende del contexto. Es probable que los estudiantes mencionen sensores, baterías, WiFi, carcasa o microcontroladores. Aprovechar esas respuestas para mostrar que cada decisión tiene consecuencias: el WiFi puede consumir más energía que otras tecnologías; una carcasa mal sellada puede dañar el circuito; un sensor barato puede ser suficiente para una práctica, pero no para una medición crítica.

**Instrucciones para el docente**

* Recoger respuestas rápidas.
* Agruparlas por categorías.
* Conectar cada categoría con los conceptos de la sesión.
* Preguntar: ¿qué pasaría si el dispositivo funcionara con batería y estuviera expuesto a lluvia?

-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
¿Qué hace que un hardware sea adecuado?

::left::
Un hardware IoT no se evalúa solo por funcionar en una prueba inicial.

Debe analizarse desde:

* Consumo energético.
* Precisión de medición.
* Tamaño físico.
* Costo.
* Disponibilidad de componentes.
* Compatibilidad eléctrica.
* Facilidad de programación.
* Seguridad y mantenimiento.
* Condiciones ambientales.
* Escalabilidad del prototipo.

::right::
Un diseño adecuado responde a preguntas como:

* ¿Qué variable se necesita medir?
* ¿Con qué frecuencia se deben tomar datos?
* ¿Dónde estará instalado?
* ¿Tendrá conexión permanente?
* ¿Funcionará con batería?
* ¿Debe actualizarse remotamente?
* ¿Qué pasa si falla un sensor?
* ¿Cómo se protegerá contra polvo, humedad o calor?
* ¿Cómo se validará la calidad del dato?

<!--
Notas del presentador:
Explicar que en IoT el hardware se diseña bajo restricciones. Un prototipo en laboratorio puede funcionar con cables largos, alimentación USB y componentes expuestos, pero un producto real debe soportar ruido eléctrico, humedad, vibración, temperatura, golpes, consumo energético y mantenimiento. Esta diferencia entre prototipo y dispositivo desplegable es clave para comprender la semana.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender el diseño de hardware IoT

::content::
Un **microcontrolador** es el componente que coordina el comportamiento del dispositivo. Integra una unidad de procesamiento, memoria, periféricos de entrada y salida, temporizadores y, en algunos casos, conectividad inalámbrica. En IoT se prefiere cuando el sistema requiere bajo consumo, bajo costo y control directo de sensores y actuadores. El **ESP32** es un ejemplo frecuente porque combina pines GPIO, WiFi, Bluetooth y capacidad suficiente para prototipos educativos y aplicaciones embebidas.

Un **sensor** convierte una magnitud física en una señal eléctrica o digital. Puede medir temperatura, humedad, luz, movimiento, distancia, presión, sonido, gas o vibración. En hardware IoT no basta con elegir cualquier sensor: se debe analizar su rango de medición, precisión, tiempo de respuesta, voltaje de operación, consumo y protocolo de comunicación.

Un **actuador** permite que el dispositivo responda físicamente al entorno. Puede ser un LED, buzzer, relé, motor, servo, válvula, pantalla o mecanismo de bloqueo. Mientras el sensor captura información, el actuador ejecuta una acción. Por eso, un sistema IoT puede observar, decidir y actuar.

Un **bus de comunicación** permite conectar varios componentes al microcontrolador. I2C, SPI, UART y One-Wire son comunes en sistemas embebidos. I2C es especialmente útil cuando varios sensores comparten dos líneas principales: SDA para datos y SCL para reloj.

<!--
Notas del presentador:
Esta diapositiva debe trabajarse de manera pausada. Recomendar a los estudiantes diferenciar entre componente, función y criterio de selección. Un sensor no es adecuado solamente porque mide la variable correcta; también debe trabajar con el voltaje del microcontrolador, tener una frecuencia de muestreo coherente y entregar datos con una calidad suficiente. Para I2C, enfatizar la idea de bus compartido: varios dispositivos pueden conectarse usando dos líneas, siempre que cada uno tenga una dirección. La documentación de Espressif describe I2C como un protocolo serial, síncrono y multi-dispositivo basado en líneas SDA y SCL con resistencias pull-up. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender el diseño de hardware IoT

::content::
Un **módulo de comunicación** permite que el dispositivo intercambie información con otros sistemas. Puede usar WiFi, Bluetooth Low Energy, LoRa, Zigbee, NB-IoT, LTE-M, Ethernet o protocolos cableados. En algunos casos se usan **transceptores multiprotocolo**, que facilitan la comunicación con diferentes estándares y reducen la complejidad de integración.

La **eficiencia energética** es la capacidad del hardware y del software para cumplir su función usando la menor energía posible. En dispositivos IoT con batería, esto implica seleccionar componentes de bajo consumo, reducir la frecuencia de lectura, apagar periféricos cuando no se usan y aplicar modos de reposo.

La **miniaturización** se relaciona con la reducción del tamaño del dispositivo sin perder funcionalidad. Tecnologías como **MEMS** permiten integrar estructuras mecánicas y electrónicas microscópicas, presentes en acelerómetros, giroscopios, sensores de presión, micrófonos y otros componentes compactos.

La **actualización OTA** permite modificar firmware sin reemplazar físicamente el chip. Esto reduce costos de mantenimiento y mejora la seguridad durante el ciclo de vida del dispositivo.

La **robustez** corresponde a la capacidad del hardware para operar en condiciones reales: temperatura, humedad, polvo, vibración, radiación solar, interferencias, golpes o variaciones de energía.

El **CRC** es un mecanismo de verificación de errores usado para detectar alteraciones en datos transmitidos o almacenados.

<!--
Notas del presentador:
Conectar estos términos con la evaluación de la semana. MEMS se relaciona con miniaturización; OTA con mantenimiento remoto; modos de bajo consumo con autonomía; carcasa resistente con operación en exteriores; CRC con integridad de datos. La documentación de Espressif indica que los modos de bajo consumo del ESP32 incluyen reducción dinámica de frecuencia, light-sleep y deep-sleep, lo cual es pertinente para dispositivos alimentados con batería. :contentReference[oaicite:1]{index=1} También explica que OTA permite actualizar un dispositivo a partir de datos recibidos mientras el firmware normal está en ejecución. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-04-imagen-derecha
---

::title::
Arquitectura física de un dispositivo IoT

::image:: 
<img src="/imagenes/iot_semana5_bloques_hardware.png" alt="Imagen de apoyo sobre bloques de hardware IoT" />

::content::
Un diseño de hardware IoT puede organizarse en seis bloques:

* **Captura:** sensores y acondicionamiento de señal.
* **Procesamiento:** microcontrolador, memoria y lógica local.
* **Comunicación:** WiFi, BLE, LoRa, Zigbee, Ethernet u otros módulos.
* **Energía:** batería, reguladores, carga, protección y ahorro.
* **Interacción:** indicadores, botones, pantallas o actuadores.
* **Protección:** carcasa, disipación térmica, sellado y montaje.

La calidad del sistema depende de cómo se integran estos bloques, no solo de la calidad individual de cada componente.

<!--
Notas del presentador:
Explicar que estos bloques ayudan a diseñar antes de comprar componentes. Por ejemplo, si el dispositivo mide humedad en exteriores, el bloque de protección es tan importante como el sensor. Si el dispositivo se ubica lejos de una red WiFi, el bloque de comunicación cambia. Si el sistema se instala en un punto sin energía eléctrica, el bloque energético define la viabilidad del proyecto.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Selección del microcontrolador: más allá de “tener pines”

::left::
Criterios técnicos:

* Número de pines GPIO.
* Entradas analógicas disponibles.
* Buses I2C, SPI y UART.
* Memoria disponible.
* Velocidad de procesamiento.
* Compatibilidad con MicroPython.
* Conectividad integrada.
* Modos de bajo consumo.
* Comunidad y documentación.
* Disponibilidad en el mercado.

::right::
En un proyecto IoT, el microcontrolador debe responder a la aplicación:

* ¿Procesará datos localmente?
* ¿Requiere WiFi o Bluetooth?
* ¿Debe dormir entre mediciones?
* ¿Cuántos sensores usará?
* ¿Debe actualizarse remotamente?
* ¿Funcionará dentro de una carcasa pequeña?
* ¿Qué costo máximo permite el proyecto?

El ESP32 es adecuado para prototipos educativos porque integra conectividad, GPIO y soporte amplio de simulación.

<!--
Notas del presentador:
Hacer énfasis en que la selección de microcontrolador no se reduce al precio. Si el dispositivo es alimentado por batería, el bajo consumo es crucial. Si se requiere conectividad WiFi, puede ser conveniente usar un microcontrolador que ya la integre. Si se requiere operar por años, la facilidad de actualización, documentación y disponibilidad de repuestos también son criterios importantes.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Sensores, MEMS y calidad del dato

::image:: 
<img src="/imagenes/iot_semana5_sensores_mems.png" alt="Imagen de apoyo sobre sensores MEMS y variables físicas" />

::content::
Los sensores convierten fenómenos físicos en datos utilizables.

Ejemplos:

* Temperatura y humedad para monitoreo ambiental.
* Aceleración y vibración para mantenimiento predictivo.
* Presión para sistemas industriales.
* Luz para automatización.
* Distancia para presencia o nivel.
* Gas o partículas para calidad del aire.

<!--
Notas del presentador:
MEMS viene del inglés MicroElectroMechanical Systems y en español se suele traducir como sistemas microelectromecánicos o SMEM. Son dispositivos que combinan componentes mecánicos (resortes, palancas, diafragmas) y circuitos electrónicos en un mismo chip mediante técnicas de microfabricación. 

Relacionar MEMS con teléfonos móviles, relojes inteligentes, drones y sistemas industriales. Explicar que un acelerómetro pequeño puede medir inclinación o movimiento, pero su lectura puede verse afectada por ruido, montaje físico o vibraciones externas. La miniaturización es poderosa, pero no elimina la necesidad de validar el dato. Las revisiones técnicas sobre MEMS muestran que estos dispositivos suelen integrarse con circuitos electrónicos para funciones de conversión, amplificación, filtrado, procesamiento y comunicación. :contentReference[oaicite:3]{index=3}

Las tecnologías **MEMS** permiten fabricar sensores compactos, eficientes y adecuados para dispositivos pequeños. Sin embargo, la miniaturización debe acompañarse de calibración, protección y validación de datos.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Buses, protocolos y transceptores

::image:: 
<img src="/imagenes/iot_semana5_buses_protocolos.png" alt="Imagen de apoyo sobre buses y comunicación en IoT" />

::content::
Un dispositivo IoT puede comunicarse en dos niveles, Comunicación Interna y Comunicación Externa:

**Comunicación interna**

* GPIO para señales simples.
* I2C para múltiples sensores de baja velocidad.
* SPI para pantallas, memorias o sensores rápidos.
* UART para módulos externos.
* One-Wire para sensores específicos.

Un **transceptor multiprotocolo** permite manejar diferentes protocolos de red o radio según el diseño del dispositivo.

<!--
Notas del presentador:
Diferenciar bus interno y comunicación externa. El bus conecta componentes dentro del dispositivo; el protocolo de red conecta el dispositivo con otros sistemas. Esta distinción es útil para la evaluación, porque una pregunta puede referirse a conectar sensores al microcontrolador y otra a comunicarse con redes diversas. Recordar que I2C se usa con frecuencia para sensores porque simplifica cableado y permite compartir líneas entre dispositivos compatibles.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Buses, protocolos y transceptores

::image:: 
<img src="/imagenes/iot_semana5_buses_protocolos.png" alt="Imagen de apoyo sobre buses y comunicación en IoT" />

::content::
Un dispositivo IoT puede comunicarse en dos niveles, Comunicación Interna y Comunicación Externa:

**Comunicación externa**

* WiFi para redes IP cercanas.
* BLE para bajo consumo y proximidad.
* LoRa para largo alcance y bajo ancho de banda.
* Zigbee o Thread para mallas de sensores.
* LTE-M o NB-IoT para cobertura celular.

Un **transceptor multiprotocolo** permite manejar diferentes protocolos de red o radio según el diseño del dispositivo.

<!--
Notas del presentador:
Diferenciar bus interno y comunicación externa. El bus conecta componentes dentro del dispositivo; el protocolo de red conecta el dispositivo con otros sistemas. Esta distinción es útil para la evaluación, porque una pregunta puede referirse a conectar sensores al microcontrolador y otra a comunicarse con redes diversas. Recordar que I2C se usa con frecuencia para sensores porque simplifica cableado y permite compartir líneas entre dispositivos compatibles.
-->

---
layout: slide-08-titulo-texto
---

::title::
Energía: el recurso crítico en IoT

::content::
Muchos dispositivos IoT no están conectados permanentemente a una fuente eléctrica. Por eso, el diseño energético debe considerarse desde el inicio.

Estrategias comunes:

* Seleccionar microcontroladores y sensores de bajo consumo.
* Leer sensores solo cuando sea necesario.
* Desactivar módulos WiFi o Bluetooth cuando no se usan.
* Usar modos de bajo consumo o reposo.
* Transmitir datos por lotes en lugar de mantener conexión permanente.
* Elegir baterías según corriente promedio, picos de consumo y autonomía esperada.
* Incorporar regulación de voltaje eficiente.
* Evaluar energía solar o recolección de energía cuando el contexto lo permita.

Una mala decisión energética puede hacer inviable un dispositivo técnicamente funcional.

<!--
Notas del presentador:
Usar un ejemplo simple: un sensor que mide cada segundo consume más energía que uno que mide cada cinco minutos, aunque ambos funcionen correctamente. La autonomía no depende solo del tamaño de la batería, sino del consumo promedio, de los picos de transmisión y de la estrategia de software. La documentación técnica del ESP32 contempla modos de ahorro como light-sleep y deep-sleep, que permiten reducir consumo apagando o limitando dominios internos. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Miniaturización, robustez y disipación térmica

::left::
**Miniaturización**

* Componentes SMD.
* Sensores MEMS.
* Integración de radio y procesamiento.
* Placas de circuito impreso compactas.
* Diseño de carcasa y montaje.
* Reducción de conectores y cableado.

**Riesgo:** reducir tamaño puede dificultar reparación, disipación y pruebas.

::right::
**Robustez**

* Carcasa resistente a la intemperie.
* Protección contra polvo y humedad.
* Aislamiento eléctrico.
* Alivio de tensión en cables.
* Protección contra inversión de polaridad.
* Gestión térmica.
* Pruebas de vibración, temperatura y uso prolongado.

**Riesgo:** un prototipo funcional puede fallar rápidamente en campo.

<!--
Notas del presentador:
Explicar que la miniaturización no siempre es una ventaja si compromete mantenimiento, disipación térmica o confiabilidad. Conectar con la pregunta de evaluación relacionada con condiciones extremas: para exteriores no basta con que el circuito funcione; se requiere una carcasa y una selección de materiales adecuados. Sobre disipación térmica, comentar que existen disipadores, ventilación, reducción de frecuencia, selección de componentes eficientes y tecnologías termoeléctricas, aunque en la evaluación puede aparecer formulado con opciones simplificadas.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Prototipado y fabricación

::image:: 
<img src="/imagenes/iot_semana5_prototipado_iterativo.png" alt="Imagen de apoyo sobre prototipado iterativo de hardware IoT" />

::content::
El prototipado permite aprender antes de fabricar.

Proceso recomendado:

* Definir caso de uso y variable a medir.
* Seleccionar sensor, microcontrolador y comunicación.
* Simular comportamiento básico en Wokwi.
* Probar conexiones y lógica de lectura.
* Validar umbrales, alertas y salida de datos.
* Pasar a protoboard o PCB.
* Diseñar carcasa y alimentación.
* Probar en condiciones reales.
* Iterar hasta estabilizar el sistema.

<!--
Notas del presentador:

Wokwi es útil para comprobar lógica, conexiones y comportamiento antes de invertir tiempo en montaje físico.

Aclarar que Wokwi no reemplaza todas las pruebas físicas, pero permite reducir errores iniciales. En simulación se puede validar el flujo de lectura, la estructura del código, la respuesta ante umbrales y el comportamiento de indicadores. La documentación de Wokwi indica que la plataforma simula microcontroladores, sensores, pantallas y otros componentes, incluyendo familias ESP32 y sensores como DHT22. :contentReference[oaicite:5]{index=5}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Conceptos clave

::rightTitle::
Cómo interpretarlos técnicamente

::left::

* MEMS.
* Transceptor multiprotocolo.
* Modos de bajo consumo.
* Disipación térmica.
* Bus I2C.
* Actualización OTA.
* Bajo consumo del microcontrolador.
* Antenas para largo alcance.
* Carcasa resistente.
* Controlador CRC.

::right::

* Miniaturización y eficiencia.
* Interoperabilidad de redes.
* Autonomía de batería.
* Estabilidad térmica.
* Conexión de varios sensores.
* Mantenimiento remoto.
* Selección energética.
* Alcance de comunicación.
* Protección ambiental.
* Integridad de datos.

<!--
Notas del presentador:
Esta diapositiva no busca resolver mecánicamente la evaluación, sino orientar el razonamiento. Pedir a los estudiantes que lean cada pregunta identificando primero el problema técnico: tamaño, red, batería, calor, sensores, firmware, energía, alcance, ambiente o errores de transmisión. Después deben elegir la opción que mejor corresponda. Para la pregunta de disipación térmica, señalar que conviene revisar con atención la formulación, porque el concepto técnico esperado puede estar asociado a enfriamiento o disipación, aunque las opciones no siempre usen el término especializado.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Ejemplos aplicados de diseño de hardware IoT

::left::
**Dispositivo portátil de salud**

* Sensor compacto.
* Bajo consumo.
* Comunicación BLE.
* Batería recargable.
* Carcasa pequeña y cómoda.
* Lecturas periódicas.
* Firmware actualizable.

**Riesgo principal:** autonomía insuficiente o medición inestable por movimiento.

::right::
**Nodo ambiental industrial**

* Sensores de temperatura, humedad o vibración.
* Carcasa resistente.
* Comunicación de largo alcance.
* Protección contra ruido eléctrico.
* Alimentación estable.
* Validación de datos.
* Mantenimiento remoto.

**Riesgo principal:** falla por condiciones ambientales o mala comunicación.

<!--
Notas del presentador:
Usar los ejemplos para mostrar que no existe un hardware universal. Un wearable prioriza tamaño, comodidad y batería; un nodo industrial prioriza resistencia, confiabilidad y comunicación robusta. Invitar a los estudiantes a pensar qué cambiaría si el dispositivo se instala en un cultivo, una bodega, una fábrica, un hospital o una vivienda.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Sistemas de monitoreo IoT Energía solar

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/uw7cyim07oQ?si=IpUB9IV2zgSjE4tn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: introducir de forma breve la relación entre sensores, microcontroladores, conectividad y plataformas IoT. Momento recomendado: antes del desarrollo conceptual o como recurso asincrónico posterior. Duración sugerida: máximo 5 minutos. Justificación académica: permite que el estudiante visualice la arquitectura general antes de concentrarse en decisiones de hardware. Verificar que el video esté en español, sea claro y no exceda 5 minutos antes de insertarlo mediante iframe.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Es este el MEJOR simulador de ARDUINO y ESP32? | WOKWI

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/reU0SzKPxCc?si=hFenxq7Zm19-RK9z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: reforzar el uso de ESP32 con MicroPython en un entorno de simulación. Momento recomendado: justo antes de la práctica guiada o como material de consulta para estudiantes que no han usado Wokwi. Duración sugerida: máximo 5 minutos. Justificación académica: ayuda a reducir barreras técnicas iniciales y permite que los estudiantes se concentren en el razonamiento de hardware y no solo en la interfaz del simulador.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Internet de las cosas Ventajas y Desventajas

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/G6LAL8bsBKc?si=idCySUmhnxGihiaK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: ampliar la comprensión sobre modos de ahorro energético, reposo y autonomía de batería. Momento recomendado: después de explicar eficiencia energética o como recurso complementario para la evaluación. Duración sugerida: máximo 5 minutos. Justificación académica: la autonomía es uno de los criterios de diseño más importantes en IoT y suele aparecer en preguntas relacionadas con selección de microcontroladores y técnicas de bajo consumo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad práctica en Wokwi: nodo ambiental con lógica de ahorro

::content::
**Título de la práctica**
Nodo ambiental IoT simulado con ESP32, DHT22, botón y LED de estado.

**Propósito**
Construir una simulación sencilla para leer temperatura y humedad, activar una alerta visual cuando se superen umbrales y alternar entre modo normal y modo ahorro mediante un botón.

**Relación con la semana**

* Sensor: DHT22 como componente de captura.
* Microcontrolador: ESP32 como unidad de procesamiento.
* Actuador: LED como salida visual.
* Energía: modo ahorro simulado por menor frecuencia de lectura.
* Robustez lógica: manejo de errores de lectura.
* Evaluación: conexión con bajo consumo, sensores, comunicación serial y criterios de diseño.

<!--
Notas del presentador:
Explicar que la práctica no pretende construir un producto final, sino representar decisiones básicas de hardware y software. El botón permite simular una decisión energética: leer con menor frecuencia para ahorrar consumo. El LED representa una salida visual simple. El monitor serial funciona como canal de observación de datos. En Wokwi, el DHT22 permite modificar temperatura y humedad durante la simulación, lo cual facilita validar umbrales y respuestas. :contentReference[oaicite:6]{index=6}
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
* LED.
* Resistencia de 220 Ω para el LED.
* Pulsador.
* Cables de conexión.
* Monitor serial.

**Uso del sistema**

* DHT22 mide temperatura y humedad.
* LED encendido indica alerta.
* Botón alterna entre modo normal y modo ahorro.
* Monitor serial muestra datos, estado y recomendaciones.

::right::
**Conexiones sugeridas**

* DHT22 VCC → 3V3 del ESP32.
* DHT22 GND → GND del ESP32.
* DHT22 SDA → GPIO 15.
* LED ánodo → GPIO 2 mediante resistencia de 220 Ω.
* LED cátodo → GND.
* Pulsador terminal 1 → GPIO 4.
* Pulsador terminal 2 → GND.
* GPIO 4 se usará con resistencia pull-up interna.

<!--
Notas del presentador:
Indicar que los pines propuestos son didácticos y pueden cambiarse si el estudiante adapta el código. Reforzar el cuidado con la polaridad del LED y la alimentación del sensor. En un montaje físico, el uso de resistencias, cables adecuados y conexión a tierra común es indispensable. En Wokwi, el archivo diagram.json define componentes y conexiones de la simulación; la documentación de Wokwi describe que este archivo contiene secciones de partes y conexiones. :contentReference[oaicite:7]{index=7}
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la simulación en Wokwi

::content::

1. Ingresar a Wokwi y crear un nuevo proyecto con **ESP32 y MicroPython**.
2. Agregar los componentes: DHT22, LED, resistencia y pulsador.
3. Realizar las conexiones sugeridas en la diapositiva anterior.
4. Copiar el código completo en el archivo `main.py`.
5. Ejecutar la simulación.
6. Abrir el monitor serial.
7. Cambiar los valores del DHT22 desde el panel del sensor.
8. Verificar que el LED se encienda cuando haya alerta por temperatura o humedad.
9. Presionar el botón para alternar entre modo normal y modo ahorro.
10. Registrar una observación sobre cómo cambia la frecuencia de lectura.

**Producto esperado**
Una simulación funcional que lea datos ambientales, active una alerta visual y evidencie una estrategia básica de ahorro energético.

<!--
Notas del presentador:
Durante la práctica, acompañar a los estudiantes paso a paso. Si algún estudiante se queda atrás, pedir que primero valide conexiones mínimas: DHT22 a 3V3, GND y GPIO 15; LED en GPIO 2; botón en GPIO 4 y GND. Recordar que el monitor serial es la evidencia principal de funcionamiento. También puede sugerirse una captura de pantalla como producto de clase.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython para Wokwi

::content::

```python {lines:true}
# Nodo ambiental IoT simulado con ESP32, DHT22, botón y LED
# Curso: Internet de las Cosas
# Semana 5: Diseño de hardware para sistemas IoT

from machine import Pin
from time import sleep, ticks_ms, ticks_diff
import dht

# -----------------------------
# Configuración de hardware
# -----------------------------
PIN_DHT = 15          # Pin de datos del sensor DHT22
PIN_LED = 2           # LED de alerta
PIN_BOTON = 4         # Botón para cambiar modo de lectura

sensor = dht.DHT22(Pin(PIN_DHT))
led_alerta = Pin(PIN_LED, Pin.OUT)
boton = Pin(PIN_BOTON, Pin.IN, Pin.PULL_UP)

# -----------------------------
# Umbrales de análisis
# -----------------------------
TEMP_ALTA = 30.0      # Temperatura máxima recomendada en °C
HUM_ALTA = 75.0       # Humedad máxima recomendada en %

# -----------------------------
# Intervalos de lectura
# -----------------------------
INTERVALO_NORMAL_MS = 2000
INTERVALO_AHORRO_MS = 6000

modo_ahorro = False
ultima_lectura = 0
contador_muestras = 0

ultimo_estado_boton = 1
ultimo_cambio_boton = ticks_ms()

print("===========================================")
print("Nodo ambiental IoT simulado con ESP32")
print("Sensor: DHT22 | Actuador: LED | Entrada: botón")
print("GPIO DHT22:", PIN_DHT)
print("GPIO LED:", PIN_LED)
print("GPIO botón:", PIN_BOTON)
print("Presione el botón para alternar modo normal/ahorro")
print("===========================================")

def parpadear_led(veces, tiempo=0.08):
    """Genera una señal visual breve en el LED."""
    for _ in range(veces):
        led_alerta.on()
        sleep(tiempo)
        led_alerta.off()
        sleep(tiempo)

def revisar_boton():
    """Detecta pulsación del botón y alterna el modo de lectura."""
    global modo_ahorro
    global ultimo_estado_boton
    global ultimo_cambio_boton

    estado_actual = boton.value()

    if estado_actual != ultimo_estado_boton:
        ultimo_cambio_boton = ticks_ms()

    if ticks_diff(ticks_ms(), ultimo_cambio_boton) > 80:
        if ultimo_estado_boton == 1 and estado_actual == 0:
            modo_ahorro = not modo_ahorro

            if modo_ahorro:
                print("Modo ahorro ACTIVADO: menor frecuencia de lectura.")
                parpadear_led(2)
            else:
                print("Modo normal ACTIVADO: lectura más frecuente.")
                parpadear_led(1)

    ultimo_estado_boton = estado_actual

def leer_sensor():
    """Lee el DHT22 y genera una salida de diagnóstico."""
    global contador_muestras

    try:
        sensor.measure()
        temperatura = sensor.temperature()
        humedad = sensor.humidity()
        contador_muestras += 1

        alerta_temperatura = temperatura >= TEMP_ALTA
        alerta_humedad = humedad >= HUM_ALTA
        alerta_general = alerta_temperatura or alerta_humedad

        if alerta_general:
            led_alerta.on()
            estado = "ALERTA"
        else:
            led_alerta.off()
            estado = "NORMAL"

        modo = "AHORRO" if modo_ahorro else "NORMAL"

        print("-------------------------------------------")
        print("Muestra:", contador_muestras)
        print("Modo de operación:", modo)
        print("Temperatura:", temperatura, "°C")
        print("Humedad:", humedad, "%")
        print("Estado:", estado)

        if alerta_temperatura:
            print("Recomendación: revisar ventilación o disipación térmica.")

        if alerta_humedad:
            print("Recomendación: revisar carcasa, sellado o ambiente.")

        if not alerta_general:
            print("Recomendación: condiciones dentro del rango esperado.")

    except OSError as error:
        led_alerta.off()
        print("Error al leer el sensor DHT22:", error)
        print("Revise conexión de datos, alimentación y GND común.")
        parpadear_led(3)

while True:
    revisar_boton()

    intervalo = INTERVALO_AHORRO_MS if modo_ahorro else INTERVALO_NORMAL_MS

    if ticks_diff(ticks_ms(), ultima_lectura) >= intervalo:
        ultima_lectura = ticks_ms()
        leer_sensor()

    sleep(0.05)
```

<!--
Notas del presentador:
Leer rápidamente las secciones del código: configuración de pines, umbrales, intervalos, función del botón, lectura del sensor y ciclo principal. Explicar que el modo ahorro es una simulación conceptual: en un dispositivo físico se podría complementar con deep-sleep, apagado de periféricos o reducción de transmisiones. El DHT22 es un sensor básico para prácticas de registro de temperatura y humedad; Adafruit describe que estos sensores integran un sensor capacitivo de humedad, un termistor y un chip que entrega una señal digital. :contentReference[oaicite:8]{index=8}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Cómo interpretar la salida del monitor serial

::left::
**Lectura normal**

El sistema muestra:

* Número de muestra.
* Modo de operación.
* Temperatura.
* Humedad.
* Estado general.
* Recomendación técnica.

Cuando los valores están dentro del rango, el LED permanece apagado y el estado aparece como **NORMAL**.

::right::
**Lectura en alerta**

El sistema activa el LED si:

* La temperatura es igual o superior a 30 °C.
* La humedad es igual o superior a 75 %.

El monitor serial sugiere revisar ventilación, disipación térmica, carcasa o sellado, según el tipo de alerta.

<!--
Notas del presentador:
Guiar a los estudiantes para que modifiquen los valores del DHT22 durante la simulación. Pedir que provoquen una alerta por temperatura y luego una alerta por humedad. Luego solicitar que presionen el botón para observar la diferencia entre lectura frecuente y lectura espaciada. Esto permite conectar el código con decisiones de hardware: medir menos veces puede ahorrar energía, pero también puede reducir la velocidad de detección de eventos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Al finalizar la simulación, responder brevemente:

1. ¿Qué componente cumple la función de sensor y qué variable mide?
2. ¿Qué componente actúa como salida o actuador?
3. ¿Por qué el botón puede representar una decisión de operación o mantenimiento?
4. ¿Qué ventaja tiene reducir la frecuencia de lectura en un dispositivo con batería?
5. ¿Qué riesgo aparece si se reduce demasiado la frecuencia de lectura?
6. ¿Qué cambiaría si el dispositivo se instalara en exteriores?
7. ¿Qué tipo de carcasa sería recomendable para humedad o polvo?
8. ¿Qué bus usaría si quisiera conectar varios sensores digitales adicionales?
9. ¿Qué característica permitiría actualizar el dispositivo sin abrirlo físicamente?
10. ¿Qué dato del monitor serial serviría como evidencia de funcionamiento?

<!--
Notas del presentador:
Estas preguntas pueden trabajarse oralmente o mediante chat. La intención es que la práctica no termine solo con “funcionó”, sino con una reflexión de diseño. El estudiante debe identificar sensor, actuador, microcontrolador, energía, robustez, buses y mantenimiento. Esta socialización también prepara para la evaluación, porque transforma términos técnicos en decisiones concretas.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Socialización breve

::rightTitle::
Criterios para compartir

::left::
Cada estudiante o grupo comparte en un minuto:

* Captura o resultado del monitor serial.
* Valor de temperatura y humedad probado.
* Estado obtenido: NORMAL o ALERTA.
* Modo usado: normal o ahorro.
* Una mejora posible del diseño.

::right::
Durante la socialización, escuchar:

* Claridad en la explicación.
* Relación entre hardware y propósito.
* Uso correcto de términos técnicos.
* Identificación de restricciones.
* Propuesta de mejora viable.

Ejemplo de mejora: agregar carcasa resistente, sensor más preciso, comunicación LoRa, batería recargable o actualización OTA.

<!--
Notas del presentador:
Controlar el tiempo para que la socialización no supere siete minutos. Seleccionar dos o tres participaciones representativas. Si hay muchos estudiantes, pedir respuestas en chat con una estructura breve: “sensor usado, alerta observada, mejora propuesta”. El objetivo es evidenciar comprensión aplicada y no revisar todos los montajes individualmente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Síntesis académica de la semana

::content::
El diseño de hardware para IoT exige integrar decisiones físicas, electrónicas, energéticas y operativas.

Ideas clave:

* El microcontrolador debe seleccionarse según conectividad, pines, consumo, memoria y soporte de desarrollo.
* Los sensores deben elegirse por variable, precisión, rango, consumo y compatibilidad eléctrica.
* Los actuadores convierten decisiones digitales en acciones físicas.
* Los buses como I2C facilitan la conexión de múltiples sensores.
* La miniaturización se apoya en tecnologías como MEMS, pero exige validación y protección.
* La eficiencia energética depende de hardware y software.
* OTA reduce costos de mantenimiento y mejora la actualización del sistema.
* La robustez física es esencial para ambientes reales.
* La integridad de datos puede apoyarse en mecanismos como CRC.
* Un prototipo debe iterarse antes de convertirse en producto desplegable.

<!--
Notas del presentador:
Usar esta diapositiva para cerrar el desarrollo conceptual. Señalar que la práctica permitió ver una versión simplificada de varias decisiones reales: lectura de sensor, salida visual, modo de operación y diagnóstico. Recalcar que el aprendizaje de la semana no se limita al ESP32, sino que se puede transferir a cualquier arquitectura IoT.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recursos de apoyo para profundizar

::content::
**Recursos técnicos sugeridos para el docente**

* Documentación de Wokwi sobre hardware soportado y simulación de microcontroladores.
* Referencia de Wokwi para DHT22 y control de valores durante simulación.
* Guía de Espressif sobre modos de bajo consumo en ESP32.
* Documentación de Espressif sobre I2C y OTA.
* Recurso introductorio sobre sensores DHT para registro básico de temperatura y humedad.

**Uso recomendado**

* Antes de la clase: preparar la simulación base.
* Durante la clase: consultar conexiones y comportamiento del DHT22.
* Después de la clase: ampliar bajo consumo, buses y actualización OTA.

<!--
Notas del presentador:
Fuentes consultadas para orientar la curaduría técnica de la sesión: documentación de hardware soportado en Wokwi, referencia DHT22 en Wokwi, formato diagram.json, documentación de bajo consumo, I2C y OTA de Espressif, y guía introductoria de sensores DHT. :contentReference[oaicite:9]{index=9}
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas y cierre institucional

::content::
**Dudas priorizadas**

* Conexiones del ESP32 en Wokwi.
* Interpretación del código MicroPython.
* Diferencia entre sensor, actuador, bus y protocolo.
* Criterios de selección de hardware.
* Relación entre la práctica y la evaluación de la semana.

**Recordatorio institucional**

Antes de finalizar, recuerde diligenciar la **Encuesta de Percepción Estudiantil** cuando esté disponible. Su participación permite fortalecer la calidad académica, la planeación de las Open Class y el acompañamiento del curso.

<!--
Notas del presentador:
Dedicar máximo cinco minutos a preguntas puntuales. Si surgen preguntas muy extensas, proponer retomarlas en el aula virtual o en un espacio de acompañamiento. Cerrar con el recordatorio de la Encuesta de Percepción Estudiantil de manera institucional, enfatizando que la retroalimentación estudiantil es parte de la mejora continua del proceso formativo.
-->

---
layout: slide-12-cierre
---

::title::
Cierre de la Open Class

::content::
Gracias por su participación.

**Semana 5 — Internet de las Cosas**
Diseño de hardware para sistemas IoT

<!--
Notas del presentador:
Finalizar agradeciendo la participación. Reforzar que el paso siguiente es revisar la actividad o evaluación de la semana con los conceptos trabajados: MEMS, transceptores, bajo consumo, I2C, OTA, antenas, carcasa y CRC. Invitar a los estudiantes a conservar la simulación como evidencia práctica y como punto de partida para futuros prototipos IoT.
-->

