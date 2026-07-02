---
layout: slide-01-portada
---

::title::
Internet de las Cosas

::week::
Semana 6

::date::
Junio 08 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 6. Presentar la sesión como un espacio para comprender cómo el Internet de las Cosas evoluciona hacia escenarios industriales, donde sensores, máquinas, sistemas de control, datos y analítica se integran para mejorar la productividad, la eficiencia, la seguridad y la sostenibilidad de los procesos. Explicar que durante la clase se desarrollará una actividad de integración, una revisión conceptual, ejemplos aplicados, una relación directa con la evaluación de la semana y una práctica guiada en Wokwi usando ESP32 y MicroPython.
-->

---
layout: slide-02-titulo
---

::title::
Internet Industrial de las Cosas

<!--
Notas del presentador:
Introducir el título de la sesión destacando que el foco no será únicamente conectar dispositivos, sino comprender cómo la conexión industrial permite tomar mejores decisiones. El IIoT se estudia como una capa tecnológica que articula sensores, redes, plataformas, analítica, inteligencia artificial y sistemas de control para transformar datos de operación en acciones útiles.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Internet Industrial de las Cosas

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre fábrica inteligente e Internet Industrial de las Cosas" />

::content::
El **Internet Industrial de las Cosas** permite conectar activos físicos, sensores, máquinas, controladores y plataformas digitales para observar, analizar y optimizar procesos industriales.

En una fábrica inteligente, los datos dejan de ser registros aislados y se convierten en señales para mejorar decisiones, reducir fallos, controlar calidad y usar mejor la energía.

<!--
Notas del presentador:
Explicar que el IIoT surge cuando los principios del IoT se aplican a entornos industriales, donde la confiabilidad, la seguridad, la disponibilidad y la integración con sistemas existentes son más exigentes. Usar ejemplos cercanos: una máquina que reporta vibración anormal, una línea de producción que mide temperatura y humedad, o un sistema que ajusta automáticamente una condición operativa para evitar desperdicio.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Diagnóstico rápido

::left::
Respondan en una palabra o frase corta:

¿Qué dato debería monitorear una fábrica para evitar fallos, pérdidas o baja calidad?

Ejemplos posibles:

- Temperatura
- Vibración
- Consumo energético
- Presión
- Humedad
- Tiempo de parada
- Velocidad de producción

::right::
**Cierre**

1. Recoger respuestas en voz alta o chat.
2. Agruparlas en categorías: máquina, ambiente, energía, calidad y producción.
3. Preguntar: ¿qué decisión podría tomar la fábrica con ese dato?
4. Conectar las respuestas con monitoreo en tiempo real e IIoT.

Duración sugerida: **10 minutos**.

<!--
Notas del presentador:
Esta actividad busca activar saberes previos sin requerir herramientas adicionales. El punto central es que los estudiantes reconozcan que un dato industrial tiene valor cuando permite tomar una decisión. Por ejemplo, medir temperatura no es suficiente; lo importante es saber si esa temperatura indica riesgo, baja eficiencia, necesidad de mantenimiento o ajuste del proceso. Cerrar la actividad afirmando que el IIoT convierte datos operativos en decisiones técnicas y estratégicas.
-->

---
layout: slide-08-titulo-texto
---

::title::
De IoT a IIoT

::content::
El **IoT** conecta objetos cotidianos a internet para capturar datos, automatizar tareas y ofrecer servicios digitales.

El **IIoT** aplica esa misma lógica en ambientes industriales, pero con mayores exigencias de confiabilidad, seguridad, interoperabilidad, disponibilidad y respuesta en tiempo real.

La diferencia principal no está solo en el dispositivo conectado, sino en el impacto de la decisión: en IIoT una lectura incorrecta puede afectar producción, costos, seguridad o calidad.

