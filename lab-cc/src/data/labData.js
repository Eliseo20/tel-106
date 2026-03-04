export const LAB_DATA = [
    {
        id: "lab1",
        titulo: "Ley de Ohm y Kirchhoff",
        descripcion: "Estudio de la relación entre voltaje, corriente y resistencia en circuitos simples, verificando las leyes fundamentales de Kirchhoff.",
        videoUrl: "", // Pendiente aporte del usuario
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        objetivos: [
            "Verificar experimentalmente la Ley de Ohm.",
            "Comprobar las Leyes de Kirchhoff de voltajes (LKV) y corrientes (LKC).",
            "Medir magnitudes eléctricas básicas usando el multímetro."
        ],
        materiales: [
            "Multímetro Digital",
            "Fuente de Poder DC",
            "Protoboard",
            "Resistencias de diversos valores",
            "Cables de conexión"
        ],
        procedimiento: [
            "Armar el circuito serie según el diagrama proporcionado.",
            "Ajustar la fuente de tensión a 12V DC.",
            "Medir la corriente total circulante por el circuito.",
            "Medir la caída de tensión en cada una de las resistencias.",
            "Verificar que la suma de las tensiones sea igual a la tensión de la fuente."
        ]
    },
    {
        id: "lab2",
        titulo: "Análisis de Circuitos Serie-Paralelo",
        descripcion: "Cálculo y medición de circuitos mixtos, comprendiendo la distribución de potencia y reducción de redes resistivas.",
        videoUrl: "",
        thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000",
        objetivos: [
            "Calcular resistencias equivalentes en circuitos mixtos.",
            "Medir corrientes de rama y voltajes de nodo.",
            "Analizar el comportamiento de divisores de tensión y corriente."
        ],
        materiales: [
            "Multímetro Digital",
            "Fuente de Poder DC",
            "Protoboard",
            "Puentes de conexión",
            "Resistencias de carbón"
        ],
        procedimiento: [
            "Calcular teóricamente la resistencia equivalente del circuito mixto.",
            "Implementar el circuito en la protoboard.",
            "Contrastar los valores medidos con los teóricos calculados previamente.",
            "Realizar mediciones de corriente en los nodos de bifurcación."
        ]
    },
    {
        id: "lab3",
        titulo: "Teoremas de Redes (Thevenin y Norton)",
        descripcion: "Aplicación de teoremas de simplificación de redes para el análisis eficiente de circuitos complejos de corriente continua.",
        videoUrl: "",
        thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
        objetivos: [
            "Obtener el circuito equivalente de Thevenin de una red DC.",
            "Determinar la máxima transferencia de potencia a una carga.",
            "Validar el teorema de superposición en circuitos con múltiples fuentes."
        ],
        materiales: [
            "Vatímetro (opcional)",
            "Multímetros (2 unidades)",
            "Potenciómetro de precisión",
            "Caja de décadas de resistencia"
        ],
        procedimiento: [
            "Desconectar la resistencia de carga del circuito original.",
            "Medir el voltaje de circuito abierto (Vth) en los terminales.",
            "Medir la resistencia de corto circuito o equivalente (Rth).",
            "Construir el circuito equivalente y verificar comportamiento frente a la carga."
        ]
    }
];
