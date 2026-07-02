---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 7

::date::
Junio 15 de 2026

<!--
Notas del presentador:
Inicie la sesión dando la bienvenida formal a los estudiantes de la Electiva CPC Internet de las Cosas. Señale que esta semana representa un punto de articulación entre lo que ya se ha trabajado sobre sensores, microcontroladores, comunicación y plataformas IoT, y una dimensión más avanzada: la inteligencia artificial aplicada a datos provenientes de dispositivos conectados. Explique que la clase no se centrará únicamente en definir IA o Machine Learning de manera aislada, sino en comprender cómo estas tecnologías permiten que un sistema IoT pase de observar el entorno a interpretar datos, anticipar comportamientos y apoyar decisiones. Puede recordar que en semanas anteriores el énfasis estuvo en capturar datos mediante ESP32, simular sensores en Wokwi, usar MicroPython y comprender protocolos o flujos de comunicación. En esta sesión, esos datos serán entendidos como materia prima para modelos, reglas inteligentes y procesos de inferencia. Presente la idea central: IoT proporciona presencia en el mundo físico mediante sensores y actuadores; IA aporta capacidad de análisis, predicción, clasificación y automatización. Anticipe que la práctica no implementará un modelo profundo real, porque el propósito de la Open Class es comprender el razonamiento base y construir un prototipo viable en Wokwi. Por eso se usará una inferencia ligera basada en línea base adaptativa y detección de anomalías, útil para introducir la lógica de sistemas inteligentes en dispositivos de borde. Invite a los estudiantes a participar activamente, pues el foro de la semana exige argumentar escenarios prospectivos, especialmente en agricultura inteligente, privacidad, sostenibilidad y uso responsable de datos.
-->

---
layout: slide-02-titulo
---

::title::
Del dato del sensor a la decisión

<!--
Notas del presentador:
Explique que el título de la sesión resume una transición fundamental en los sistemas conectados: pasar del dato aislado a una decisión contextual. Un sensor de temperatura, humedad, presencia, vibración, corriente o luminosidad no genera valor por sí solo si el sistema únicamente muestra números. El valor aparece cuando esos números se interpretan dentro de una situación concreta: un cultivo que requiere riego, una máquina que comienza a vibrar fuera de su patrón habitual, una ciudad que necesita regular el tráfico o una red IoT que debe identificar comportamientos sospechosos. En este punto se introduce la inteligencia artificial como una capa de análisis que puede convertir lecturas repetidas en información útil. Aclare que, en IoT, la IA puede ejecutarse en diferentes lugares: en la nube, en servidores locales, en gateways o en el borde, cerca del dispositivo. Esta ubicación tiene implicaciones técnicas y éticas: latencia, consumo energético, privacidad, costo de comunicación y confiabilidad. Conecte esta idea con el aprendizaje automático, indicando que ML permite reconocer patrones en datos históricos o en flujos continuos. No todos los sistemas requieren redes neuronales complejas; muchas soluciones inician con reglas, umbrales adaptativos, clasificación simple o detección de anomalías. Esta aclaración es importante porque ayuda a los estudiantes a no pensar que IA siempre implica grandes centros de datos. En contextos educativos y prototipos, se puede iniciar con modelos sencillos, siempre que exista una pregunta clara, datos relevantes y criterios de evaluación. Cierre esta introducción indicando que la clase integrará concepto, actividad colaborativa, relación con el foro y una práctica guiada en Wokwi con ESP32 y MicroPython.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
IoT observa, IA interpreta

::image:: 
<img src="/imagenes/iot-ia-arquitectura.png" alt="Imagen de apoyo sobre integración de IoT e inteligencia artificial" />

::content::
En un sistema IoT tradicional, los sensores capturan datos y los envían a una plataforma.

En un sistema IoT habilitado con IA, esos datos pueden convertirse en:

* Predicciones.
* Alertas tempranas.
* Clasificaciones.
* Recomendaciones.
* Automatización de acciones.
* Optimización de recursos.
* Detección de comportamientos anómalos.

La pregunta clave deja de ser: **¿qué dato capturé?**
Y pasa a ser: **¿qué decisión responsable puedo tomar con ese dato?**

<!--
Notas del presentador:
Use esta diapositiva para construir el puente conceptual de la semana. Puede iniciar con un ejemplo sencillo: si un sensor mide humedad del suelo cada minuto, el dato aislado puede decir “35 % de humedad”. Sin embargo, un sistema inteligente puede interpretar si ese valor es normal para el cultivo, si indica estrés hídrico, si conviene activar riego, si existe una falla del sensor o si el patrón anticipa un problema mayor. Explique que IoT aporta la capacidad de observar el mundo físico de forma continua mediante sensores y dispositivos conectados. La inteligencia artificial, por su parte, permite interpretar esos datos para encontrar relaciones, detectar patrones, anticipar eventos o apoyar decisiones. En una arquitectura básica, el dato puede viajar desde el sensor hacia un microcontrolador, luego hacia una red, un gateway, una plataforma en la nube y finalmente una aplicación. En arquitecturas más avanzadas, parte del análisis se realiza cerca del dispositivo, lo que se conoce como edge computing o procesamiento en el borde. Este enfoque es especialmente valioso cuando se requiere baja latencia, menor dependencia de internet, ahorro de ancho de banda o mayor protección de datos sensibles. Señale que la IA no debe asumirse como una “caja mágica”. Requiere datos de calidad, criterios claros, validación, mantenimiento y responsabilidad ética. Un modelo mal entrenado, datos sesgados o una mala política de privacidad pueden generar decisiones incorrectas o riesgos para los usuarios. Conecte la idea con el foro: en agricultura inteligente, la integración de IoT e IA puede mejorar eficiencia y sostenibilidad, pero también exige preguntarse quién recolecta los datos, para qué se usan, cómo se protegen y qué decisiones automatizadas se permiten.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad de integración: “¿Dato, patrón o decisión?”

::left::
**Duración:** 10 minutos.

**Instrucciones para estudiantes**

1. Escuchen cada caso presentado por el docente.
2. Clasifiquen la frase como:

   * Dato.
   * Patrón.
   * Decisión.
3. Justifiquen en una frase.
4. Compartan una respuesta rápida por chat o voz.

::right::
**Casos sugeridos**

* “La humedad del suelo es 28 %”.
* “Durante tres días, la humedad cae después de las 2:00 p. m.”.
* “El sistema activa riego por goteo durante 8 minutos”.
* “El motor vibra más que su promedio histórico”.
* “El sistema bloquea una conexión sospechosa”.
* “El asistente reconoce una orden de voz”.

<!--
Notas del presentador:
Explique que esta actividad busca activar saberes previos y preparar a los estudiantes para diferenciar niveles de análisis. El dato es una observación puntual capturada por un sensor o sistema: temperatura, humedad, vibración, consumo eléctrico, ubicación, audio, tráfico de red o presión. El patrón aparece cuando varios datos se organizan y permiten reconocer una regularidad, una tendencia o una desviación. Por ejemplo, una lectura de 28 % de humedad del suelo es un dato; observar que cada tarde la humedad cae rápidamente durante varios días constituye un patrón. La decisión ocurre cuando el sistema o la persona actúa con base en el dato o en el patrón: activar riego, enviar alerta, apagar un equipo, bloquear una conexión, solicitar mantenimiento o ajustar un semáforo. Durante la actividad, invite a los estudiantes a no responder solamente con la categoría, sino con una justificación breve. Esto obliga a argumentar y permite detectar confusiones. Si algunos clasifican “el motor vibra más que su promedio histórico” como dato, explique que allí ya hay comparación con una línea base, por tanto se aproxima a patrón o alerta de anomalía. Si clasifican “el asistente reconoce una orden de voz” como decisión, matice que el reconocimiento de voz es una aplicación de NLP que interpreta una señal, y puede ser paso previo a una decisión. Mantenga el ritmo ágil: no se busca resolver todos los matices, sino abrir la discusión. Cierre conectando con la práctica: el ESP32 leerá temperatura y humedad; el código calculará una línea base; luego clasificará el estado y activará una salida visual. Es decir, recorrerá los tres niveles: dato, patrón y decisión.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender IA en IoT