<!--
Notas del presentador:
Explicar que IoT puede verse en dispositivos como relojes inteligentes, asistentes de hogar o sensores ambientales. En cambio, el IIoT aparece en plantas de producción, redes de energía, logística industrial, mantenimiento predictivo, petróleo y gas, agricultura de precisión o manufactura automatizada. La criticidad es mayor porque los sistemas operan de forma continua y los errores pueden generar pérdidas económicas, riesgos humanos o fallas de producción.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
IoT

::rightTitle::
IIoT

::left::
- Dispositivos de uso general.
- Automatización doméstica o comercial.
- Enfoque en comodidad, servicios y experiencia.
- Fallos con impacto limitado.
- Redes convencionales y plataformas de usuario.

::right::
- Equipos, sensores y máquinas industriales.
- Producción, mantenimiento, energía y calidad.
- Enfoque en eficiencia, seguridad y continuidad.
- Fallos con impacto operativo o económico.
- Redes industriales, protocolos robustos y sistemas críticos.

<!--
Notas del presentador:
Comparar ambos conceptos sin presentar el IIoT como algo totalmente separado del IoT. El IIoT es una especialización del IoT para escenarios industriales. Destacar que las industrias requieren sistemas escalables, seguros, auditables y capaces de comunicarse con maquinaria y plataformas ya existentes. Esta comparación prepara a los estudiantes para comprender por qué se habla de Ethernet industrial, OPC UA, redundancia, tolerancia a fallos y mantenimiento predictivo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender IIoT

::content::
**Sensor:** dispositivo que mide una variable física o ambiental.  
**Actuador:** componente que ejecuta una acción sobre el proceso.  
**Gateway:** equipo que conecta dispositivos industriales con redes o plataformas.  
**Edge computing:** procesamiento cercano a la máquina o sensor.  
**Plataforma IIoT:** sistema que recibe, almacena, analiza y visualiza datos.  
**Interoperabilidad:** capacidad de integrar equipos, marcas y sistemas distintos.  
**Monitoreo en tiempo real:** observación continua del estado operativo.  
**Mantenimiento predictivo:** uso de datos para anticipar fallos.  
**Gemelo digital:** representación virtual de un activo, proceso o sistema físico.

<!--
Notas del presentador:
Ampliar cada término con una explicación aplicada. En IIoT, el sensor es la puerta de entrada al dato: mide variables como temperatura, presión, vibración, corriente, humedad o velocidad. El actuador cierra el ciclo porque permite intervenir el proceso mediante motores, válvulas, relés, alarmas o sistemas de control. El gateway funciona como puente entre tecnologías industriales y plataformas digitales, especialmente cuando existen equipos antiguos o protocolos diferentes. El edge computing reduce la dependencia de la nube porque permite analizar datos cerca de la fuente, tomar decisiones rápidas y disminuir latencia. La plataforma IIoT integra almacenamiento, visualización, reglas, alertas y analítica. La interoperabilidad es fundamental porque una planta suele tener máquinas de diferentes fabricantes y generaciones. El monitoreo en tiempo real permite identificar desviaciones antes de que se conviertan en fallas. El mantenimiento predictivo cambia la lógica de reparar después del daño por una lógica preventiva basada en patrones. Finalmente, el gemelo digital permite experimentar y analizar escenarios sin detener la operación real.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Arquitectura básica de un sistema IIoT

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre arquitectura por capas de IIoT" />

::content::
Una solución IIoT suele organizarse en capas:

- **Capa física:** sensores, actuadores, máquinas y controladores.
- **Capa de conectividad:** redes industriales y protocolos de comunicación.
- **Capa de procesamiento:** edge, gateway, nube o servidor local.
- **Capa de aplicación:** dashboards, alertas, analítica, IA y reportes.
- **Capa de decisión:** acciones humanas o automáticas sobre el proceso.

