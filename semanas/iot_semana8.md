---
layout: slide-01-portada
---

::title::
Internet de las Cosas

::week::
Semana 8

::date::
Junio 22 de 2026

<!--
Notas del presentador:
Dé la bienvenida a los estudiantes indicando que esta Open Class corresponde a la semana 8 del curso Electiva CPC Internet de las Cosas. Enfatice que se trata de una sesión de cierre y proyección: no solamente se repasarán conceptos técnicos, sino que se analizará hacia dónde se dirige IoT en escenarios reales como salud digital, agricultura inteligente, transporte, energía, industria manufacturera y ciudades conectadas. Conviene iniciar recordando que durante el curso los estudiantes han trabajado con sensores, actuadores, conectividad, microcontroladores, simulación y análisis de datos; ahora, el reto consiste en integrar esos aprendizajes para comprender tendencias emergentes como 5G, edge computing, inteligencia artificial, interoperabilidad, privacidad, blockchain, ciberseguridad y automatización autónoma.

Explique que la sesión durará 90 minutos y que tendrá una estructura práctica. Primero se hará una activación breve de saberes previos; luego se desarrollarán los conceptos centrales de la semana; después se conectarán esos conceptos con la evaluación; posteriormente se realizará una práctica guiada en Wokwi con ESP32 y MicroPython; finalmente se abrirá un espacio de socialización, dudas y cierre institucional. Aclare que la intención de la clase no es memorizar definiciones aisladas, sino comprender cómo las tecnologías emergentes transforman el diseño, operación y seguridad de soluciones IoT.

Puede usar una pregunta inicial para captar la atención: “¿Qué pasaría si un sistema IoT tuviera que tomar una decisión crítica sin esperar respuesta de la nube?”. Esta pregunta permite introducir edge computing, baja latencia, automatización, confiabilidad y privacidad. También puede relacionar la pregunta con situaciones conocidas: un semáforo inteligente, un sistema de monitoreo médico, una estación agrícola, una línea de producción o un medidor energético. Señale que, en estos contextos, IoT deja de ser solamente “conectar objetos” y se convierte en una arquitectura de decisión distribuida. La plantilla usada para estructurar esta presentación corresponde al archivo compartido por el usuario. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-02-titulo
---

::title::
Tendencias emergentes y futuro de IoT

---
layout: slide-03-imagen-izquierda
---

::title::
Mapa rápido del futuro IoT

::image:: 
<img src="/imagenes/iot_semana8_01_mapa_futuro_iot.png" alt="Imagen de apoyo sobre tendencias futuras de IoT" />

::content::

<p v-click><strong>Instrucciones:</strong></p>

<ol>
  <li v-click>Escriba una aplicación IoT que pueda crecer en los próximos cinco años.</li>
  <li v-click>Clasifíquela en uno de estos dominios: salud, agricultura, transporte, energía, industria o ciudad inteligente.</li>
  <li v-click>Indique qué tecnología emergente la haría más potente: 5G, edge computing, IA, blockchain o ciberseguridad multicapa.</li>
  <li v-click>Comparta una conclusión breve en el chat o de forma oral.</li>
</ol>

<p v-click><strong>Producto:</strong> una idea aplicada con dominio, tecnología habilitadora y posible beneficio.</p>

<!--
Notas del presentador:
Oriente esta actividad como un ejercicio de activación de saberes previos y diagnóstico rápido. Indique que no se busca una respuesta perfecta, sino reconocer cómo los estudiantes imaginan el futuro de IoT y qué asociaciones conceptuales hacen entre dispositivos conectados, tecnologías emergentes y necesidades sociales o productivas. Puede iniciar con un ejemplo sencillo: “Un sistema IoT para monitoreo de pacientes crónicos en casa, ubicado en el dominio de salud digital, potenciado por edge computing e IA para detectar signos de alerta sin depender completamente de la nube”. A partir de ese ejemplo, solicite a cada estudiante que proponga una idea propia.

Sugiera dominios concretos para evitar respuestas demasiado generales. En salud, pueden aparecer dispositivos vestibles, camas inteligentes, sensores de signos vitales o monitoreo remoto. En agricultura, estaciones de clima, riego automatizado, sensores de humedad o control de plagas. En transporte, semáforos inteligentes, monitoreo de flotas, optimización de rutas o sensores de parqueo. En energía, medición inteligente, control de consumo, redes eléctricas inteligentes o automatización doméstica. En industria, mantenimiento predictivo, robots conectados, trazabilidad de producción o monitoreo de maquinaria. En ciudades inteligentes, calidad del aire, iluminación pública, residuos, seguridad vial o gestión de recursos.

Mientras los estudiantes participan, vaya agrupando mentalmente las respuestas según la tecnología emergente mencionada. Si muchos estudiantes mencionan IA, pregunte qué datos necesitaría el sistema para aprender o tomar decisiones. Si mencionan 5G, pregunte por qué la baja latencia sería importante. Si mencionan blockchain, pregunte qué transacción o dato requiere trazabilidad. Si mencionan ciberseguridad, pregunte qué amenaza podría afectar el sistema. Si mencionan edge computing, pregunte qué decisión conviene tomar cerca del sensor.

Cierre la actividad señalando que esta clasificación inicial servirá como puente hacia el desarrollo conceptual. Resalte que una solución IoT futura no se define por una sola tecnología, sino por la combinación adecuada de conectividad, procesamiento, análisis, seguridad y propósito. Enfatice que el valor de IoT está en transformar datos distribuidos en acciones oportunas y confiables.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave

::content::
- **Conectividad ubicua:** capacidad de mantener dispositivos conectados en múltiples espacios y condiciones.

- **Interoperabilidad:** posibilidad de integrar dispositivos, plataformas y protocolos distintos.

- **5G:** red móvil de alta velocidad y baja latencia que favorece respuestas en tiempo real.

- **Edge computing:** procesamiento de datos cerca del dispositivo o sensor.

- **IA en IoT:** uso de modelos para clasificar, predecir, automatizar y optimizar decisiones.

- **Blockchain en IoT:** registro distribuido, seguro e inmutable para mejorar trazabilidad y confianza.

- **Privacidad por diseño:** protección de datos personales desde la arquitectura del sistema.

- **Seguridad multicapa:** defensa distribuida en dispositivo, red, plataforma, datos y monitoreo.

<!--
Notas del presentador:
Desarrolle estos términos como una base conceptual amplia para la sesión. La conectividad ubicua no significa simplemente “tener internet en todas partes”; implica diseñar sistemas capaces de operar en contextos variables, con diferentes condiciones de cobertura, energía, movilidad, densidad de dispositivos y criticidad del servicio. Un sensor en una vivienda, un vehículo en movimiento, una máquina industrial o una estación agrícola no tienen las mismas condiciones de conexión. Por eso, el futuro de IoT exige arquitecturas flexibles que combinen redes locales, comunicación móvil, protocolos ligeros, plataformas cloud y procesamiento local.