::content::
- **Internet de las cosas (IoT)** se refiere a la integración de dispositivos físicos capaces de capturar, procesar o transmitir datos mediante sensores, actuadores, microcontroladores y redes. 
- **Inteligencia artificial (IA)** es el conjunto de técnicas que permiten a un sistema realizar tareas asociadas con interpretación, razonamiento, percepción, predicción o toma de decisiones. 
- **Aprendizaje automático (Machine Learning)** es una rama de la IA en la que un modelo aprende patrones a partir de datos, en lugar de depender únicamente de reglas escritas manualmente. 
- **Entrenamiento** es el proceso mediante el cual el modelo ajusta sus parámetros usando datos históricos; **inferencia** es el uso del modelo ya construido para analizar datos nuevos. 
- **Edge computing** o procesamiento en el borde consiste en procesar datos cerca de la fuente, por ejemplo en un ESP32, gateway o dispositivo local, reduciendo latencia y dependencia de la nube. 
- **TinyML** describe el despliegue de modelos de aprendizaje automático en dispositivos de recursos limitados, como microcontroladores. 
- **Detección de anomalías** busca identificar comportamientos atípicos en sensores o redes. 
- **Privacidad**, **anonimización** y **cifrado** son principios esenciales para proteger datos personales cuando los sistemas IoT recopilan información sensible.

<!--
Notas del presentador:
Dedique esta diapositiva a fijar vocabulario común. Es importante que los estudiantes no usen los términos IoT, IA y Machine Learning como sinónimos. IoT se relaciona principalmente con la conexión entre el mundo físico y el mundo digital: sensores que capturan variables, microcontroladores que ejecutan instrucciones, redes que transmiten datos y plataformas que permiten visualizar, almacenar o actuar. IA es una categoría más amplia que incluye métodos para interpretar datos, reconocer patrones, razonar, planear, generar lenguaje, percibir imágenes o tomar decisiones. Machine Learning es una parte de la IA basada en datos; permite que un sistema ajuste su comportamiento a partir de ejemplos o registros previos. Explique la diferencia entre entrenamiento e inferencia con una analogía: entrenar es estudiar muchos casos para aprender una regla; inferir es aplicar lo aprendido a un caso nuevo. En IoT, no siempre entrenamos dentro del microcontrolador. Muchas veces el modelo se entrena en un computador o en la nube, y luego se despliega en el borde para que el dispositivo lo use. TensorFlow Lite para microcontroladores, por ejemplo, está diseñado para ejecutar modelos de aprendizaje automático en microcontroladores y dispositivos con muy poca memoria, lo que permite llevar inferencia a hardware restringido. :contentReference[oaicite:0]{index=0} También puede mencionar que Wokwi permite simular proyectos con ESP32 y diferentes entornos, incluyendo MicroPython, lo cual facilita el prototipado educativo antes de trabajar con hardware físico. :contentReference[oaicite:1]{index=1} Aclare que TinyML no significa “IA débil”, sino IA optimizada para restricciones de memoria, energía, latencia y costo. Finalmente, conecte privacidad y seguridad: a mayor cantidad de sensores y decisiones automatizadas, mayor responsabilidad en el tratamiento de datos. Un sistema inteligente debe ser útil, pero también transparente, seguro y proporcional al propósito para el cual recolecta información.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Arquitectura conceptual: sensor, modelo, acción y aprendizaje

::image:: 
<img src="/imagenes/iot-edge-tinyml.png" alt="Imagen de apoyo sobre arquitectura IoT con IA" />

::content::
Un sistema IoT con IA puede entenderse como un ciclo:

1. **Captura:** sensores miden variables del entorno.
2. **Preprocesamiento:** se limpian, filtran o normalizan datos.
3. **Análisis:** reglas, modelos o algoritmos identifican patrones.
4. **Inferencia:** el sistema clasifica, predice o estima riesgo.
5. **Acción:** se activa una alerta, actuador o recomendación.
6. **Retroalimentación:** nuevos datos mejoran el sistema.

<!--
Notas del presentador:
Explique la arquitectura como un ciclo de valor. El primer momento es la captura: un sensor de humedad, temperatura, vibración, corriente, sonido, imagen o presencia convierte un fenómeno físico en una señal o lectura digital. El segundo momento es el preprocesamiento. En sistemas reales, los datos no llegan perfectos: pueden tener ruido, valores faltantes, unidades inconsistentes, errores de calibración o lecturas extremas. Por eso, antes de aplicar IA, suele ser necesario filtrar, suavizar, normalizar o transformar los datos. El tercer momento es el análisis. Aquí pueden intervenir reglas simples, modelos estadísticos, árboles de decisión, clasificadores, redes neuronales, clustering, series temporales o técnicas de optimización. El cuarto momento es la inferencia, es decir, aplicar el análisis a datos nuevos para obtener una salida: normal/anómalo, riesgo alto/riesgo bajo, consumo esperado, categoría de evento, recomendación de riego o predicción de carga eléctrica. El quinto momento es la acción. La acción puede ser automática, como encender una bomba, ajustar un semáforo o bloquear una conexión; también puede ser asistida, como enviar una alerta al usuario para que confirme. El sexto momento es la retroalimentación. Los sistemas maduros registran qué ocurrió después de la decisión y usan esa información para mejorar reglas, modelos o políticas. Subraye que no todos los ciclos deben cerrar con automatización total. En contextos críticos, conviene mantener supervisión humana. En agricultura, por ejemplo, un sistema puede recomendar riego, pero el agricultor puede decidir si lo activa según clima, disponibilidad de agua y estado del cultivo. Esta discusión prepara a los estudiantes para responder el foro con una mirada técnica, ética y contextual, evitando respuestas simplistas como “poner sensores y usar IA”.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
IA en la nube

::rightTitle::
IA en el borde

::left::

* Mayor capacidad de cómputo.
* Almacenamiento amplio.
* Entrenamiento de modelos complejos.
* Integración con dashboards.
* Útil para análisis histórico.
* Requiere conectividad estable.
* Puede aumentar latencia.
* Exige gobernanza de datos.

::right::

* Procesamiento cerca del sensor.
* Menor latencia.
* Menor tráfico hacia la nube.
* Mejor respuesta en tiempo real.
* Mayor control de datos sensibles.
* Limitado por memoria y energía.
* Requiere modelos optimizados.
* Útil para inferencia local.

<!--
Notas del presentador:
Compare la nube y el borde sin presentarlos como opciones excluyentes. En la práctica, muchos sistemas IoT inteligentes usan arquitecturas híbridas. La nube es conveniente para almacenar grandes volúmenes de datos, entrenar modelos, comparar información histórica, generar tableros y centralizar la administración. Por ejemplo, una empresa agrícola podría recopilar datos de múltiples fincas, entrenar modelos de predicción de riego en la nube y visualizar tendencias por zona, cultivo o temporada. Sin embargo, depender exclusivamente de la nube puede ser problemático si la conectividad es inestable, si se necesita una respuesta inmediata o si los datos son sensibles. Allí aparece el procesamiento en el borde. En el borde, el dispositivo o gateway toma decisiones localmente: detectar una anomalía, activar una alarma, filtrar datos antes de enviarlos o ejecutar un modelo pequeño. Wokwi documenta que el ESP32 puede simularse para diferentes tipos de aplicaciones, incluidas MicroPython y CircuitPython, lo que lo convierte en una herramienta pertinente para prototipos educativos de edge IoT. :contentReference[oaicite:2]{index=2} También puede explicar que el enfoque de microcontroladores para IA exige optimización: memoria limitada, consumo energético, menor capacidad de cómputo y necesidad de modelos compactos. TensorFlow Lite para microcontroladores está diseñado justamente para ejecutar modelos en entornos restringidos y sin requerir sistemas operativos complejos. :contentReference[oaicite:3]{index=3} Conecte esto con las preguntas de evaluación: una de ellas indaga cómo contribuye la IA al procesamiento en el borde; la respuesta central es que permite análisis de datos y toma de decisiones localmente. Finalice aclarando que decidir entre nube y borde implica balancear latencia, privacidad, costo, mantenimiento, escalabilidad y criticidad de la aplicación.
-->

---
layout: slide-08-titulo-texto
---

::title::
Tipos de aprendizaje automático en escenarios IoT

::content::
**Aprendizaje supervisado:** usa datos etiquetados para clasificar o predecir. Ejemplo: estimar si una transacción es fraudulenta.

**Aprendizaje no supervisado:** identifica patrones sin etiquetas previas. Ejemplo: agrupar lecturas de sensores y detectar comportamientos atípicos.

**Aprendizaje por refuerzo:** aprende mediante recompensas y acciones. Ejemplo: ajustar estrategias de control en ambientes dinámicos.

**Aprendizaje por transferencia:** reutiliza conocimiento de un modelo previo para una nueva tarea. Ejemplo: adaptar un modelo de visión a otro cultivo o entorno.

En IoT, la selección del enfoque depende del dato disponible, la pregunta técnica, el nivel de riesgo y el lugar donde se ejecutará la inferencia.