<!--
Notas del presentador:
Explicar que esta arquitectura permite comprender cómo viaja el dato desde una máquina hasta una decisión. Por ejemplo, un sensor detecta vibración, el ESP32 o un controlador captura la lectura, la red envía el dato, la plataforma lo analiza, el dashboard lo muestra y una regla genera una alerta. En un sistema más avanzado, un algoritmo puede anticipar una falla y programar mantenimiento antes de que la máquina se detenga.
-->

---
layout: slide-08-titulo-texto
---

::title::
Tecnologías frecuentes en IIoT

::content::
En entornos industriales se combinan varias tecnologías:

- Sensores industriales de temperatura, vibración, presión, flujo, corriente y proximidad.
- Controladores como PLC, microcontroladores, gateways y computadores industriales.
- Redes industriales Ethernet, Wi-Fi industrial, LoRaWAN, 4G, 5G o redes cableadas.
- Protocolos como MQTT, Modbus, OPC UA, HTTP industrial y buses de campo.
- Plataformas de datos, dashboards, sistemas SCADA, MES, ERP y analítica avanzada.

<!--
Notas del presentador:
Aclarar que no todas las soluciones IIoT usan las mismas tecnologías. La selección depende del tipo de industria, distancia, seguridad, criticidad, presupuesto y sistemas existentes. En una planta de manufactura puede ser común Ethernet industrial por su estabilidad y velocidad; en monitoreo remoto agrícola o energético pueden usarse redes inalámbricas de largo alcance. En todos los casos, el objetivo es capturar datos confiables y usarlos para mejorar la operación.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Beneficios industriales del IIoT

::left::
**Operación y producción**

- Supervisión continua.
- Identificación de cuellos de botella.
- Optimización de procesos.
- Reducción de tiempos muertos.
- Ajustes automáticos o semiautomáticos.
- Mayor trazabilidad.

::right::
**Gestión y sostenibilidad**

- Menor consumo energético.
- Reducción de costos operativos.
- Mejor mantenimiento.
- Mayor calidad del producto.
- Decisiones basadas en datos.
- Innovación en servicios industriales.

<!--
Notas del presentador:
Relacionar estos beneficios con la evaluación de la semana. Señalar que el IIoT aporta valor porque permite ver lo que antes estaba oculto o se revisaba demasiado tarde. Una empresa puede detectar que una máquina consume más energía de lo normal, que un motor vibra fuera del rango esperado o que una línea genera defectos bajo ciertas condiciones ambientales. Con esos datos puede actuar antes, reducir costos y mejorar calidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
IA y aprendizaje automático en IIoT

::content::
La inteligencia artificial permite analizar grandes volúmenes de datos industriales para identificar patrones, anomalías y tendencias.

En IIoT, los algoritmos de aprendizaje automático pueden apoyar:

- Predicción de fallos.
- Detección de anomalías.
- Optimización de consumo energético.
- Control de calidad.
- Clasificación de eventos.
- Recomendaciones para operación y mantenimiento.

<!--
Notas del presentador:
Explicar que la IA no reemplaza automáticamente al operador o al ingeniero, sino que amplía su capacidad de análisis. En una planta industrial, los sensores pueden producir miles de datos por minuto. El aprendizaje automático ayuda a encontrar relaciones que no siempre son evidentes, como combinaciones de temperatura, vibración y consumo que anticipan un fallo. Conectar esta idea con la pregunta de evaluación sobre algoritmos de aprendizaje automático para análisis de datos y toma de decisiones en tiempo real.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Redes industriales y comunicación

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre redes industriales Ethernet y comunicación de máquinas" />

::content::
En fábricas inteligentes se requieren redes rápidas, estables y seguras.

Las **redes industriales Ethernet** son comunes porque permiten conectar controladores, máquinas, sensores, gateways y sistemas de supervisión con baja latencia y alta confiabilidad.

La red no solo transporta datos: sostiene la continuidad de la operación.