La interoperabilidad es uno de los retos más importantes. Muchos sistemas IoT crecen por partes: sensores de un fabricante, plataformas de otro proveedor, tableros de visualización externos, servicios cloud y aplicaciones móviles. Si no se diseñan mecanismos de interoperabilidad, el sistema queda fragmentado y difícil de mantener. Aquí cobran importancia los estándares, las API, los formatos de datos consistentes y los protocolos como MQTT, HTTP, CoAP o WebSocket, según el caso.

El 5G aparece como habilitador de aplicaciones con mayor velocidad y menor latencia. Esto beneficia sistemas que requieren comunicación casi inmediata, como vehículos conectados, manufactura avanzada, telemedicina, videovigilancia analítica o infraestructura crítica. Sin embargo, debe aclararse que 5G no reemplaza todo: en algunos escenarios Wi-Fi, LoRaWAN, BLE o redes cableadas pueden seguir siendo suficientes. La decisión depende del caso de uso.

El edge computing permite procesar datos cerca del origen, por ejemplo en un microcontrolador, una pasarela local, un servidor de borde o un dispositivo industrial. Esto reduce latencia, disminuye tráfico hacia la nube, mejora resiliencia y puede proteger la privacidad al evitar enviar datos sensibles sin necesidad. La inteligencia artificial aplicada a IoT permite clasificar estados, detectar anomalías, anticipar fallos, personalizar servicios y automatizar decisiones. Blockchain puede aportar trazabilidad e integridad, especialmente cuando se requiere verificar el origen y flujo de datos. Finalmente, privacidad por diseño y seguridad multicapa recuerdan que IoT no puede crecer de forma responsable si no protege datos, dispositivos, identidades, redes y procesos de actualización.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Conectividad ubicua e interoperabilidad

::content::
IoT avanza hacia ecosistemas donde los dispositivos deben comunicarse de manera continua, confiable y comprensible entre sí.

La conectividad ubicua permite ampliar el alcance de IoT a espacios industriales, comerciales, urbanos, agrícolas y domésticos.

La interoperabilidad evita soluciones aisladas y facilita que sensores, actuadores, plataformas, aplicaciones y servicios trabajen como un sistema integrado.

**Idea central:** el futuro de IoT depende menos del dispositivo individual y más de la capacidad del ecosistema para coordinar datos, decisiones y acciones.

::image:: 
<img src="/imagenes/iot_semana8_02_conectividad_interoperabilidad_iot.png" alt="Imagen de apoyo sobre conectividad ubicua e interoperabilidad IoT" />

<!--
Notas del presentador:
Explique que una solución IoT madura no debe verse como un conjunto de dispositivos aislados, sino como un ecosistema. En un laboratorio o simulación, puede bastar con conectar un sensor a un ESP32 y visualizar datos en el monitor serial. Sin embargo, en un contexto real, los datos deben pasar por una arquitectura completa: captura, validación, transmisión, almacenamiento, análisis, visualización, toma de decisiones y, muchas veces, actuación automática. Esa cadena solamente funciona bien cuando existe conectividad adecuada e interoperabilidad.

La conectividad ubicua se refiere a la posibilidad de que los objetos permanezcan conectados en diferentes escenarios. Por ejemplo, un sistema de transporte inteligente requiere sensores en vehículos, semáforos, estaciones, aplicaciones móviles y centros de control. Una solución agrícola necesita operar en zonas rurales, a veces con conectividad limitada, energía solar y dispositivos distribuidos. Una aplicación de salud digital puede requerir comunicación permanente con dispositivos vestibles o sensores en el hogar del paciente. En cada caso, la conectividad no es un elemento accesorio; es una condición para que el sistema pueda cumplir su propósito.

La interoperabilidad permite que diferentes partes del sistema hablen un lenguaje común. Esto puede lograrse mediante protocolos, API, formatos estándar de datos, modelos semánticos o plataformas integradoras. Si no existe interoperabilidad, los datos quedan atrapados en silos, se dificulta el mantenimiento y aumenta el costo de escalar la solución. Por ejemplo, una empresa puede tener sensores de temperatura, cámaras, medidores de energía y actuadores industriales de diferentes proveedores. Si cada dispositivo usa un formato cerrado, la integración se vuelve frágil. En cambio, si se diseñan interfaces comunes, el sistema puede crecer de manera ordenada.

Conecte esta idea con la evaluación de la semana: varias preguntas se relacionan con transporte inteligente, industria manufacturera, gestión energética y salud digital. Todas estas aplicaciones requieren interoperabilidad para funcionar de manera coordinada. Puede cerrar señalando que el estudiante debe pensar como diseñador de sistemas, no solamente como programador de dispositivos. En IoT, el valor aparece cuando la información circula de forma segura, oportuna y útil entre múltiples componentes.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
5G y edge computing: velocidad, latencia y decisión local

::image:: 
<img src="/imagenes/iot_semana8_03_5g_edge_computing_iot.png" alt="Imagen de apoyo sobre 5G y computación en el borde para IoT" />

::content::
5G aporta mayor velocidad, menor latencia y capacidad para conectar más dispositivos.

Edge computing permite procesar datos cerca del sensor, reduciendo dependencia de la nube.

Juntas, estas tecnologías favorecen aplicaciones IoT en tiempo real:

1. Monitoreo médico continuo.
2. Vehículos y transporte inteligente.
3. Industria automatizada.
4. Videovigilancia analítica.
5. Energía y recursos críticos.

**Principio:** no todos los datos deben viajar a la nube antes de generar una acción.

<!--
Notas del presentador:
Explique que 5G y edge computing son dos tendencias complementarias, pero no equivalentes. 5G se relaciona principalmente con la conectividad: ofrece mayores velocidades de transmisión, menor latencia y capacidad para conectar una gran cantidad de dispositivos. Edge computing se relaciona con el procesamiento: propone que parte del análisis y la toma de decisiones se realicen cerca del lugar donde se generan los datos. Cuando ambas tecnologías se combinan, IoT puede responder con mayor rapidez, reducir tráfico innecesario hacia la nube y operar mejor en escenarios críticos.

Use un ejemplo médico: un dispositivo que monitorea signos vitales puede enviar reportes periódicos a la nube para análisis histórico, pero si detecta una condición crítica, no debería esperar a que todos los datos viajen a un servidor remoto, se procesen y regresen. Una alerta básica puede generarse localmente o en una pasarela cercana. En transporte inteligente ocurre algo similar: un sistema de control semafórico o detección de incidentes requiere respuesta rápida. En una planta industrial, una máquina puede detenerse automáticamente si detecta una condición de riesgo, sin depender totalmente de la conectividad externa.

Aclare que “baja latencia” significa menor tiempo entre el envío de una señal y la recepción de una respuesta. Este concepto es fundamental para aplicaciones en tiempo real. También explique que mayor velocidad de datos no siempre es el único criterio; en muchos sistemas IoT los mensajes son pequeños, pero la confiabilidad, disponibilidad, seguridad y consumo energético son igualmente importantes. Por eso, elegir 5G, Wi-Fi, LoRaWAN, BLE o comunicación cableada depende del caso de uso.