<!--
Notas del presentador:
Explique cada tipo de aprendizaje con ejemplos relacionados con IoT. El aprendizaje supervisado requiere datos etiquetados. Por ejemplo, si una organización tiene registros de transacciones marcadas como fraudulentas y legítimas, puede entrenar un clasificador para identificar futuras transacciones sospechosas. En sensores ambientales, se podría entrenar un modelo para clasificar estados de cultivo: normal, estrés hídrico o riesgo de enfermedad, siempre que existan etiquetas confiables. El aprendizaje no supervisado se usa cuando no hay etiquetas, pero sí se desea descubrir estructura en los datos. Esto es común en detección de anomalías: el sistema aprende cuál es el comportamiento habitual de una máquina, red o ambiente, y luego marca desviaciones. Relacione esto con una pregunta de evaluación: para detectar anomalías en datos de sensores IoT sin supervisión humana constante, el enfoque adecuado suele ser no supervisado. El aprendizaje por refuerzo es más complejo y se aplica cuando un agente toma acciones y recibe recompensas o penalizaciones. Puede aparecer en control de energía, robótica, riego inteligente o gestión de tráfico, aunque exige simulación, seguridad y evaluación rigurosa. El aprendizaje por transferencia permite reducir costos de entrenamiento reutilizando modelos previos; por ejemplo, adaptar un modelo de visión entrenado en imágenes generales para identificar plagas o madurez en frutos. Aclare que en dispositivos como ESP32 no siempre se entrena el modelo; muchas veces se ejecuta una versión simplificada o comprimida para inferencia. En una clase introductoria, es válido usar reglas y líneas base adaptativas como aproximación pedagógica, porque ayudan a entender el razonamiento sin requerir librerías pesadas. Cierre indicando que el tipo de aprendizaje no se elige por moda, sino por disponibilidad de datos, propósito de la decisión, capacidad del dispositivo y responsabilidad frente al usuario.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Aplicaciones frecuentes de IA en IoT

::image:: 
<img src="/imagenes/iot-ia-agricultura-inteligente.png" alt="Imagen de apoyo sobre aplicaciones de IA en IoT" />

::content::

* **Predicción:** demanda eléctrica, riego, mantenimiento, consumo.
* **Clasificación:** transacciones, estados de máquina, condiciones ambientales.
* **NLP:** reconocimiento de voz en asistentes y dispositivos conectados.
* **Visión por computador:** inspección, conteo, vigilancia, agricultura de precisión.
* **Optimización:** tráfico, energía, rutas, recursos hídricos.
* **Ciberseguridad:** detección de intrusos y comportamientos anómalos.
* **Privacidad:** anonimización, cifrado y minimización de datos.

<!--
Notas del presentador:
Utilice esta diapositiva para mostrar que la IA en IoT no pertenece a un único sector. En predicción, los sistemas pueden anticipar consumo eléctrico, demanda de agua, fallos de equipos o necesidades de mantenimiento. Esto se relaciona con el recurso de lectura sobre pronóstico de carga eléctrica, donde la IA se usa para estimar comportamiento futuro a partir de datos históricos. En clasificación, un sistema puede decidir si una lectura corresponde a operación normal, alerta, falla o fraude. En NLP, los asistentes virtuales y dispositivos inteligentes interpretan comandos hablados o escritos; por eso, en la evaluación de la semana, el reconocimiento de voz aparece como aplicación común en dispositivos IoT con asistentes. En visión por computador, modelos como YOLO pueden identificar objetos, contar elementos, detectar defectos o apoyar análisis de cultivos. La lectura sobre despliegue eficiente de YOLOv5 y Coral Edge TPU se conecta con la necesidad de ejecutar inferencia visual en el borde usando hardware especializado. En optimización, la IA puede apoyar decisiones sobre tráfico urbano, uso de energía o distribución de recursos hídricos. En ciberseguridad, los sistemas de detección de intrusos basados en IA analizan patrones de red y comportamiento de dispositivos para identificar amenazas. Explique que la privacidad no debe considerarse un tema separado del diseño técnico. Si un sistema recopila datos personales o datos productivos sensibles, debe aplicar principios como consentimiento, minimización, anonimización, cifrado y control de acceso. La IA amplifica el valor del dato, pero también el riesgo de mal uso. Cierre destacando que un buen proyecto IoT con IA debe responder tres preguntas: qué problema resuelve, qué datos necesita y qué consecuencias tiene la decisión automatizada o asistida.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Agricultura inteligente: caso integrador de la semana

::left::
**Escenario**

Una finca desea mejorar eficiencia y sostenibilidad.

Cuenta con sensores de:

* Humedad del suelo.
* Temperatura ambiente.
* Humedad relativa.
* Luminosidad.
* Nivel de tanque.
* Flujo de agua.

Quiere reducir desperdicio hídrico y anticipar estrés del cultivo.

::right::
**Integración IoT + IA**

* IoT captura datos del entorno.
* IA identifica patrones.
* ML predice necesidad de riego.
* Edge computing permite respuesta local.
* La nube consolida históricos.
* El sistema recomienda acciones.
* El agricultor valida decisiones críticas.
* La privacidad protege datos productivos.

<!--
Notas del presentador:
Presente la agricultura inteligente como el caso articulador del foro de discusión. Explique que el problema no consiste simplemente en instalar sensores, sino en diseñar un sistema capaz de transformar mediciones en decisiones sostenibles. Una finca puede capturar humedad del suelo, temperatura, humedad relativa, luminosidad, nivel de tanque y flujo de agua. Sin embargo, la pregunta clave es cómo usar esos datos para reducir desperdicio, mejorar productividad, anticipar estrés hídrico o detectar fallas. IoT permite observar el ambiente de forma continua, mientras que IA permite interpretar patrones y proyectar escenarios. Por ejemplo, si durante varios días se observa alta temperatura, baja humedad del suelo y alta radiación, un modelo podría anticipar necesidad de riego antes de que el cultivo presente daños visibles. Si el sensor de flujo indica consumo de agua, pero la humedad del suelo no aumenta, el sistema podría sospechar fuga, obstrucción o mala distribución. Si el nivel del tanque baja de manera atípica durante la noche, podría generarse una alerta. Explique que los escenarios futuros incluyen riego predictivo, fertilización variable, detección temprana de plagas, monitoreo climático localizado, trazabilidad de producción y reducción de costos operativos. Sin embargo, también aparecen desafíos: dependencia tecnológica, calidad de datos, calibración de sensores, conectividad rural, costo de mantenimiento, sesgos en modelos y control sobre datos productivos. Invite a los estudiantes a usar esta estructura para el foro: problema, datos necesarios, arquitectura IoT, técnica de IA, decisión esperada, impacto sostenible y riesgos éticos. Recuérdeles que una buena respuesta no debe ser genérica. Debe explicar claramente la relación entre IoT e IA: IoT genera datos situados; IA convierte esos datos en predicción, recomendación, clasificación u optimización.
-->

---
layout: slide-08-titulo-texto
---

::title::
¿Cuál es la relación entre la aplicación de IoT y la inteligencia artificial?

::content::

**Para responder con calidad académica:**

* Definir el problema del caso hipotético.
* Identificar sensores y datos requeridos.
* Explicar qué técnica de IA o ML se usaría.
* Proponer una arquitectura: dispositivo, borde, red, nube y visualización.
* Argumentar impactos en eficiencia, sostenibilidad y toma de decisiones.
* Incluir riesgos: privacidad, seguridad, sesgo, dependencia tecnológica y gobernanza.
* Cerrar con una postura crítica y propositiva.

**Participación en equipo:** aporte principal, retroalimentaciones y conclusión.

<!--
Notas del presentador:
Oriente esta diapositiva hacia la producción argumentativa del foro. Explique que la pregunta “¿Cuál es la relación entre IoT e IA?” puede responderse de manera superficial diciendo que “IoT recoge datos e IA los analiza”, pero para una participación universitaria se espera mayor profundidad. Sugiera que el aporte principal inicie con el problema del caso hipotético: por ejemplo, mejorar riego, reducir consumo de agua, anticipar enfermedades del cultivo o controlar variables ambientales. Luego, debe identificar los datos necesarios y justificar por qué esos datos son relevantes. Después, debe proponer una técnica de IA o ML. Si se busca predecir necesidad de riego, puede hablarse de análisis predictivo o modelos supervisados con históricos. Si se busca detectar lecturas extrañas sin etiquetas, se puede hablar de aprendizaje no supervisado o detección de anomalías. Si se busca optimizar uso de agua, se pueden mencionar algoritmos de optimización. Si se usan imágenes para detectar plagas, entra visión por computador. La arquitectura debe incluir sensores, microcontrolador, comunicación, procesamiento en borde o nube y visualización para el usuario. Resalte que el foro también debe anticipar impactos tecnológicos: automatización de prácticas agrícolas, mantenimiento predictivo, agricultura de precisión, menor desperdicio, decisiones basadas en datos y sostenibilidad. Sin embargo, la respuesta debe incluir riesgos y no caer en tecnosolucionismo. Los datos agrícolas pueden revelar productividad, ubicación, hábitos de trabajo y decisiones económicas. Por eso, la privacidad, la seguridad y la gobernanza son importantes. Para las retroalimentaciones, recomiende no escribir únicamente “estoy de acuerdo”; deben ampliar, cuestionar o complementar. Para la conclusión, el integrante responsable debe sintetizar aprendizajes del equipo y plantear una postura equilibrada entre beneficios y riesgos.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Conceptos Clave