<!--
Notas del presentador:
Explicar que una red doméstica no siempre cumple las condiciones de un ambiente industrial. En una fábrica puede haber ruido eléctrico, largas distancias, maquinaria pesada, necesidades de respuesta rápida y requerimientos de disponibilidad. Por eso se usan tecnologías industriales, cableado protegido, segmentación, redundancia y protocolos diseñados para escenarios exigentes. Conectar esta diapositiva con la pregunta de evaluación sobre el tipo de red comúnmente usada en fábricas inteligentes.
-->

---
layout: slide-08-titulo-texto
---

::title::
Interoperabilidad y estándares abiertos

::content::
La interoperabilidad permite integrar dispositivos, sistemas y plataformas de distintos fabricantes.

En IIoT, los estándares abiertos y protocolos compatibles facilitan que una planta pueda crecer sin depender completamente de una tecnología cerrada.

Un estándar relevante en entornos industriales es **OPC UA**, usado para favorecer comunicación estructurada, segura e interoperable entre sistemas industriales.

<!--
Notas del presentador:
Enfatizar que muchas empresas no inician desde cero. Ya tienen maquinaria, PLC, SCADA, bases de datos, sistemas de mantenimiento o plataformas administrativas. Por eso, una solución IIoT debe poder integrarse con lo existente. Explicar que depender únicamente de tecnologías propietarias puede limitar el crecimiento, elevar costos y dificultar la integración futura. OPC UA es importante porque permite representar información industrial de manera organizada y facilitar la comunicación entre equipos y sistemas.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Disponibilidad, redundancia y tolerancia a fallos

::left::
**Disponibilidad**

Capacidad del sistema para mantenerse operativo cuando la industria lo necesita.

En producción, una interrupción puede afectar tiempos, costos, entregas, seguridad y calidad.

::right::
**Redundancia y tolerancia**

La redundancia permite tener componentes alternos.

La tolerancia a fallos permite que el sistema continúe funcionando o se recupere de manera controlada ante una falla.

<!--
Notas del presentador:
Explicar que en IIoT no basta con que el sistema funcione una vez. Debe funcionar de forma continua y confiable. La redundancia puede aplicarse en redes, servidores, fuentes de alimentación, sensores críticos o rutas de comunicación. La tolerancia a fallos busca evitar que un único error detenga toda la operación. Conectar esta explicación con la pregunta de evaluación sobre implementación de redundancia y tolerancia a fallos como medida esencial para continuidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Gemelo digital en IIoT

::content::
Un **gemelo digital** es una representación virtual de un activo, proceso o sistema físico.

Permite:

- Visualizar el estado de una máquina o proceso.
- Simular escenarios sin afectar la operación real.
- Analizar desempeño.
- Probar ajustes.
- Anticipar fallos.
- Mejorar decisiones de mantenimiento y producción.

<!--
Notas del presentador:
Presentar el gemelo digital como una idea poderosa pero comprensible: es un modelo virtual que se alimenta de datos del mundo físico. No se trata de duplicar físicamente una máquina, sino de representarla digitalmente para analizar su comportamiento. Puede usarse para simular qué pasaría si aumenta la temperatura, cambia la velocidad de producción, se reduce el mantenimiento o se modifica un parámetro de operación. Conectar con la pregunta de evaluación correspondiente.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Mantenimiento predictivo

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre mantenimiento predictivo en máquinas industriales" />

::content::
Una máquina industrial reporta vibración, temperatura y consumo eléctrico.

El sistema IIoT analiza las señales y detecta que el patrón se aleja del comportamiento normal.

Antes de que ocurra una falla, se genera una alerta para programar mantenimiento y evitar tiempo de inactividad.

<!--
Notas del presentador:
Usar este ejemplo para explicar la diferencia entre mantenimiento reactivo, preventivo y predictivo. El reactivo ocurre después del daño; el preventivo se programa por tiempo o uso; el predictivo se basa en datos reales del comportamiento del activo. El IIoT permite capturar los datos y la analítica permite interpretarlos. El resultado esperado es reducir paradas no planificadas, mejorar seguridad y optimizar costos de mantenimiento.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Gestión energética [Ejm]

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre eficiencia energética industrial basada en IIoT" />