El video de Telefónica sobre edge computing puede servir como recurso breve de apoyo, pues presenta el concepto en poco más de tres minutos y ayuda a visualizar por qué procesar cerca del usuario o del dispositivo puede cambiar la arquitectura de servicios digitales. :contentReference[oaicite:1]{index=1} Indique que, en la práctica de Wokwi, se simulará una idea básica de edge computing: el ESP32 leerá datos de un sensor, tomará una decisión local y mostrará un estado visual mediante LEDs sin esperar una plataforma externa.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
IoT con IA y blockchain: automatización y confianza

::left::

### IoT + IA

La inteligencia artificial permite que los sistemas IoT detecten patrones, clasifiquen estados, predigan fallos y tomen decisiones de forma más autónoma.

Ejemplos:

1. Mantenimiento predictivo.
2. Monitoreo personalizado de salud.
3. Riego inteligente.
4. Optimización energética.
5. Control de calidad industrial.

::right::

### IoT + blockchain

Blockchain puede aportar trazabilidad, integridad e inmutabilidad cuando los datos IoT requieren verificación confiable.

Ejemplos:

1. Cadena de frío.
2. Trazabilidad agrícola.
3. Medición energética.
4. Auditoría de sensores.
5. Registro de eventos críticos.

<!--
Notas del presentador:
Presente esta diapositiva como una comparación entre dos tecnologías emergentes que suelen mencionarse en el futuro de IoT, pero que cumplen funciones distintas. La inteligencia artificial se orienta principalmente al análisis y la automatización. Blockchain se orienta principalmente a la confianza, la trazabilidad y la integridad de los registros. Ambas pueden integrarse con IoT, pero deben usarse con criterio y no como una moda tecnológica.

En IoT con IA, los datos capturados por sensores pueden alimentar modelos capaces de reconocer patrones. Por ejemplo, en mantenimiento predictivo, sensores de vibración, temperatura o corriente pueden indicar que una máquina se está comportando de manera anómala antes de que ocurra una falla. En salud digital, un sistema puede aprender patrones de sueño, ritmo cardíaco o actividad física para generar alertas personalizadas. En agricultura inteligente, un modelo puede combinar humedad del suelo, temperatura, radiación solar y pronóstico climático para recomendar riego. En energía, puede identificar consumos inusuales y sugerir ajustes. En industria, puede clasificar productos defectuosos o estimar desgaste de componentes.

Blockchain, por su parte, no sirve para acelerar todos los procesos ni para almacenar grandes volúmenes de datos de sensores sin criterio. Su utilidad aparece cuando se necesita un registro verificable, difícil de alterar y compartido entre actores que requieren confianza. Por ejemplo, en cadena de frío, sensores de temperatura pueden registrar evidencias sobre el transporte de medicamentos o alimentos. En trazabilidad agrícola, los datos pueden respaldar el origen y condiciones de producción. En energía, puede ayudar a registrar transacciones en microrredes. En auditoría de sensores, puede dejar constancia de eventos críticos.

Conecte esta explicación con la evaluación: una de las preguntas plantea que blockchain beneficia a IoT proporcionando un registro inmutable y seguro de transacciones y datos, asegurando integridad y confianza. Aclare que esa es la idea clave: no se trata de eliminar la trazabilidad ni reducir la transparencia, sino de fortalecer la verificación. También destaque que IA e IoT pueden aumentar la capacidad de tomar decisiones en tiempo real y optimizar procesos, lo cual aparece en otra pregunta de evaluación.
-->

---
layout: slide-08-titulo-texto
---

::title::
Privacidad, ciberseguridad y gestión de datos

::content::
El crecimiento de IoT aumenta la cantidad de datos, dispositivos, identidades y superficies de ataque.

Los principales riesgos son:

1. Accesos no autorizados.
2. Contraseñas débiles o repetidas.
3. Dispositivos sin actualización.
4. Datos personales expuestos.
5. Comunicación sin cifrado.
6. Plataformas sin monitoreo.
7. Falta de trazabilidad.

Las medidas esenciales incluyen cifrado, anonimización, autenticación fuerte, actualizaciones, segmentación de red, monitoreo continuo y seguridad multicapa.

<!--
Notas del presentador:
Explique que la seguridad en IoT tiene una complejidad particular porque combina hardware, software, redes, plataformas cloud, aplicaciones móviles, usuarios y datos sensibles. En un sistema tradicional, muchas veces el foco está en proteger servidores o aplicaciones. En IoT, además de esos componentes, existen dispositivos físicos distribuidos que pueden estar en hogares, fábricas, calles, vehículos, cultivos o espacios públicos. Esto amplía la superficie de ataque, es decir, los puntos por donde un atacante podría intentar acceder, manipular datos, interrumpir el servicio o tomar control de un dispositivo.

Desarrolle los riesgos visibles. Los accesos no autorizados pueden ocurrir cuando no hay autenticación robusta o se usan credenciales por defecto. Las contraseñas débiles son especialmente problemáticas porque muchos dispositivos IoT se instalan y luego se olvidan. Los dispositivos sin actualización acumulan vulnerabilidades conocidas. Los datos personales expuestos afectan la confianza de los usuarios, especialmente en salud digital, hogares inteligentes, geolocalización o hábitos de consumo. La comunicación sin cifrado permite interceptar información. La falta de monitoreo impide detectar comportamientos anómalos. La ausencia de trazabilidad dificulta saber qué ocurrió, cuándo, desde dónde y con qué impacto.

Relacione esto con la privacidad por diseño. No se debe esperar al final del proyecto para “agregar seguridad”. Desde el diseño se debe preguntar qué datos se recolectan, para qué se necesitan, durante cuánto tiempo se almacenan, quién accede a ellos y cómo se protegen. La anonimización reduce la posibilidad de asociar datos con una persona específica. El cifrado protege información en tránsito y en reposo. La autenticación fuerte limita accesos indebidos. La segmentación de red evita que un dispositivo comprometido afecte todo el sistema. El monitoreo continuo permite detectar ataques o fallas.

Conecte esta diapositiva con las preguntas de evaluación. Una pregunta aborda privacidad y plantea como medida correcta el uso de cifrado y anonimización. Otra pregunta aborda el desafío de manejar grandes volúmenes de datos y protegerse contra ciberataques. Otra pregunta se refiere a la seguridad multicapa y monitoreo continuo. Indique que estas respuestas comparten una idea: el futuro de IoT requiere confianza técnica y ética.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Aplicaciones emergentes

::rightTitle::
Criterios de análisis

::left::

1. Salud digital con monitoreo continuo.
2. Agricultura inteligente con riego automatizado.
3. Transporte inteligente y movilidad urbana.
4. Energía eficiente en hogares e industrias.
5. Manufactura con robots conectados.
6. Ciudades inteligentes y sostenibilidad.

::right::