::rightTitle::
Idea clave

::left::

* Privacidad en IoT con IA.
* Hardware para acelerar IA.
* NLP en asistentes virtuales.
* Aprendizaje no supervisado.
* Ciberseguridad e intrusos.
* Edge computing.
* Fraude y clasificación.
* Optimización de tráfico.
* Análisis predictivo.
* Detección de anomalías.

::right::

* Anonimización y cifrado protegen datos personales.
* GPU y aceleradores especializados mejoran cómputo.
* Reconocimiento de voz es aplicación típica de NLP.
* Anomalías sin etiquetas se asocian con aprendizaje no supervisado.
* IDS basados en IA mitigan amenazas.
* El borde permite análisis local.
* La clasificación identifica patrones fraudulentos.
* La optimización mejora movilidad y recursos.
* Lo predictivo anticipa fallos o demanda.
* Clustering y similitud ayudan a detectar rarezas.

<!--
Notas del presentador:
Explique que esta diapositiva no pretende “dar respuestas” de manera mecánica, sino organizar los conceptos que el estudiante debe comprender para responder con criterio. En privacidad, el punto central es que los sistemas IoT pueden recopilar datos personales o sensibles, y por eso requieren anonimización, cifrado, consentimiento, minimización y control de acceso. En hardware, explique que CPU, GPU y aceleradores cumplen roles distintos. La CPU es generalista; la GPU y otros aceleradores permiten ejecutar operaciones paralelas útiles para modelos de IA, especialmente en visión o grandes volúmenes de datos. En NLP, indique que los asistentes virtuales usan reconocimiento de voz para interpretar comandos. En aprendizaje no supervisado, insista en que se trabaja sin etiquetas previas, por eso es útil para detectar patrones atípicos en sensores. En ciberseguridad, los sistemas de detección de intrusos basados en IA observan tráfico, comportamiento y eventos para identificar amenazas. En edge computing, la idea evaluable es que la IA puede analizar datos y tomar decisiones localmente, reduciendo latencia y dependencia de la nube. En detección de fraude, los algoritmos de clasificación son comunes cuando existen ejemplos etiquetados de transacciones legítimas y fraudulentas. En ciudades inteligentes, los algoritmos de optimización permiten regular tráfico, rutas o recursos. En entornos industriales, el análisis predictivo permite anticipar fallas, demanda o necesidades de mantenimiento. Para detección de anomalías en grandes conjuntos de datos, se pueden usar varias técnicas, entre ellas clustering, K-NN, PCA o modelos específicos, según el contexto; lo importante es entender que se buscan patrones atípicos respecto al comportamiento esperado. Invite a los estudiantes a estudiar relacionando concepto, escenario y decisión, no memorizando palabras sueltas. Cierre recordando que el foro y la evaluación comparten una misma competencia: proyectar aplicaciones de IoT apoyadas en IA con responsabilidad técnica y ética.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Ética, privacidad y seguridad: no todo dato debe recolectarse

::image:: 
<img src="/imagenes/iot-ia-privacidad-seguridad.png" alt="Imagen de apoyo sobre privacidad y seguridad en IoT con IA" />

::content::
Un sistema IoT con IA debe responder:

* ¿Qué datos son estrictamente necesarios?
* ¿El usuario conoce y acepta el uso de los datos?
* ¿Los datos personales se anonimizan?
* ¿La comunicación está cifrada?
* ¿Quién puede acceder a la información?
* ¿Qué ocurre si el modelo se equivoca?
* ¿La decisión automatizada puede ser explicada?
* ¿Cómo se audita el sistema?

<!--
Notas del presentador:
Enfatice que la ética no es un complemento decorativo, sino una condición de diseño. En IoT, los dispositivos pueden estar presentes en casas, instituciones educativas, empresas, cultivos, ciudades, fábricas y espacios públicos. Esto significa que pueden recolectar datos de comportamiento, ubicación, consumo, voz, imagen, salud ambiental o productividad. Cuando además se integra IA, esos datos no solo se almacenan, sino que pueden inferir patrones, clasificar personas, anticipar acciones o automatizar decisiones. Por eso, el principio de minimización es esencial: recolectar solo lo necesario para el propósito declarado. Si un sistema agrícola necesita humedad del suelo, no necesariamente requiere datos personales del trabajador. Si un sistema de asistencia por voz necesita interpretar comandos, debe definir cómo almacena audio, cuánto tiempo lo conserva y quién puede acceder. Explique anonimización como la eliminación o transformación de identificadores para reducir la posibilidad de asociar datos a una persona. Explique cifrado como la protección de la información para que no sea legible por terceros no autorizados durante almacenamiento o transmisión. Relacione esto con la evaluación: implementar técnicas de anonimización y cifrado es un enfoque esencial para proteger la privacidad de datos personales en sistemas IoT habilitados con IA. Además, señale que la seguridad incluye autenticación, actualización de firmware, control de permisos, segmentación de red, monitoreo y detección de intrusos. También hay una dimensión de justicia y explicabilidad: si un modelo recomienda una acción que afecta recursos, costos o acceso, debe poder justificarse. En agricultura, por ejemplo, una recomendación errónea de riego puede desperdiciar agua o afectar la producción. Cierre invitando a los estudiantes a incluir en el foro al menos una consideración ética o de privacidad, porque los escenarios prospectivos responsables no solo imaginan eficiencia, sino también gobernanza.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Cómo usar la inteligencia artificial (IA) en logística

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/7m4ajUS9GXQ?si=RS8MwvOUC_EGL-VX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Aclare que esta diapositiva funciona como guía de curaduría y no como reproducción obligatoria durante la sesión. Dado que la Open Class tiene noventa minutos y ya incluye actividad, desarrollo, ejemplos y práctica, los videos deben usarse con criterio. Si se decide usar uno en clase, conviene que sea breve y que tenga una pregunta de observación. Por ejemplo, antes de mostrar un video sobre IA e IoT, puede pedir a los estudiantes identificar qué parte corresponde a captura de datos y qué parte corresponde a decisión. Para un video sobre edge computing o TinyML, la pregunta puede ser: ¿qué ventaja aparece al procesar cerca del sensor? Para un video sobre agricultura inteligente, la pregunta puede ser: ¿qué dato se captura, qué modelo se podría usar y qué decisión se espera? Explique que no se deben insertar enlaces no verificados. En el archivo queda marcado el espacio para agregar enlaces validados por el docente, idealmente de canales académicos, técnicos o institucionales, en español y con duración menor a cinco minutos. Esta decisión evita compartir videos extensos, comerciales o poco precisos. Puede mencionar que la documentación técnica consultada para sustentar la sesión incluye Wokwi, que permite simular ESP32 y proyectos con MicroPython, y TensorFlow Lite para microcontroladores, que permite comprender el enfoque de aprendizaje automático en dispositivos restringidos. :contentReference[oaicite:4]{index=4} Enfatice que el video no reemplaza la explicación docente ni la práctica. Su función pedagógica es introducir, reforzar o ampliar un concepto. En una Open Class, un recurso audiovisual debe estar integrado a una actividad de pensamiento; de lo contrario, se convierte en pausa pasiva. Cierre sugiriendo que los estudiantes revisen al menos uno de los videos antes de participar en el foro, para enriquecer sus argumentos con ejemplos y vocabulario técnico.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
TinyML y Edge AI: El Futuro de la IA en Dispositivos Pequeños

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/9eiIE7MxmeI?si=TWli8A-CEB7ks-K4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Aclare que esta diapositiva funciona como guía de curaduría y no como reproducción obligatoria durante la sesión. Dado que la Open Class tiene noventa minutos y ya incluye actividad, desarrollo, ejemplos y práctica, los videos deben usarse con criterio. Si se decide usar uno en clase, conviene que sea breve y que tenga una pregunta de observación. Por ejemplo, antes de mostrar un video sobre IA e IoT, puede pedir a los estudiantes identificar qué parte corresponde a captura de datos y qué parte corresponde a decisión. Para un video sobre edge computing o TinyML, la pregunta puede ser: ¿qué ventaja aparece al procesar cerca del sensor? Para un video sobre agricultura inteligente, la pregunta puede ser: ¿qué dato se captura, qué modelo se podría usar y qué decisión se espera? Explique que no se deben insertar enlaces no verificados. En el archivo queda marcado el espacio para agregar enlaces validados por el docente, idealmente de canales académicos, técnicos o institucionales, en español y con duración menor a cinco minutos. Esta decisión evita compartir videos extensos, comerciales o poco precisos. Puede mencionar que la documentación técnica consultada para sustentar la sesión incluye Wokwi, que permite simular ESP32 y proyectos con MicroPython, y TensorFlow Lite para microcontroladores, que permite comprender el enfoque de aprendizaje automático en dispositivos restringidos. :contentReference[oaicite:4]{index=4} Enfatice que el video no reemplaza la explicación docente ni la práctica. Su función pedagógica es introducir, reforzar o ampliar un concepto. En una Open Class, un recurso audiovisual debe estar integrado a una actividad de pensamiento; de lo contrario, se convierte en pausa pasiva. Cierre sugiriendo que los estudiantes revisen al menos uno de los videos antes de participar en el foro, para enriquecer sus argumentos con ejemplos y vocabulario técnico.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
🚰 Riego Inteligente con 𝐈𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/6WcvCDSU5CU?si=dlyVSMuenqhf8MHZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<!--
Notas del presentador:
Aclare que esta diapositiva funciona como guía de curaduría y no como reproducción obligatoria durante la sesión. Dado que la Open Class tiene noventa minutos y ya incluye actividad, desarrollo, ejemplos y práctica, los videos deben usarse con criterio. Si se decide usar uno en clase, conviene que sea breve y que tenga una pregunta de observación. Por ejemplo, antes de mostrar un video sobre IA e IoT, puede pedir a los estudiantes identificar qué parte corresponde a captura de datos y qué parte corresponde a decisión. Para un video sobre edge computing o TinyML, la pregunta puede ser: ¿qué ventaja aparece al procesar cerca del sensor? Para un video sobre agricultura inteligente, la pregunta puede ser: ¿qué dato se captura, qué modelo se podría usar y qué decisión se espera? Explique que no se deben insertar enlaces no verificados. En el archivo queda marcado el espacio para agregar enlaces validados por el docente, idealmente de canales académicos, técnicos o institucionales, en español y con duración menor a cinco minutos. Esta decisión evita compartir videos extensos, comerciales o poco precisos. Puede mencionar que la documentación técnica consultada para sustentar la sesión incluye Wokwi, que permite simular ESP32 y proyectos con MicroPython, y TensorFlow Lite para microcontroladores, que permite comprender el enfoque de aprendizaje automático en dispositivos restringidos. :contentReference[oaicite:4]{index=4} Enfatice que el video no reemplaza la explicación docente ni la práctica. Su función pedagógica es introducir, reforzar o ampliar un concepto. En una Open Class, un recurso audiovisual debe estar integrado a una actividad de pensamiento; de lo contrario, se convierte en pausa pasiva. Cierre sugiriendo que los estudiantes revisen al menos uno de los videos antes de participar en el foro, para enriquecer sus argumentos con ejemplos y vocabulario técnico.
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada en Wokwi: mini IA de borde para alerta ambiental