::content::
Una planta mide consumo energético por línea, turno y máquina.

Con IIoT puede identificar equipos de alto consumo, horarios críticos y oportunidades de ahorro.

La gestión energética basada en datos permite reducir consumo, costos operativos y huella ambiental.

<!--
Notas del presentador:
Conectar el ejemplo con sostenibilidad. Explicar que la eficiencia energética no depende únicamente de apagar equipos, sino de comprender cómo, cuándo y dónde se consume energía. Un sistema IIoT puede mostrar que una máquina consume demasiado durante arranques, que un compresor opera fuera de rango o que un proceso podría redistribuirse para reducir picos de consumo. Esto se relaciona con reducción de costos y responsabilidad ambiental.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ideas clave para resolver la actividad:

::content::

- IIoT optimiza procesos de producción y reduce costos.
- La IA aplicada al IIoT usa aprendizaje automático para analizar datos.
- La escalabilidad se apoya en arquitecturas modulares y flexibles.
- La continuidad requiere redundancia y tolerancia a fallos.
- En fábricas inteligentes se usan redes industriales Ethernet.
- La integración se facilita con estándares abiertos y protocolos compatibles.
- La calidad mejora mediante monitoreo y ajuste en tiempo real.
- La energía se gestiona reduciendo consumo y costos.
- El gemelo digital representa virtualmente un activo o proceso.
- OPC UA favorece interoperabilidad industrial.

<!--
Notas del presentador:
Aclarar que esta diapositiva no busca memorizar respuestas, sino reconocer el concepto que hay detrás de cada pregunta. Invitar a los estudiantes a leer cada enunciado identificando palabras clave: eficiencia, IA, escalabilidad, continuidad, red industrial, interoperabilidad, calidad, energía, gemelo digital y estándar de comunicación. Reforzar que las opciones incorrectas suelen contradecir el propósito del IIoT, por ejemplo aumentar inactividad, reducir calidad o depender de tecnologías cerradas.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
MQTT explicado en menos de dos minutos

::media::
<iframe src="https://www.youtube.com/embed/JwxQqcb8R7w" allowfullscreen></iframe>

<!--
Notas del presentador:
Usar este video como refuerzo breve sobre comunicación entre dispositivos. MQTT es un protocolo frecuente en soluciones IoT e IIoT por su enfoque ligero y basado en publicación y suscripción. Antes de reproducirlo, pedir a los estudiantes identificar tres palabras clave: dispositivo, mensaje y comunicación. Después del video, conectar MQTT con el envío de lecturas desde sensores hacia plataformas o dashboards.
-->

---
layout: slide-02-titulo
---

::title::
Mini sistema IIoT

<!--
Notas del presentador:
Presentar la práctica como una simulación sencilla de supervisión industrial. No se busca construir una planta real, sino modelar una lógica básica de monitoreo: capturar variables, compararlas con umbrales, generar alertas y producir una salida visual y sonora. La práctica usa ESP32, MicroPython y componentes simulados para facilitar la participación de todos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Mini sistema IIoT de monitoreo ambiental y condición de máquina.

::content::

**Propósito:** simular un sistema que lee temperatura, humedad y nivel de vibración, clasifica el estado operativo y activa señales de alerta.

**Idea industrial:** una máquina puede requerir atención si aumenta su temperatura o si aparece una vibración anormal.

**Herramienta:** Wokwi con ESP32 y MicroPython.

<!--
Notas del presentador:
Explicar que la temperatura y la vibración se usan como variables representativas. En una planta real, la vibración puede indicar desbalance, desgaste, mala alineación o fallo mecánico. En la simulación, el potenciómetro representará un nivel de vibración. El DHT22 representará condiciones ambientales. Los LED y el buzzer representarán señales visuales y sonoras del sistema.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes y conexiones sugeridas