1. ¿Qué dato se captura?
2. ¿Dónde se procesa?
3. ¿Qué decisión se automatiza?
4. ¿Qué riesgo de seguridad existe?
5. ¿Qué beneficio social o productivo genera?
6. ¿Qué condición ética debe considerarse?

<!--
Notas del presentador:
Utilice esta diapositiva para pasar del plano conceptual al plano aplicado. Explique que las tendencias emergentes de IoT se comprenden mejor cuando se observan en dominios específicos. En salud digital, los dispositivos conectados pueden permitir monitoreo continuo y personalizado. Esto no significa eliminar al personal médico, sino ofrecer datos más oportunos para apoyar decisiones clínicas. Un sensor de ritmo cardíaco, glucosa, temperatura o movimiento puede generar alertas tempranas, pero también plantea desafíos de privacidad, exactitud, consentimiento y responsabilidad.

En agricultura inteligente, IoT puede apoyar el uso eficiente del agua, fertilizantes y energía. Sensores de humedad, temperatura, luminosidad y calidad del suelo pueden alimentar decisiones de riego o alertas sobre condiciones ambientales. Si se combina con IA, el sistema puede aprender patrones; si se combina con conectividad adecuada, puede operar en zonas remotas; si se diseña con energía solar, puede mejorar sostenibilidad. En transporte inteligente, sensores, cámaras, GPS y sistemas de control pueden optimizar rutas, reducir congestión y mejorar seguridad vial. Aquí la baja latencia puede ser relevante, especialmente cuando las decisiones deben tomarse en segundos.

En energía, IoT permite monitorear consumo en tiempo real, identificar desperdicios y ajustar automáticamente cargas. Esto aplica tanto en hogares como en industrias. En manufactura, la convergencia entre robótica e IoT permite robots conectados, mantenimiento predictivo, control de calidad y automatización coordinada. En ciudades inteligentes, IoT puede apoyar iluminación pública, gestión de residuos, calidad del aire, seguridad, agua y movilidad.

Explique los criterios de análisis de la columna derecha. Todo caso IoT debe identificar qué dato se captura, porque no todos los datos son necesarios ni justificables. También debe definir dónde se procesa: en el dispositivo, en el borde, en una pasarela, en la nube o de forma híbrida. Luego se debe precisar qué decisión se automatiza, qué riesgo de seguridad existe y qué beneficio se espera. Finalmente, debe considerarse la dimensión ética: privacidad, sesgos, vigilancia excesiva, dependencia tecnológica, sostenibilidad y accesibilidad. Esta matriz de preguntas prepara a los estudiantes para responder la evaluación con comprensión, no por descarte superficial.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ideas clave para responder:


::content::

1. Blockchain fortalece integridad, trazabilidad y confianza.
2. IoT en salud favorece monitoreo continuo y personalizado.
3. 5G mejora velocidad y reduce latencia.
4. Robótica conectada mejora automatización industrial.
5. Privacidad exige cifrado y anonimización.
6. Transporte inteligente optimiza movilidad y reduce congestión.
7. IoT + IA mejora decisiones en tiempo real.
8. El crecimiento de dispositivos exige gestión de datos y ciberseguridad.
9. IoT energético permite monitoreo y ajuste en tiempo real.
10. La protección requiere seguridad multicapa y monitoreo continuo.

<!--
Notas del presentador:
Presente esta diapositiva como una guía conceptual para comprender la evaluación, no como una lista de respuestas para memorizar. Explique que las preguntas de la semana están diseñadas para verificar si el estudiante puede identificar la opción que expresa correctamente el impacto de una tecnología emergente en IoT. Muchas opciones incorrectas suelen invertir el sentido del concepto: por ejemplo, dicen que blockchain disminuye transparencia, que IoT reduce datos médicos, que 5G aumenta latencia, que la robótica reduce automatización o que la seguridad debe ignorarse para mejorar rendimiento. Por eso, el estudiante debe leer críticamente y reconocer si la opción fortalece o contradice el propósito de IoT.

Desarrolle el primer punto: blockchain beneficia a IoT cuando aporta registros inmutables, seguros y verificables. No elimina trazabilidad, sino que la refuerza. En salud, IoT no busca eliminar dispositivos médicos conectados ni reducir datos disponibles, sino permitir monitoreo más continuo, personalizado y oportuno. En 5G, el beneficio central es aumentar velocidad y disminuir latencia, lo que mejora comunicación en tiempo real. En manufactura, la convergencia entre robótica e IoT permite robots conectados y sistemas más autónomos, lo cual mejora eficiencia operativa.

En privacidad, la respuesta correcta se orienta a cifrado y anonimización. Aclare que almacenar datos sin protección o compartirlos sin controles son prácticas riesgosas. En transporte inteligente, IoT permite optimizar rutas, horarios, flujos vehiculares y gestión del tráfico. En IoT con IA, el impacto esperado es aumentar la capacidad de tomar decisiones en tiempo real y optimizar procesos. Frente al crecimiento de dispositivos conectados, el desafío no es que haya menos datos, sino que hay más volumen, más complejidad y mayor necesidad de protección. En energía, IoT contribuye mediante monitoreo y ajuste en tiempo real para reducir consumo y mejorar eficiencia. Finalmente, la seguridad requiere un enfoque multicapa: dispositivo, red, datos, plataforma, acceso, actualización y monitoreo.

Invite a los estudiantes a justificar cada respuesta con una frase técnica. Por ejemplo: “Elijo esta opción porque expresa baja latencia y comunicación en tiempo real”. Esta práctica mejora comprensión y evita responder por intuición.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
IoT Trends 2026: The 10 Trends You Need to Know

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/UIDJsHjHbUw?si=MAlOhS-f0aJ2ccLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Use este recurso como refuerzo breve antes de iniciar la práctica. El video “¿Qué es el Edge Computing?”, publicado por Telefónica, explica en poco más de tres minutos la idea de procesar datos cerca de donde se generan y no depender siempre de centros de datos remotos. Es pertinente para esta sesión porque conecta directamente con una de las tendencias centrales del futuro de IoT: la necesidad de reducir latencia, mejorar tiempos de respuesta y distribuir el procesamiento. :contentReference[oaicite:2]{index=2}

Antes de reproducirlo, oriente la observación con una pregunta: “Mientras ven el video, identifiquen una razón por la cual procesar datos cerca del dispositivo puede ser útil en IoT”. Esta pregunta evita que el video sea un elemento pasivo y lo convierte en insumo para la práctica. Después de verlo, recoja dos o tres respuestas rápidas. Es probable que los estudiantes mencionen rapidez, menor dependencia de internet, reducción de tráfico, privacidad o mejor experiencia de usuario. Relacione esas respuestas con la práctica que harán en Wokwi: el ESP32 leerá un sensor DHT22, evaluará temperatura y humedad, clasificará el estado ambiental y encenderá LEDs según una decisión local. Aunque es una simulación sencilla, representa una idea fundamental: el dispositivo puede tomar decisiones básicas sin enviar todo a la nube.