::content::
**Propósito:** construir un prototipo con ESP32 y MicroPython que lea temperatura y humedad, calcule una línea base adaptativa y clasifique el estado ambiental como normal, observación o alerta.

**Idea de IA educativa:** el sistema “aprende” una referencia inicial del ambiente mediante promedio móvil exponencial. Luego compara nuevas lecturas con esa referencia y estima una puntuación de anomalía.

**Producto esperado:** simulación funcional en Wokwi con monitor serial y tres LED indicadores:

* Verde: condición normal.
* Amarillo: condición de observación.
* Rojo: posible anomalía.

<!--
Notas del presentador:
Presente la práctica como una aproximación pedagógica a la inferencia en el borde. Aclare desde el inicio que no se entrenará una red neuronal ni se desplegará un modelo TinyML real, porque el objetivo de esta Open Class es comprender el flujo de pensamiento. El sistema leerá temperatura y humedad usando un DHT22, calculará una línea base adaptativa mediante promedio móvil exponencial y comparará las nuevas lecturas con esa referencia. Si la diferencia es pequeña, la condición será normal. Si la diferencia aumenta, se activará observación. Si la desviación es alta o se combinan condiciones de riesgo, se activará alerta. Esto se parece a muchos sistemas reales de detección de anomalías en etapas iniciales: primero se define comportamiento esperado, luego se identifican desviaciones, finalmente se toma una acción. Explique que el procesamiento ocurre localmente en el ESP32 simulado, por lo cual representa una idea de edge computing. Wokwi es pertinente para esta actividad porque permite crear simulaciones de circuitos y ejecutar código de microcontroladores en el navegador, incluyendo proyectos ESP32 con MicroPython. :contentReference[oaicite:5]{index=5} Además, Wokwi documenta componentes como DHT22 y el formato diagram.json para definir partes y conexiones del proyecto. :contentReference[oaicite:6]{index=6} Insista en que, en un escenario real, el sistema debería calibrarse con datos del cultivo, del ambiente o del proceso industrial. No basta con usar umbrales arbitrarios; se requiere validación. Sin embargo, para la sesión, este prototipo permite observar claramente cómo un dispositivo puede pasar de medir a clasificar y actuar. Conecte la práctica con el foro: en agricultura inteligente, esta misma lógica puede servir para detectar estrés hídrico, cambios bruscos de clima o lecturas anómalas en sensores.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes y conexiones sugeridas

::left::
**Componentes en Wokwi**

* ESP32 DevKit.
* Sensor DHT22.
* LED verde.
* LED amarillo.
* LED rojo.
* Tres resistencias de 220 Ω.
* Cables de conexión.
* Monitor serial de la simulación.

::right::
**Conexiones**

* DHT22 VCC → 3V3.
* DHT22 GND → GND.
* DHT22 SDA/DATA → GPIO 15.
* LED verde ánodo → GPIO 18 con resistencia.
* LED amarillo ánodo → GPIO 19 con resistencia.
* LED rojo ánodo → GPIO 21 con resistencia.
* Cátodos de LED → GND.

<!--
Notas del presentador:
Explique los componentes antes de escribir código. El ESP32 será el microcontrolador encargado de leer el sensor, procesar datos y activar indicadores visuales. El DHT22 simula la medición de temperatura y humedad; en Wokwi puede modificarse manualmente durante la simulación para observar cómo cambia la respuesta del sistema. Los tres LED funcionarán como salida visual: verde para normalidad, amarillo para observación y rojo para alerta. Las resistencias protegen los LED limitando corriente, una buena práctica tanto en simulación como en montaje físico. Señale que se usan GPIO 18, 19 y 21 para los LED porque son pines digitales disponibles y cómodos para salida. El DHT22 se conecta al GPIO 15 para lectura de datos. Si algún estudiante ya trabajó con otros pines en semanas previas, puede adaptar el código modificando las constantes. Resalte que el monitor serial será tan importante como los LED, porque mostrará valores numéricos: temperatura, humedad, línea base, puntuación de anomalía y estado clasificado. Esto permite interpretar la lógica interna, no solo observar colores. En un sistema IoT real, esas salidas podrían enviarse a una plataforma, dashboard, broker MQTT, base de datos o alerta móvil. Sin embargo, para mantener la práctica en dieciocho minutos, se prioriza una salida local. Puede pedir a los estudiantes que creen el proyecto en Wokwi usando la plantilla ESP32 MicroPython. Si ya tienen un proyecto base, pueden añadir componentes y ajustar conexiones. Recuerde que Wokwi admite simulación de hardware como microcontroladores, sensores y displays, lo que facilita actividades de prototipado sin hardware físico. :contentReference[oaicite:7]{index=7} Cierre indicando que la calidad del aprendizaje no está en encender un LED, sino en explicar por qué el sistema clasificó una lectura como normal o anómala.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython para main.py

::content::