::left::
**Componentes en Wokwi**

- ESP32 DevKit.
- Sensor DHT22.
- Potenciómetro.
- LED verde.
- LED rojo.
- Buzzer.
- Resistencias para LED.
- Monitor serial.

::right::
**Conexiones sugeridas**

- DHT22 DATA → GPIO 15.
- DHT22 VCC → 3V3.
- DHT22 GND → GND.
- Potenciómetro SIG → GPIO 34.
- LED verde → GPIO 2.
- LED rojo → GPIO 4.
- Buzzer → GPIO 5.
- GND común para todos los componentes.

<!--
Notas del presentador:
Revisar que los estudiantes conecten correctamente alimentación y tierra común. Aclarar que el GPIO 34 del ESP32 funciona como entrada analógica y es apropiado para leer el potenciómetro. Recordar que los LED deben conectarse con resistencia para proteger el circuito. En Wokwi, el DHT22 permite simular valores de temperatura y humedad, mientras que el potenciómetro permite variar manualmente el valor que representará vibración.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::
```python {lines:true}
# Mini sistema IIoT con ESP32 en Wokwi
# Lee temperatura, humedad y vibración simulada.
# Clasifica el estado de la máquina y activa alertas.

from machine import Pin, ADC, PWM
from time import sleep
import dht

# -----------------------------
# Configuración de componentes
# -----------------------------

sensor_dht = dht.DHT22(Pin(15))

pot_vibracion = ADC(Pin(34))
pot_vibracion.atten(ADC.ATTN_11DB)
pot_vibracion.width(ADC.WIDTH_12BIT)

led_verde = Pin(2, Pin.OUT)
led_rojo = Pin(4, Pin.OUT)

buzzer = PWM(Pin(5))
buzzer.duty(0)

# -----------------------------
# Umbrales de operación
# -----------------------------

TEMP_ALERTA = 35.0
HUM_ALERTA = 80.0
VIB_ALERTA = 70.0

# -----------------------------
# Funciones auxiliares
# -----------------------------

def activar_buzzer(frecuencia=1200, duracion=0.2):
    buzzer.freq(frecuencia)
    buzzer.duty(512)
    sleep(duracion)
    buzzer.duty(0)

def clasificar_estado(temp, hum, vibracion):
    if temp >= TEMP_ALERTA or hum >= HUM_ALERTA or vibracion >= VIB_ALERTA:
        return "ALERTA"
    elif temp >= 30 or vibracion >= 50:
        return "PRECAUCION"
    else:
        return "NORMAL"

def mostrar_estado(temp, hum, vibracion, estado):
    print("----------------------------------")
    print("Sistema IIoT - Monitoreo industrial")
    print("Temperatura:", temp, "°C")
    print("Humedad:", hum, "%")
    print("Vibración simulada:", vibracion, "%")
    print("Estado:", estado)

# -----------------------------
# Ciclo principal
# -----------------------------

while True:
    try:
        sensor_dht.measure()
        temperatura = sensor_dht.temperature()
        humedad = sensor_dht.humidity()

        lectura_adc = pot_vibracion.read()
        vibracion = round((lectura_adc / 4095) * 100, 1)

        estado = clasificar_estado(temperatura, humedad, vibracion)
        mostrar_estado(temperatura, humedad, vibracion, estado)

        if estado == "NORMAL":
            led_verde.on()
            led_rojo.off()
            buzzer.duty(0)

        elif estado == "PRECAUCION":
            led_verde.on()
            led_rojo.on()
            activar_buzzer(800, 0.1)

        else:
            led_verde.off()
            led_rojo.on()
            activar_buzzer(1500, 0.3)

        sleep(2)

    except Exception as error:
        print("Error de lectura:", error)
        led_verde.off()
        led_rojo.on()
        activar_buzzer(500, 0.2)
        sleep(2)
```