También puede mencionar otros videos sugeridos para ampliar fuera de clase. Primero, un video introductorio sobre Internet de las Cosas para estudiantes que necesiten reforzar el concepto general: título sugerido “¿Qué es Internet de las Cosas? Introducción aplicada a IoT”; propósito pedagógico: nivelar conceptos; momento recomendado: antes de clase o como repaso; duración sugerida: menos de cinco minutos; enlace: [Agregar enlace de video verificado]. Segundo, un video sobre seguridad en IoT: propósito pedagógico: reforzar riesgos, privacidad y seguridad multicapa; momento recomendado: después de la clase; duración sugerida: menos de cinco minutos; enlace: [Agregar enlace de video verificado]. Tercero, el video mostrado sobre edge computing: propósito pedagógico: introducir baja latencia y procesamiento cercano al dato; momento recomendado: antes de la práctica; duración: poco más de tres minutos.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Top IoT Industry Trends in 2026

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/yzwsawjWZLo?si=WJcb8-Ibk-kTnpRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Use este recurso como refuerzo breve antes de iniciar la práctica. El video “¿Qué es el Edge Computing?”, publicado por Telefónica, explica en poco más de tres minutos la idea de procesar datos cerca de donde se generan y no depender siempre de centros de datos remotos. Es pertinente para esta sesión porque conecta directamente con una de las tendencias centrales del futuro de IoT: la necesidad de reducir latencia, mejorar tiempos de respuesta y distribuir el procesamiento. :contentReference[oaicite:2]{index=2}

Antes de reproducirlo, oriente la observación con una pregunta: “Mientras ven el video, identifiquen una razón por la cual procesar datos cerca del dispositivo puede ser útil en IoT”. Esta pregunta evita que el video sea un elemento pasivo y lo convierte en insumo para la práctica. Después de verlo, recoja dos o tres respuestas rápidas. Es probable que los estudiantes mencionen rapidez, menor dependencia de internet, reducción de tráfico, privacidad o mejor experiencia de usuario. Relacione esas respuestas con la práctica que harán en Wokwi: el ESP32 leerá un sensor DHT22, evaluará temperatura y humedad, clasificará el estado ambiental y encenderá LEDs según una decisión local. Aunque es una simulación sencilla, representa una idea fundamental: el dispositivo puede tomar decisiones básicas sin enviar todo a la nube.

También puede mencionar otros videos sugeridos para ampliar fuera de clase. Primero, un video introductorio sobre Internet de las Cosas para estudiantes que necesiten reforzar el concepto general: título sugerido “¿Qué es Internet de las Cosas? Introducción aplicada a IoT”; propósito pedagógico: nivelar conceptos; momento recomendado: antes de clase o como repaso; duración sugerida: menos de cinco minutos; enlace: [Agregar enlace de video verificado]. Segundo, un video sobre seguridad en IoT: propósito pedagógico: reforzar riesgos, privacidad y seguridad multicapa; momento recomendado: después de la clase; duración sugerida: menos de cinco minutos; enlace: [Agregar enlace de video verificado]. Tercero, el video mostrado sobre edge computing: propósito pedagógico: introducir baja latencia y procesamiento cercano al dato; momento recomendado: antes de la práctica; duración: poco más de tres minutos.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Práctica guiada en Wokwi: estación IoT con decisión en el borde

::content::
**Propósito:** simular una estación IoT que mide temperatura y humedad, toma una decisión local y muestra el estado mediante LEDs.

**Componentes:**

1. ESP32 DevKit.
2. Sensor DHT22.
3. LED verde.
4. LED amarillo.
5. LED rojo.
6. Resistencias de 220 Ω.
7. Monitor serial de Wokwi.

**Idea aplicada:** el ESP32 actúa como nodo IoT con procesamiento en el borde.

::image:: 
<img src="/imagenes/iot_semana8_04_practica_esp32_dht22_wokwi.png" alt="Imagen de apoyo sobre práctica ESP32 MicroPython Wokwi con DHT22 y LEDs" />

<!--
Notas del presentador:
Introduzca la práctica explicando que no pretende construir una solución industrial completa, sino representar de manera sencilla varios conceptos de la semana. El ESP32 funcionará como un nodo IoT capaz de capturar datos del entorno mediante un sensor DHT22. Luego, en lugar de enviar inmediatamente esos datos a la nube, el propio dispositivo aplicará reglas locales para clasificar el estado ambiental. Si las condiciones son normales, se encenderá un LED verde; si existe una condición de precaución, se encenderá un LED amarillo; y si se detecta una condición crítica, se encenderá un LED rojo. Además, el monitor serial mostrará un mensaje estructurado con los valores y la decisión tomada.

Conecte esta práctica con edge computing. El procesamiento en el borde no siempre implica ejecutar modelos complejos de inteligencia artificial. En muchos casos, una primera forma de edge computing consiste en aplicar reglas locales, filtros, umbrales, validaciones o detección básica de anomalías. Esto ya aporta valor porque permite responder rápidamente, disminuir tráfico hacia la nube y mantener cierto nivel de operación incluso si la conexión externa falla. En sistemas reales, estas reglas podrían complementarse con modelos de aprendizaje automático, comunicación MQTT, almacenamiento en la nube o tableros de visualización.

Explique también que el DHT22 permite simular variables ambientales frecuentes en IoT: temperatura y humedad. Estas variables aparecen en agricultura, cadena de frío, edificios inteligentes, monitoreo ambiental, laboratorios y almacenamiento de productos. Los LEDs actúan como actuadores visuales sencillos. En un sistema real, podrían reemplazarse por una alarma, un relé, una válvula, un ventilador, una notificación o una instrucción enviada a otra plataforma.

Indique a los estudiantes que deben crear un proyecto en Wokwi con ESP32 y seleccionar MicroPython. Si algún estudiante no tiene experiencia previa, puede copiar el circuito sugerido y concentrarse en comprender la lógica. Recalque que el producto esperado no es solamente “que encienda un LED”, sino poder explicar qué dato se leyó, qué condición se evaluó, qué decisión se tomó y cómo se relaciona esto con IoT emergente, automatización y seguridad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Conexiones sugeridas en Wokwi

::content::
Use las siguientes conexiones para la simulación:

1. DHT22 VCC → 3V3 del ESP32.
2. DHT22 GND → GND del ESP32.
3. DHT22 SDA/DATA → GPIO 15.
4. LED verde ánodo → GPIO 25 con resistencia de 220 Ω.
5. LED amarillo ánodo → GPIO 26 con resistencia de 220 Ω.
6. LED rojo ánodo → GPIO 27 con resistencia de 220 Ω.
7. Cátodos de los LEDs → GND.

En el sensor DHT22 de Wokwi puede modificar temperatura y humedad durante la simulación para observar cambios de estado.