```python {lines:true}
# Mini IA de borde para ESP32 + DHT22 en Wokwi
# Curso: Internet de las cosas - Semana 7
# Propósito: leer temperatura y humedad, construir una línea base
# adaptativa y clasificar el estado como normal, observación o alerta.

from machine import Pin
from time import sleep
import dht

# -----------------------------
# Configuración de pines
# -----------------------------
PIN_DHT = 15
PIN_LED_VERDE = 18
PIN_LED_AMARILLO = 19
PIN_LED_ROJO = 21

sensor = dht.DHT22(Pin(PIN_DHT))

led_verde = Pin(PIN_LED_VERDE, Pin.OUT)
led_amarillo = Pin(PIN_LED_AMARILLO, Pin.OUT)
led_rojo = Pin(PIN_LED_ROJO, Pin.OUT)

# -----------------------------
# Parámetros de línea base
# -----------------------------
# alpha controla qué tan rápido se adapta la referencia.
# Un valor pequeño suaviza más; un valor grande reacciona más rápido.
ALPHA = 0.15

base_temp = None
base_hum = None

def apagar_leds():
    """Apaga todos los indicadores."""
    led_verde.off()
    led_amarillo.off()
    led_rojo.off()

def actualizar_leds(estado):
    """Enciende el LED correspondiente al estado clasificado."""
    apagar_leds()

    if estado == "NORMAL":
        led_verde.on()
    elif estado == "OBSERVACION":
        led_amarillo.on()
    else:
        led_rojo.on()

def calcular_puntaje_anomalia(temp, hum, ref_temp, ref_hum):
    """
    Calcula una puntuación simple de anomalía entre 0 y 100.
    La idea educativa es comparar la lectura actual con una línea base.
    """
    diferencia_temp = abs(temp - ref_temp)
    diferencia_hum = abs(hum - ref_hum)

    puntaje = 0

    # Desviación de temperatura respecto a la referencia
    if diferencia_temp >= 1.5:
        puntaje += min(45, diferencia_temp * 10)

    # Desviación de humedad respecto a la referencia
    if diferencia_hum >= 4:
        puntaje += min(45, diferencia_hum * 3)

    # Condiciones combinadas de riesgo ambiental
    if temp >= 32 and hum <= 45:
        puntaje += 20

    if temp <= 12 or hum >= 90:
        puntaje += 15

    return min(100, int(puntaje))

def clasificar_estado(puntaje):
    """Convierte el puntaje de anomalía en una etiqueta comprensible."""
    if puntaje < 30:
        return "NORMAL"
    elif puntaje < 60:
        return "OBSERVACION"
    else:
        return "ALERTA"

def actualizar_linea_base(valor_actual, valor_base):
    """Actualiza la línea base mediante promedio móvil exponencial."""
    return (ALPHA * valor_actual) + ((1 - ALPHA) * valor_base)

print("Sistema iniciado: Mini IA de borde para IoT")
print("Ajuste los valores del DHT22 en Wokwi para observar la clasificacion.")
print("-" * 60)

while True:
    try:
        sensor.measure()
        temp = sensor.temperature()
        hum = sensor.humidity()

        # Inicialización de línea base con la primera lectura válida
        if base_temp is None or base_hum is None:
            base_temp = temp
            base_hum = hum
            puntaje = 0
            estado = "NORMAL"
        else:
            puntaje = calcular_puntaje_anomalia(temp, hum, base_temp, base_hum)
            estado = clasificar_estado(puntaje)

            # Para evitar que una anomalía fuerte contamine la referencia,
            # solo actualizamos la línea base si el sistema no está en alerta.
            if estado != "ALERTA":
                base_temp = actualizar_linea_base(temp, base_temp)
                base_hum = actualizar_linea_base(hum, base_hum)

        actualizar_leds(estado)

        print("Temp: {:.1f} C | Hum: {:.1f}% | Base T: {:.1f} C | Base H: {:.1f}% | Puntaje: {} | Estado: {}".format(
            temp, hum, base_temp, base_hum, puntaje, estado
        ))

        sleep(2)

    except Exception as error:
        apagar_leds()
        print("Error de lectura del sensor:", error)
        sleep(2)
```

<!--
Notas del presentador:
Guíe la lectura del código por bloques, evitando que los estudiantes lo perciban como una pieza extensa e incomprensible. Inicie por la configuración de pines: el sensor DHT22 se asocia al GPIO 15 y los LED a GPIO 18, 19 y 21. Luego explique la variable ALPHA. Este parámetro controla qué tan rápido se adapta la línea base. Una línea base es una referencia de comportamiento normal. En sistemas reales, podría calcularse a partir de horas, días o semanas de datos; en esta práctica se calcula durante la simulación. El promedio móvil exponencial permite que la referencia se actualice gradualmente, dando mayor estabilidad al sistema. Después, analice la función calcular_puntaje_anomalia. Allí se compara la lectura actual con la línea base. Si la temperatura o la humedad se alejan de la referencia, el puntaje aumenta. También se agregan condiciones combinadas: temperatura alta con humedad baja puede representar un riesgo ambiental, especialmente si se piensa en cultivos. La función clasificar_estado traduce el puntaje a una etiqueta: NORMAL, OBSERVACION o ALERTA. Explique que esta traducción es clave en IoT porque los usuarios no siempre necesitan ver datos crudos; muchas veces necesitan una interpretación clara. Luego, destaque la decisión de no actualizar la línea base cuando el estado es ALERTA. Esto introduce una idea importante de aprendizaje robusto: si una lectura es extrema, no conviene que el sistema la incorpore inmediatamente como normalidad. En un modelo real, esto se relaciona con control de datos atípicos, limpieza y validación. Durante la ejecución, el monitor serial muestra lecturas, referencias, puntaje y estado. Pida a los estudiantes cambiar temperatura y humedad en Wokwi para observar cómo responde el sistema. Recalque que este código no reemplaza un modelo ML entrenado, pero sí permite entender inferencia local, clasificación y detección básica de anomalías en el borde.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica en Wokwi

::content::

1. Crear un proyecto nuevo con **ESP32 + MicroPython**.
2. Agregar un sensor **DHT22**.
3. Agregar tres LED y tres resistencias.
4. Realizar las conexiones sugeridas.
5. Pegar el código completo en `main.py`.
6. Ejecutar la simulación.
7. Abrir el monitor serial.
8. Cambiar temperatura y humedad del DHT22.
9. Observar la clasificación: normal, observación o alerta.
10. Explicar qué condición produjo cada cambio.

<!--
Notas del presentador:
Acompañe la práctica paso a paso. Primero indique que deben crear un proyecto nuevo con ESP32 y MicroPython. Si algún estudiante no encuentra la plantilla, puede iniciar desde un proyecto ESP32 y asegurarse de que el archivo principal sea main.py con código MicroPython. Luego, deben agregar el sensor DHT22 y los tres LED. Es importante revisar que el pin de datos del sensor coincida con el PIN_DHT definido en el código. Si usan otro GPIO, deben modificar la constante. Después, deben conectar los LED respetando ánodo, cátodo y resistencia. Aunque Wokwi puede tolerar algunas conexiones simplificadas, conviene insistir en buenas prácticas de electrónica básica. Una vez pegado el código, se ejecuta la simulación y se abre el monitor serial. El docente puede modelar primero una lectura normal y luego modificar la temperatura o la humedad del DHT22. Por ejemplo, iniciar con 24 °C y 60 % de humedad; luego subir la temperatura a 35 °C y bajar la humedad a 35 %. Los estudiantes observarán que el puntaje aumenta y puede pasar a alerta. También pueden probar cambios moderados para que aparezca observación. Sugiera que registren mentalmente tres casos: uno normal, uno de observación y uno de alerta. No es necesario pedir informe escrito en clase, pero sí deben ser capaces de explicar qué cambió y por qué el sistema reaccionó. Relacione la prueba con la pregunta del foro: si esto fuera un cultivo, ¿qué acción recomendaría el sistema? ¿Activar riego? ¿Enviar alerta? ¿Esperar confirmación humana? ¿Guardar histórico en la nube? Cierre indicando que la validación de un sistema inteligente requiere experimentar con entradas, observar salidas y justificar decisiones.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y criterios de observación

::left::
**Producto esperado**

Al finalizar la práctica, cada estudiante o grupo debe tener una simulación funcional que:

* Lea temperatura y humedad.
* Calcule línea base adaptativa.
* Genere puntaje de anomalía.
* Clasifique el estado.
* Muestre resultados en monitor serial.
* Active LED según el estado.

::right::
**Criterios de observación**

* ¿El sensor entrega datos válidos?
* ¿Los LED coinciden con el estado?
* ¿La línea base se actualiza gradualmente?
* ¿La alerta evita actualizar la referencia?
* ¿El puntaje cambia con lecturas extremas?
* ¿El sistema permite explicar una decisión?