<!--
Notas del presentador:
Guiar la lectura del código por bloques. Primero, revisar importaciones y configuración de pines. Luego explicar los umbrales: temperatura, humedad y vibración. Después, mostrar cómo la función clasificar_estado convierte datos en una decisión. Este es el punto central de la práctica: el IIoT no termina en la captura del dato, sino en la interpretación del estado operativo. Finalmente, explicar que los LED y el buzzer simulan señales de operación normal, precaución o alerta.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Wokwi

::content::
1. Crear un nuevo proyecto con **ESP32** y **MicroPython**.
2. Agregar DHT22, potenciómetro, LED verde, LED rojo y buzzer.
3. Realizar las conexiones sugeridas.
4. Copiar el código completo en `main.py`.
5. Ejecutar la simulación.
6. Abrir el monitor serial.
7. Cambiar temperatura y humedad en el DHT22.
8. Girar el potenciómetro para simular vibración.
9. Observar cambios de estado: **NORMAL**, **PRECAUCIÓN** y **ALERTA**.

<!--
Notas del presentador:
Acompañar a los estudiantes paso a paso. Recomendar que primero ejecuten el circuito sin modificar umbrales para verificar funcionamiento. Luego pedirles que cambien los valores simulados y observen el monitor serial. Si aparece error de lectura, revisar el pin del DHT22, alimentación y tierra. Enfatizar que Wokwi permite experimentar sin riesgo de dañar componentes físicos, lo cual resulta útil para prototipar soluciones educativas e industriales.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y análisis

::left::
**Producto esperado**

Una simulación funcional donde el ESP32:

- Lee variables del entorno.
- Calcula vibración simulada.
- Clasifica el estado operativo.
- Muestra datos en monitor serial.
- Activa LED y buzzer según el riesgo.

::right::
**Preguntas de análisis**

- ¿Qué variable generó más alertas?
- ¿Qué pasaría si los umbrales son demasiado bajos?
- ¿Qué componente representa el sensor industrial?
- ¿Cómo se podría enviar esta información a una plataforma IIoT?
- ¿Qué decisión podría tomar un operario con estos datos?

<!--
Notas del presentador:
Explicar que el producto esperado no es solo el circuito funcionando, sino la interpretación del comportamiento del sistema. Invitar a los estudiantes a pensar cómo esta lógica se podría ampliar con MQTT, una base de datos, un dashboard o una plataforma como ThingsBoard. Las preguntas de análisis buscan que el estudiante relacione la práctica con decisiones reales: detener una máquina, enviar una alerta, programar mantenimiento o ajustar parámetros de producción.
-->

---
layout: slide-08-titulo-texto
---

::title::
Extensiones posibles de la práctica

::content::
La simulación puede crecer hacia un sistema IIoT más completo si se agregan:

- Envío de datos por MQTT.
- Dashboard en una plataforma IoT.
- Registro histórico de lecturas.
- Alertas por correo o mensajería.
- Control de actuadores.
- Umbrales configurables.
- Modelo simple de mantenimiento predictivo.
- Representación tipo gemelo digital.

<!--
Notas del presentador:
Presentar estas extensiones como rutas de profundización. El proyecto actual es deliberadamente sencillo para que todos puedan implementarlo en la sesión. Sin embargo, el mismo principio puede ampliarse hacia una arquitectura real: capturar datos, transmitirlos, almacenarlos, visualizarlos, analizarlos y generar acciones. Conectar con la idea de escalabilidad y arquitectura modular vista en la evaluación.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
**Compartan en máximo un minuto:**

- Qué estado logró generar la simulación.
- Qué variable modificaron.
- Qué decisión industrial se podría tomar.
- Qué mejora agregarían al sistema.

::right::
**Lo más importante:**