<!--
Notas del presentador:
Guíe esta diapositiva con calma, especialmente si hay estudiantes que aún no se sienten seguros con conexiones electrónicas. Explique que el DHT22 es un sensor digital de temperatura y humedad. En Wokwi, el componente se puede conectar de forma sencilla al ESP32 usando alimentación, tierra y un pin de datos. El pin de datos elegido será GPIO 15. Aclare que, en simulación, no se requiere profundizar en todos los detalles eléctricos del sensor, pero sí comprender que el microcontrolador necesita alimentar el sensor, compartir una referencia de tierra y recibir la señal digital por un pin de entrada.

Para los LEDs, recuerde que cada LED tiene polaridad. El ánodo corresponde al lado positivo y se conecta al pin del ESP32 mediante una resistencia de 220 Ω. La resistencia limita la corriente y protege el componente. El cátodo se conecta a GND. En la simulación, si un LED no enciende, una causa frecuente es que esté invertido o que la conexión no corresponda al pin usado en el código. Explique que se usarán tres LEDs para representar tres estados: verde para normalidad, amarillo para precaución y rojo para alerta. Esta semaforización es común en sistemas IoT porque facilita interpretar rápidamente el estado de un sistema.

Sugiera que el docente muestre primero el circuito completo y luego dé unos minutos para que los estudiantes lo repliquen. Si la clase avanza lentamente, puede compartir el circuito armado en pantalla y pedir que los estudiantes se concentren en el código. No obstante, es importante que al menos comprendan la correspondencia entre conexiones y variables del programa: DHT_PIN corresponde a GPIO 15, LED_VERDE a GPIO 25, LED_AMARILLO a GPIO 26 y LED_ROJO a GPIO 27.

Relacione las conexiones con los conceptos de la semana. El sensor representa captura de datos; el ESP32 representa procesamiento local; los LEDs representan actuación o respuesta; el monitor serial representa observabilidad del sistema; y la modificación manual de valores en Wokwi representa escenarios cambiantes. En conjunto, esto permite simular una arquitectura mínima de IoT con decisión en el borde.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::

```python {lines:true}
# Open Class IoT - Semana 8
# Estación IoT con decisión local en el borde
# Componentes: ESP32, DHT22, LED verde, LED amarillo y LED rojo
# Plataforma sugerida: Wokwi con MicroPython

from machine import Pin
from time import sleep
import dht

# -----------------------------
# Configuración de pines
# -----------------------------
DHT_PIN = 15
LED_VERDE_PIN = 25
LED_AMARILLO_PIN = 26
LED_ROJO_PIN = 27

sensor = dht.DHT22(Pin(DHT_PIN))

led_verde = Pin(LED_VERDE_PIN, Pin.OUT)
led_amarillo = Pin(LED_AMARILLO_PIN, Pin.OUT)
led_rojo = Pin(LED_ROJO_PIN, Pin.OUT)

# -----------------------------
# Funciones auxiliares
# -----------------------------
def apagar_leds():
    led_verde.value(0)
    led_amarillo.value(0)
    led_rojo.value(0)

def anonimizar_dispositivo(nombre):
    """
    Genera un identificador simple para no imprimir el nombre real del dispositivo.
    En sistemas reales se recomienda usar técnicas criptográficas más robustas.
    """
    acumulado = 0
    for caracter in nombre:
        acumulado = (acumulado + ord(caracter) * 17) % 10000
    return "iot-" + str(acumulado)

def clasificar_estado(temperatura, humedad):
    """
    Clasifica el estado ambiental usando reglas locales.
    Esta lógica representa una decisión básica en el borde.
    """
    if temperatura >= 32 or humedad >= 80:
        return "ALERTA", "Condición crítica: revisar ventilación, riego o ambiente."
    elif temperatura >= 28 or humedad >= 70:
        return "PRECAUCION", "Condición moderada: observar tendencia."
    else:
        return "NORMAL", "Condición estable: operación dentro del rango esperado."

def actualizar_salida_visual(estado):
    apagar_leds()

    if estado == "NORMAL":
        led_verde.value(1)
    elif estado == "PRECAUCION":
        led_amarillo.value(1)
    else:
        led_rojo.value(1)

# -----------------------------
# Programa principal
# -----------------------------
device_id = anonimizar_dispositivo("ESP32_Aula_IoT_Semana_8")

print("Sistema IoT iniciado")
print("Dispositivo anonimizado:", device_id)
print("Leyendo temperatura y humedad desde DHT22...")
print("---------------------------------------------")

while True:
    try:
        sensor.measure()
        temperatura = sensor.temperature()
        humedad = sensor.humidity()

        estado, recomendacion = clasificar_estado(temperatura, humedad)
        actualizar_salida_visual(estado)

        print("{")
        print("  'device_id': '{}',".format(device_id))
        print("  'temperatura_c': {:.1f},".format(temperatura))
        print("  'humedad_pct': {:.1f},".format(humedad))
        print("  'estado_edge': '{}',".format(estado))
        print("  'recomendacion': '{}'".format(recomendacion))
        print("}")
        print("---------------------------------------------")

    except OSError as error:
        apagar_leds()
        led_rojo.value(1)
        print("Error al leer el sensor DHT22:", error)
        print("Verifique conexiones y configuración del componente.")

    sleep(2)
```

<!--
Notas del presentador:
Explique el código por bloques, no línea por línea de forma excesiva. Inicie señalando que se importan tres elementos principales: Pin desde machine para manejar entradas y salidas digitales del ESP32, sleep desde time para controlar la frecuencia de lectura y dht para comunicarse con el sensor DHT22. Luego muestre la configuración de pines. Esta sección debe coincidir con el circuito armado en Wokwi: el sensor usa GPIO 15 y los LEDs usan GPIO 25, GPIO 26 y GPIO 27. Recalque que una buena práctica es definir constantes al inicio del programa, porque facilita cambiar pines sin modificar toda la lógica.

Después explique las funciones auxiliares. La función apagar_leds deja todos los LEDs en cero para evitar que queden dos estados encendidos al mismo tiempo. La función anonimizar_dispositivo genera un identificador simple a partir de un nombre interno. Aclare que esta función no es una solución criptográfica profesional, pero ayuda a introducir la idea de privacidad: no siempre conviene exponer nombres reales de dispositivos, ubicaciones o personas en mensajes de datos. En sistemas reales se usarían técnicas más robustas, políticas de minimización de datos, cifrado y control de acceso.

La función clasificar_estado representa la decisión local o edge. El dispositivo evalúa temperatura y humedad usando umbrales. Si la temperatura es mayor o igual a 32 grados o la humedad mayor o igual a 80 %, clasifica alerta. Si la temperatura es mayor o igual a 28 grados o la humedad mayor o igual a 70 %, clasifica precaución. En caso contrario, clasifica normal. Explique que estos umbrales son didácticos y pueden ajustarse según el contexto: cultivo, laboratorio, bodega, aula o sistema de refrigeración. La función actualizar_salida_visual traduce la decisión en una acción física o visual: encender verde, amarillo o rojo.