<!--
Notas del presentador:
Utilice esta diapositiva para orientar la evaluación formativa de la práctica. No se trata de calificar el circuito en la Open Class, sino de verificar si los estudiantes comprendieron el flujo completo. El producto esperado debe demostrar captura, procesamiento, clasificación y acción. Si el sensor entrega datos válidos, el primer nivel está resuelto. Si el monitor serial muestra temperatura, humedad, línea base, puntaje y estado, el estudiante puede interpretar lo que ocurre internamente. Si los LED coinciden con el estado, existe una salida visual comprensible. Revise especialmente la línea base adaptativa. Al inicio, la línea base coincide con la primera lectura. Luego, si las condiciones cambian de forma moderada, la referencia se mueve lentamente. Esto simula una forma básica de adaptación. Sin embargo, cuando aparece una alerta, la referencia no se actualiza. Este detalle permite discutir por qué los sistemas inteligentes deben protegerse de datos atípicos. Si una lectura extrema se incorporara inmediatamente como normal, el sistema podría perder sensibilidad ante anomalías reales. Invite a los estudiantes a responder oralmente: ¿qué pasaría si ALPHA fuera 0.80? La línea base reaccionaría demasiado rápido y podría normalizar cambios bruscos. ¿Qué pasaría si ALPHA fuera 0.01? El sistema sería muy estable, pero poco adaptable. Esta discusión conecta programación con análisis de datos. También puede pedir que imaginen una versión agrícola: el LED rojo podría activar una notificación, encender una bomba o solicitar revisión del cultivo. Pero también deben considerar seguridad: no siempre conviene automatizar sin supervisión, especialmente si una mala lectura puede desperdiciar agua o dañar un proceso. Cierre recordando que el producto esperado no es solo técnico; también es explicativo. Un estudiante debe poder decir qué dato se midió, qué patrón se comparó y qué decisión se tomó.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis después de la práctica

::content::

* ¿Qué parte del prototipo corresponde a IoT?
* ¿Qué parte representa una aproximación a IA o ML?
* ¿Por qué la línea base adaptativa puede considerarse una forma simple de aprendizaje?
* ¿Qué limitaciones tendría este enfoque en un cultivo real?
* ¿Qué datos adicionales mejorarían la decisión?
* ¿Conviene decidir en el borde, en la nube o con arquitectura híbrida?
* ¿Qué riesgos de privacidad o seguridad aparecerían si el sistema se conecta a internet?
* ¿Cómo se relaciona esta práctica con el foro de agricultura inteligente?

<!--
Notas del presentador:
Estas preguntas permiten transformar la práctica en aprendizaje reflexivo. La primera pregunta ayuda a separar componentes: IoT está representado por el ESP32, el sensor DHT22, los LED como actuadores simples y la posibilidad de comunicación o monitoreo. La segunda pregunta apunta al razonamiento inteligente: el sistema no solo muestra datos, sino que calcula una referencia, compara lecturas, estima anomalía y clasifica estado. Aclare que esto no es Machine Learning formal en sentido estricto, porque no hay un proceso de entrenamiento con dataset etiquetado ni un modelo estadístico complejo. Sin embargo, sí representa una aproximación educativa al aprendizaje adaptativo, porque la línea base cambia con nuevas lecturas y el sistema usa esa referencia para decidir. La tercera pregunta permite profundizar en esa idea. Una línea base adaptativa aprende una normalidad local, aunque sea de manera simple. La cuarta pregunta abre límites: en un cultivo real hay variabilidad por tipo de suelo, hora del día, estación, especie, edad del cultivo, riego previo, lluvia, viento y calibración del sensor. Por eso, un sistema real necesitaría más variables, datos históricos y validación agronómica. La quinta pregunta puede generar respuestas como humedad del suelo, radiación solar, pronóstico meteorológico, nivel de tanque, caudal, pH, conductividad eléctrica o imágenes de hojas. La sexta pregunta invita a discutir arquitectura: el borde es útil para alertas rápidas; la nube para análisis histórico; lo híbrido para combinar ambos. La séptima pregunta conecta ética y seguridad: si el sistema se conecta a internet, deben protegerse credenciales, datos, comunicaciones y accesos. La última pregunta retorna al foro: esta práctica ofrece un ejemplo concreto para argumentar cómo IoT proporciona datos y la IA contribuye a interpretarlos para mejorar eficiencia y sostenibilidad.
-->

---
layout: slide-04-imagen-derecha
---

::title::
De la práctica al escenario real: agricultura inteligente

::image:: 
<img src="/imagenes/iot-wokwi-esp32-anomalias.png" alt="Imagen de apoyo sobre agricultura inteligente con IoT e IA" />

::content::
El prototipo puede escalarse así:

* DHT22 → estación climática local.
* Línea base → modelo predictivo entrenado con históricos.
* LED → notificación, dashboard o actuador.
* Monitor serial → plataforma IoT.
* Umbral simple → detección de anomalías.
* Simulación → piloto en campo.
* Decisión local → arquitectura edge-cloud.

**Pregunta central:** ¿cómo asegurar eficiencia sin perder control humano, privacidad y sostenibilidad?

<!--
Notas del presentador:
Explique que esta diapositiva permite traducir el ejercicio de Wokwi a un escenario profesional. El DHT22 de la práctica representa una estación climática mínima. En un sistema real, se podrían añadir humedad del suelo, presión, lluvia, radiación, velocidad del viento, pH, conductividad eléctrica, caudal o imágenes. La línea base adaptativa usada en clase puede evolucionar hacia modelos predictivos entrenados con históricos de cultivo, clima y riego. Los LED pueden convertirse en notificaciones móviles, alertas en una plataforma IoT, activación de bombas, apertura de válvulas o recomendaciones para el agricultor. El monitor serial puede escalarse a dashboard, base de datos, broker MQTT o sistema de analítica. El umbral simple puede evolucionar hacia detección de anomalías más robusta, clustering, modelos de series temporales o redes neuronales ligeras, según capacidad y necesidad. La simulación en Wokwi puede convertirse en un piloto con hardware físico y pruebas controladas. Subraye que escalar no significa automatizar todo de inmediato. Un buen proyecto comienza con prototipo, validación, ajuste y evaluación de impacto. En agricultura, los errores pueden tener consecuencias económicas y ambientales: desperdicio de agua, estrés del cultivo, uso innecesario de energía o pérdida de confianza en el sistema. Por eso, conviene diseñar etapas: primero monitoreo, luego recomendación, después automatización parcial y finalmente automatización con supervisión. Conecte con la pregunta central: la eficiencia debe equilibrarse con control humano, privacidad y sostenibilidad. Si los datos productivos se almacenan en una plataforma externa, se deben definir permisos, propiedad de datos y medidas de seguridad. Si un modelo decide riego, debe poder explicarse por qué. Cierre invitando a los estudiantes a usar esta escalabilidad como estructura para su participación en el foro: prototipo, arquitectura, impacto y responsabilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve: tres respuestas por grupo

::content::
Cada grupo comparte en máximo un minuto:

1. **Una lectura que produjo estado normal.**
2. **Una lectura que produjo observación o alerta.**
3. **Una mejora para convertir el prototipo en una solución de agricultura inteligente.**

El docente recoge coincidencias y diferencias para cerrar la práctica.

<!--
Notas del presentador:
Organice la socialización con tiempos estrictos. Cada grupo o algunos voluntarios compartirán tres elementos: una lectura normal, una lectura de observación o alerta, y una mejora aplicada al caso de agricultura inteligente. El objetivo no es que todos expliquen el código completo, sino que evidencien comprensión del comportamiento del sistema. Si un grupo dice que la lectura normal fue 24 °C y 60 % de humedad, pregunte qué línea base tenía el sistema. Si otro grupo muestra alerta con 35 °C y 30 % de humedad, pregunte qué condición elevó el puntaje. Si proponen una mejora, invítelos a concretarla: no basta decir “usar más sensores”; deben indicar qué sensor y qué decisión permitiría. Por ejemplo, humedad del suelo para decidir riego, caudal para detectar fugas, cámara para identificar plagas, sensor de nivel para controlar disponibilidad de agua o pronóstico meteorológico para evitar riego antes de lluvia. Recoja coincidencias en el tablero o verbalmente: muchos grupos probablemente mencionarán riego, alertas y dashboards. Luego destaque diferencias interesantes: algunos pensarán en edge computing, otros en nube, otros en privacidad. Esta diversidad es valiosa porque muestra que IoT con IA no es una receta única, sino un diseño contextual. También aproveche para reforzar el trabajo colaborativo del foro: la participación principal puede presentar una propuesta, las retroalimentaciones pueden ampliar sensores, riesgos o impactos, y la conclusión puede sintetizar la postura del equipo. Mantenga la socialización dentro de siete minutos para reservar el cierre. Si el grupo es numeroso, use participación por chat y seleccione tres intervenciones representativas. Cierre con una frase integradora: un sistema inteligente no se define por tener muchos sensores, sino por tomar mejores decisiones con datos pertinentes, seguros y contextualizados.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas orientada