- Monitoreo en tiempo real.
- Optimización de procesos.
- Calidad y mantenimiento.
- Reducción de costos.
- Gestión energética.
- Interoperabilidad y escalabilidad.

<!--
Notas del presentador:
La socialización debe ser breve y enfocada. Seleccionar dos o tres participaciones para mantener el tiempo. Evitar que se convierta en una revisión técnica extensa. El propósito es que los estudiantes expliquen con sus palabras cómo un prototipo básico representa una lógica industrial. Cerrar la socialización destacando que incluso una simulación sencilla permite comprender el ciclo dato-decisión-acción.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::
- ¿Qué diferencia práctica existe entre IoT e IIoT?
- ¿Por qué la interoperabilidad es crítica en la industria?
- ¿Cómo se relacionan IA, datos y mantenimiento predictivo?
- ¿Qué papel cumplen la redundancia y la tolerancia a fallos?
- ¿Cómo podría convertirse la práctica en un sistema conectado real?

<!--
Notas del presentador:
Gestionar las dudas priorizando las que afecten la comprensión general de la semana y la evaluación. Si surgen inquietudes técnicas muy específicas, responder de forma breve y proponer que se profundicen en espacios de acompañamiento. Reforzar las ideas nucleares: IIoT conecta activos industriales, captura datos, analiza condiciones, mejora decisiones y favorece eficiencia, calidad, seguridad y sostenibilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Para recordar...

::content::
El IIoT permite que los procesos industriales sean más visibles, medibles y adaptables.

Su valor no está únicamente en conectar sensores, sino en transformar datos en decisiones para:

- Optimizar producción.
- Reducir costos.
- Mejorar calidad.
- Anticipar fallos.
- Gestionar energía.
- Integrar sistemas.
- Impulsar innovación sostenible.

<!--
Notas del presentador:
Cerrar retomando el tema central de la semana. Señalar que el IIoT es una base tecnológica para la industria 4.0 porque articula conectividad, datos, automatización, analítica e inteligencia artificial. Invitar a los estudiantes a pensar en sectores donde podrían aplicar estos conceptos: manufactura, alimentos, salud, energía, transporte, agricultura, logística o ciudades inteligentes. Reafirmar que la sostenibilidad también depende de medir y optimizar procesos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Antes de finalizar:
::content::

- Revisar los recursos y orientaciones de la semana 6 en el aula virtual.
- Presentar la evaluación correspondiente dentro de los tiempos definidos.
- Participar en los espacios de acompañamiento disponibles.
- Diligenciar la **Encuesta de Percepción Estudiantil** cuando se encuentre habilitada.

Su retroalimentación contribuye al mejoramiento continuo del curso.

<!--
Notas del presentador:
Hacer el recordatorio de manera clara y cordial. Indicar que la encuesta de percepción estudiantil es importante porque permite identificar fortalezas y oportunidades de mejora en el proceso académico. Recordar también que la evaluación de la semana se relaciona directamente con los conceptos trabajados: beneficios del IIoT, IA, escalabilidad, redes industriales, calidad, energía, gemelo digital y OPC UA.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Internet Industrial de las Cosas  
Datos, máquinas y decisiones para una industria más eficiente, conectada y sostenible.

<!--
Notas del presentador:
Agradecer la asistencia y participación. Invitar a los estudiantes a continuar explorando Wokwi y a pensar cómo los sistemas de monitoreo pueden aplicarse a problemas reales de su entorno. Cerrar con una idea fuerza: en IIoT, cada dato tiene sentido cuando ayuda a comprender, anticipar o mejorar una operación.
-->

<!--
Fuentes consultadas para apoyar la curaduría y actualización conceptual:
IIoT, monitoreo, eficiencia y mantenimiento predictivo: citeturn908664search1turn908664search4turn908664search12
Ejemplos Wokwi con ESP32, MicroPython y DHT22: citeturn908664search2turn908664search5
Video MQTT identificado en YouTube: citeturn908664search3
-->