En el programa principal, el ciclo while True realiza lecturas cada dos segundos, clasifica el estado, actualiza LEDs e imprime un mensaje estructurado. Este mensaje se parece a un registro de datos que podría enviarse a una plataforma IoT. El bloque try-except permite manejar errores de lectura. Conecte esto con confiabilidad: un sistema IoT debe prever fallas de sensores, desconexiones y datos inválidos. Cierre indicando que el código integra captura, procesamiento local, salida visual, privacidad básica y observabilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la simulación

::content::

1. Crear un proyecto nuevo en Wokwi con ESP32 y MicroPython.
2. Agregar un sensor DHT22 y tres LEDs.
3. Realizar las conexiones sugeridas.
4. Copiar el código completo en `main.py`.
5. Iniciar la simulación.
6. Abrir el monitor serial.
7. Cambiar temperatura y humedad desde el componente DHT22.
8. Observar el cambio de estado: normal, precaución o alerta.
9. Verificar que el LED correspondiente se encienda.
10. Explicar qué decisión tomó el ESP32 y por qué.

<!--
Notas del presentador:
Use esta diapositiva como guía operacional para que los estudiantes ejecuten la práctica sin perderse. Recomiende avanzar en grupos pequeños si algunos estudiantes tienen dificultad con la plataforma. El primer paso es crear un proyecto nuevo en Wokwi y seleccionar ESP32 con MicroPython. Luego se agregan los componentes: DHT22 y tres LEDs. Es importante verificar que los pines usados en el circuito coincidan con los pines definidos en el código. Si hay diferencias, el programa puede ejecutarse, pero los LEDs no responderán como se espera.

Al copiar el código en main.py, sugiera revisar que no se pierdan espacios de indentación, porque MicroPython, al igual que Python, depende de la indentación para interpretar bloques. Después de iniciar la simulación, se debe abrir el monitor serial. Allí aparecerán mensajes con device_id, temperatura, humedad, estado y recomendación. Pida a los estudiantes modificar la temperatura y humedad del DHT22 desde el panel del componente en Wokwi. Cuando los valores estén por debajo de los umbrales, debería encenderse el LED verde. Cuando se supere el primer nivel de advertencia, debería encenderse el LED amarillo. Cuando se alcance un valor crítico, debería encenderse el LED rojo.

Si algo falla, proponga una revisión sistemática. Primero, verificar que el DHT22 tenga VCC, GND y DATA conectados correctamente. Segundo, revisar que los LEDs no estén invertidos. Tercero, confirmar que los GPIO correspondan al código. Cuarto, revisar mensajes de error en el monitor serial. Quinto, comprobar que la librería dht se esté usando correctamente en el entorno MicroPython de Wokwi.

Relacione cada paso con un concepto profesional. Crear el circuito representa diseño de hardware. Copiar y ejecutar código representa firmware. Observar el monitor serial representa diagnóstico y telemetría. Cambiar valores representa prueba de escenarios. Analizar el LED representa respuesta del sistema. Explicar la decisión representa pensamiento de ingeniería. Concluya que una práctica sencilla puede evidenciar principios centrales de IoT: sensado, procesamiento, actuación, validación, privacidad básica y toma de decisiones local.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y preguntas de análisis

::left::

### Producto esperado

Al finalizar la práctica, cada estudiante debe contar con:

1. Simulación funcional en Wokwi.
2. Lecturas visibles de temperatura y humedad.
3. Clasificación local del estado.
4. Encendido correcto de LEDs.
5. Explicación breve de la decisión tomada por el ESP32.

::right::

### Preguntas de análisis

1. ¿Qué parte del sistema representa edge computing?
2. ¿Qué dato podría considerarse sensible?
3. ¿Cómo se fortalecería la seguridad?
4. ¿Qué cambiaría si se usara 5G?
5. ¿Cómo podría integrarse IA?
6. ¿Qué aplicación real podría usar esta lógica?

<!--
Notas del presentador:
Explique que el producto esperado tiene dos dimensiones: una técnica y una argumentativa. La dimensión técnica consiste en lograr que la simulación funcione: el sensor entrega valores, el programa clasifica el estado, los LEDs responden y el monitor serial muestra información. La dimensión argumentativa consiste en que el estudiante pueda explicar qué está ocurriendo y cómo se relaciona con el futuro de IoT. En educación universitaria, especialmente en ingeniería y tecnología, no basta con ejecutar código; es necesario interpretar el comportamiento del sistema y justificar decisiones de diseño.

Desarrolle las preguntas de análisis. La parte que representa edge computing es la función de clasificación ejecutada directamente en el ESP32. El dispositivo no envía todos los datos a la nube antes de decidir; aplica reglas locales y actúa mediante LEDs. Un dato sensible podría ser la ubicación del dispositivo, el identificador real, información de un paciente, condiciones de una vivienda, patrones de consumo energético o datos de producción. Aunque en la práctica solo se usan temperatura y humedad, en aplicaciones reales esos datos pueden revelar hábitos, condiciones ambientales críticas o información de negocio.

Para fortalecer la seguridad, los estudiantes podrían proponer cifrado en la comunicación, autenticación del dispositivo, contraseñas robustas, actualizaciones seguras, segmentación de red, validación de datos, monitoreo de anomalías y control de acceso a la plataforma. Si se usara 5G, podrían mejorar escenarios que requieren movilidad, baja latencia o conexión masiva de dispositivos; sin embargo, también habría que analizar costos, cobertura y consumo energético. Para integrar IA, se podría reemplazar la clasificación por umbrales por un modelo que aprenda patrones históricos y prediga condiciones de riesgo. En MicroPython, esto podría ser limitado, pero en edge gateways o plataformas TinyML sería posible.

Finalmente, invite a pensar en aplicaciones reales: invernaderos, cadena de frío, aulas inteligentes, bodegas, hospitales, centros de datos, transporte de alimentos o monitoreo ambiental. Cierre señalando que la misma lógica puede escalar: sensor, procesamiento, decisión, actuación y registro. Lo que cambia en sistemas profesionales es la robustez, seguridad, integración, mantenimiento y gobernanza de datos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
Cada grupo o estudiante comparte en máximo un minuto:

1. Qué valores probó en el DHT22.
2. Qué estado obtuvo.
3. Qué LED se encendió.
4. Qué decisión tomó el ESP32.
5. Qué mejora propondría para convertir la simulación en una solución IoT real.

La socialización debe enfocarse en evidencias, explicación técnica y transferencia a un caso aplicado.

<!--
Notas del presentador:
Organice la socialización de forma ágil para no exceder el tiempo. Indique que no todos deben mostrar pantalla si el grupo es grande; puede seleccionar voluntarios o pedir respuestas por chat. Lo importante es que los estudiantes verbalicen la relación entre datos, decisión y acción. Pida que cada intervención sea breve: valores probados, estado obtenido, LED encendido, explicación de la decisión y mejora propuesta. Esta estructura ayuda a evitar intervenciones dispersas y mantiene el foco académico.