::content::
**Dudas técnicas**

* Pines y conexiones.
* Lectura del DHT22.
* Monitor serial.
* Lógica de clasificación.
* Ajuste de umbrales y ALPHA.

**Dudas conceptuales**

* Diferencia entre IA y ML.
* Aprendizaje supervisado y no supervisado.
* Edge computing.
* Detección de anomalías.
* Privacidad y cifrado.
* Relación con foro y evaluación.

<!--
Notas del presentador:
Use esta diapositiva para administrar el bloque final de preguntas sin exceder el tiempo. Puede iniciar preguntando si las dudas son técnicas o conceptuales. Las dudas técnicas suelen estar relacionadas con errores de conexión, pines mal asignados, ausencia de datos en el monitor serial o LED que no enciende. Recomiende verificar primero que el DHT22 esté conectado a 3V3, GND y GPIO 15, y que el código use el mismo pin. Si el monitor serial no muestra datos, revisar que la simulación esté corriendo y que el archivo se llame main.py. Si un LED no responde, revisar polaridad, resistencia y pin. Las dudas sobre ALPHA son una oportunidad para reforzar análisis: ALPHA define sensibilidad de adaptación. Un valor alto hace que la línea base cambie rápido; un valor bajo la hace más estable. En dudas conceptuales, diferencie IA y ML nuevamente. IA es el campo amplio; ML aprende patrones a partir de datos. Edge computing se refiere a procesar cerca de la fuente. Detección de anomalías significa identificar lecturas que se alejan de un comportamiento esperado. Privacidad y cifrado son condiciones para proteger datos, especialmente cuando hay información personal o productiva sensible. Con respecto al foro, recuerde que no se espera una descripción genérica de sensores, sino una propuesta argumentada: problema, datos, técnica de IA, arquitectura, impactos, riesgos y conclusión. Si surgen preguntas sobre si la práctica “es realmente IA”, responda con precisión: es una simulación de inferencia ligera y aprendizaje adaptativo simple; sirve como puente hacia modelos ML más formales. Esta honestidad fortalece el rigor académico. Finalice priorizando dudas que afecten la participación en el foro y el entendimiento de la evaluación semanal.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordemos...

::content::
La integración de IoT e IA permite que los sistemas conectados no solo midan el entorno, sino que interpreten datos, anticipen eventos y apoyen decisiones.

En agricultura inteligente, esta integración puede mejorar eficiencia hídrica, sostenibilidad, productividad y monitoreo predictivo.

Sin embargo, todo diseño debe considerar privacidad, seguridad, explicabilidad, calidad de datos y responsabilidad humana.

**Idea final:** un sistema IoT inteligente es valioso cuando sus decisiones son técnicamente sólidas, éticamente responsables y útiles para el contexto real.

<!--
Notas del presentador:
Cierre la sesión retomando la ruta completa. Al inicio se distinguió entre dato, patrón y decisión; luego se explicó la relación entre IoT, IA y ML; después se analizaron aplicaciones, ética, evaluación, foro y práctica. Reafirme que IoT es la infraestructura que permite capturar datos del mundo físico, mientras que IA aporta métodos para interpretar esos datos y convertirlos en predicciones, clasificaciones, recomendaciones u optimizaciones. En agricultura inteligente, esto puede traducirse en riego predictivo, reducción de desperdicio de agua, alertas tempranas, detección de anomalías, mantenimiento de equipos, trazabilidad y mejor toma de decisiones. Pero también deben considerarse límites: calidad de los sensores, calibración, conectividad, sesgos, costos, mantenimiento, propiedad de datos y seguridad. Un sistema que decide mal puede ser perjudicial; uno que recolecta datos sin control puede vulnerar privacidad; uno que no se puede explicar puede generar desconfianza. Por eso, la competencia profesional no consiste solo en programar un dispositivo, sino en diseñar soluciones con sentido. Invite a los estudiantes a llevar esta mirada al foro. Una participación fuerte debe mostrar comprensión técnica y pensamiento crítico. Pueden usar la práctica como ejemplo: sensor, línea base, clasificación, acción y mejora. También pueden proyectar escenarios más avanzados: modelos predictivos, visión por computador, edge computing, dashboards, integración con clima y decisiones supervisadas. Cierre recordando que la IA no reemplaza automáticamente al criterio humano; debe amplificarlo con datos oportunos, confiables y pertinentes. Enfatice que en contextos productivos y sociales, la sostenibilidad y la privacidad no son obstáculos, sino criterios de calidad. Finalmente, agradezca la participación y abra paso al recordatorio institucional.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerden revisar en el aula virtual:

* Indicaciones completas del foro de discusión.
* Recursos de lectura de la semana.
* Roles de participación del equipo.
* Fechas de entrega y criterios de evaluación.
* Retroalimentaciones del docente.

También se invita a diligenciar la **Encuesta de Percepción Estudiantil**, como mecanismo institucional para fortalecer la calidad académica y mejorar continuamente la experiencia de aprendizaje.

<!--
Notas del presentador:
Realice este cierre institucional con tono claro y respetuoso. Recuerde que el foro de discusión es una actividad evaluativa y que su calificación se suma al proceso final. Indique que deben revisar cuidadosamente la consigna en el aula virtual, especialmente la pregunta orientadora y las preguntas específicas sobre agricultura inteligente. Recalque la importancia de la participación en equipo. Si el equipo tiene tres integrantes, deben distribuir aporte principal, retroalimentaciones y cierre de acuerdo con las instrucciones del aula. Si son cuatro o cinco, deben organizarse para que todos participen y nadie quede sin evidencia. Recomiende que el aporte principal no sea demasiado general. Debe presentar una propuesta clara de integración IoT e IA, mencionar sensores, datos, técnica de IA o ML, arquitectura y beneficios. Las retroalimentaciones deben ampliar o cuestionar constructivamente, no repetir. La conclusión debe sintetizar la discusión y proponer una postura final sobre eficiencia, sostenibilidad y responsabilidad. Recuerde que las lecturas sugeridas son parte de la base académica de la semana y pueden fortalecer los argumentos. Además, los estudiantes pueden investigar fuentes confiables complementarias, pero deben evitar copiar respuestas sin análisis propio. Después, invite a diligenciar la Encuesta de Percepción Estudiantil. Explique que este instrumento permite recoger opiniones sobre el desarrollo del curso, la metodología, los recursos, la claridad de las actividades y la experiencia de aprendizaje. No lo presente como un trámite, sino como una oportunidad de mejora continua. Agradezca la participación y destaque que las observaciones estudiantiles ayudan a fortalecer futuras sesiones. Finalice recordando fechas y disponibilidad para resolver inquietudes por los canales institucionales.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
**Internet de las cosas — Semana 7**
IA y aprendizaje automático aplicados a IoT

Próximo paso: participar en el foro con una propuesta argumentada, técnica y responsable sobre IoT e IA en agricultura inteligente.

<!--
Notas del presentador:
Use la diapositiva final para cerrar con brevedad y sentido académico. Agradezca a los estudiantes por su participación en la actividad de integración, en la práctica y en la socialización. Reitere que la semana se centra en comprender cómo IoT e IA se complementan. IoT permite capturar datos situados desde sensores y dispositivos conectados; IA permite encontrar patrones, anticipar comportamientos, clasificar situaciones, optimizar recursos y apoyar decisiones. Recuerde que la práctica en Wokwi fue una representación simplificada, pero útil para comprender inferencia local en el borde: se midieron variables, se construyó una referencia, se calculó un puntaje de anomalía y se activó una respuesta visual. Esa misma lógica puede escalarse a agricultura inteligente, mantenimiento predictivo, ciudades inteligentes, ciberseguridad o industria. Invite a que el foro no sea una respuesta improvisada, sino una construcción argumentada. El aporte debe mostrar dominio del tema y capacidad crítica. Sugiera que antes de escribir revisen las lecturas, sus apuntes, las ideas de la clase y los conceptos evaluables. También pueden apoyarse en la estructura problema-datos-modelo-arquitectura-impacto-riesgo. Cierre con una recomendación profesional: cuando diseñen soluciones IoT con IA, no comiencen por la tecnología, sino por el problema y por la decisión que desean mejorar. Después elijan sensores, datos, modelo, lugar de procesamiento, mecanismos de seguridad y criterios de validación. Reitere el recordatorio de la Encuesta de Percepción Estudiantil y despida la sesión de manera cordial. Mantenga los últimos segundos para confirmar si hay alguna inquietud urgente sobre el foro o la práctica, sin abrir una discusión extensa que exceda el tiempo planificado.
-->