Si un estudiante probó valores normales, puede explicar que el LED verde representa operación dentro de rango. Si probó valores cercanos al límite, puede comentar que el LED amarillo funciona como advertencia temprana. Si probó valores altos, puede mostrar que el LED rojo representa alerta. En cada caso, pregunte por qué el sistema tomó esa decisión. Esto permite comprobar si comprendieron la lógica de umbrales. Luego pregunte qué mejora harían para llevar el prototipo a un contexto real. Las respuestas pueden incluir envío de datos por MQTT, integración con ThingsBoard, notificaciones por correo o WhatsApp, almacenamiento histórico, panel de visualización, autenticación, cifrado, energía solar, carcasa protectora, calibración del sensor, redundancia o modelo de IA.

Aproveche las respuestas para conectar con los conceptos de la semana. Si alguien menciona enviar datos a la nube, pregunte qué datos deberían enviarse y cuáles podrían procesarse localmente. Si alguien propone IA, pregunte qué datos históricos necesitaría. Si alguien propone seguridad, pregunte contra qué amenaza. Si alguien propone 5G, pregunte si realmente el caso requiere baja latencia o movilidad. Si alguien propone blockchain, pregunte qué registro necesita trazabilidad inmutable.

Cierre la socialización destacando que el aprendizaje principal es la transferencia. Una práctica de aula no es un producto final, pero sí una representación de decisiones profesionales. Los estudiantes deben salir con la capacidad de analizar una solución IoT por capas: sensores, procesamiento, comunicación, seguridad, datos, actuación y valor para el usuario o la organización.
-->

---
layout: slide-08-titulo-texto
---

::title::
Dudas frecuentes y precisiones finales

::content::
**¿Todo IoT necesita 5G?**
No. Depende del caso de uso, cobertura, latencia, costo y consumo energético.

**¿Edge computing reemplaza la nube?**
No. La complementa al procesar localmente lo urgente o sensible.

**¿IA siempre es necesaria?**
No. Primero se debe justificar el problema, los datos y el beneficio.

**¿Blockchain sirve para todo IoT?**
No. Es útil cuando se requiere trazabilidad, integridad y confianza compartida.

**¿La seguridad se agrega al final?**
No. Debe diseñarse desde el inicio y mantenerse durante todo el ciclo de vida.

<!--
Notas del presentador:
Use esta diapositiva para resolver dudas de manera sintética y conceptual. La primera precisión es que no todo IoT necesita 5G. Aunque 5G ofrece beneficios importantes en velocidad, latencia y conexión masiva, existen soluciones donde Wi-Fi, Ethernet, Bluetooth Low Energy, LoRaWAN, Zigbee o redes celulares anteriores pueden ser suficientes. Por ejemplo, un sensor agrícola que envía datos cada quince minutos no necesariamente requiere 5G. En cambio, un sistema de movilidad, teleoperación, video analítico o control industrial crítico puede beneficiarse más de baja latencia y alta disponibilidad.

La segunda precisión es que edge computing no reemplaza la nube. La nube sigue siendo útil para almacenamiento histórico, análisis agregado, entrenamiento de modelos, integración empresarial, tableros y administración remota. El borde es útil para decisiones rápidas, filtrado de datos, privacidad, continuidad operativa y reducción de tráfico. La arquitectura más común será híbrida: parte del procesamiento ocurre en el dispositivo o pasarela, y parte en la nube.

La tercera precisión es sobre inteligencia artificial. IA no debe agregarse por moda. Se necesita un problema claro, datos suficientes, criterios de evaluación, capacidad de procesamiento y una justificación del beneficio. En muchos sistemas, reglas simples son suficientes. En otros, IA aporta valor al detectar patrones complejos o predecir eventos. La cuarta precisión se refiere a blockchain. No es una base de datos universal para todos los datos IoT. Su utilidad aparece cuando se requiere trazabilidad, integridad, auditoría y confianza entre actores. Si no existe esa necesidad, puede añadir complejidad innecesaria.

La quinta precisión es la más importante: la seguridad no se agrega al final. En IoT, la seguridad debe pensarse desde el diseño, mantenerse en la implementación, verificarse en pruebas y actualizarse durante la operación. Esto incluye credenciales, cifrado, actualizaciones, segmentación, monitoreo, registros, control de acceso y gestión de vulnerabilidades. Cierre recordando que una solución IoT responsable debe ser funcional, segura, útil, sostenible y respetuosa de los datos de las personas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Cierre académico e institucional

::content::
Durante esta sesión se integraron las principales tendencias del futuro de IoT:

1. Ecosistemas conectados e interoperables.
2. 5G y baja latencia.
3. Procesamiento en el borde.
4. IA para automatización y decisiones.
5. Blockchain para trazabilidad.
6. Privacidad, ciberseguridad y monitoreo continuo.
7. Aplicaciones en salud, agricultura, transporte, energía e industria.

Recuerde diligenciar la **Encuesta de Percepción Estudiantil** y revisar la evaluación correspondiente a la semana.

<!--
Notas del presentador:
Realice un cierre que conecte toda la sesión. Recuerde que IoT ha evolucionado desde sistemas básicos de sensado y conectividad hacia ecosistemas inteligentes, distribuidos y orientados a decisiones. En esta clase se revisó cómo la conectividad ubicua y la interoperabilidad permiten que dispositivos, plataformas y servicios trabajen de forma integrada. También se explicó que 5G puede aportar mayor velocidad y menor latencia, especialmente en aplicaciones que requieren comunicación en tiempo real. Se analizó edge computing como una estrategia para procesar datos cerca del origen, reducir dependencia de la nube, mejorar tiempos de respuesta y proteger información sensible.

Retome la importancia de la inteligencia artificial en IoT. IA permite detectar patrones, optimizar procesos, personalizar servicios y tomar decisiones más autónomas. Sin embargo, debe usarse con responsabilidad, datos adecuados y criterios claros. Blockchain se presentó como una tecnología útil cuando se requiere integridad, trazabilidad y confianza en los registros, pero no como una solución universal. En privacidad y ciberseguridad, se enfatizó que el crecimiento de dispositivos conectados aumenta la superficie de ataque y exige medidas multicapa: cifrado, autenticación, actualizaciones, monitoreo, segmentación y anonimización.

Conecte el cierre con la práctica. El ejercicio en Wokwi mostró una versión mínima de un nodo IoT con decisión local: un ESP32 leyó temperatura y humedad, clasificó el estado y activó una respuesta visual. Esta simulación permitió observar conceptos de sensado, procesamiento en el borde, actuación, monitoreo serial y privacidad básica mediante identificador anonimizado. Aunque sencilla, representa una lógica aplicable a agricultura, salud, energía, edificios inteligentes o industria.

Finalmente, recuerde a los estudiantes revisar la evaluación de la semana desde una lectura comprensiva. Las preguntas buscan reconocer beneficios y desafíos de tecnologías emergentes, no solamente seleccionar opciones por descarte. Invite a diligenciar la Encuesta de Percepción Estudiantil como un ejercicio institucional importante para mejorar los procesos académicos. Agradezca la participación y deje abierta la posibilidad de resolver inquietudes puntuales antes de finalizar.
-->

---
layout: slide-12-cierre
---

