export interface Problema {
  icon: string
  title: string
  description: string
}

export interface Programa {
  icon: string
  title: string
  description: string
}

export interface Resultado {
  tag: string
  title: string
  stats: { value: string; description: string }[]
  badge: string
}

export interface Testimonio {
  emoji: string
  text: string
  name: string
  program: string
}

export interface Perfil {
  id: 'rap' | 'kids' | 'fit'
  color: string
  colorRgb: string
  label: string
  emoji: string
  medico: string
  medicoRole: string
  heroBadge: string
  heroH1: string
  heroSub: string
  stats: { num: string; label: string }[]
  probTag: string
  probH2: string
  probSub: string
  problemas: Problema[]
  progTag: string
  progH2: string
  progSub: string
  programa: Programa[]
  resSub: string
  resultados: Resultado[]
  testimonios: Testimonio[]
  ctaBadge: string
  ctaH2: string
  ctaSub: string
}

export const PERFILES: Record<string, Perfil> = {
  rap: {
    id: 'rap',
    color: '#be185d',
    colorRgb: '190,24,93',
    label: 'MamaRAP',
    emoji: '🤱',
    medico: 'Dr. Juan Pablo',
    medicoRole: 'Nutriólogo · Postparto & Core',
    heroBadge: 'MamaRAP · Postparto',
    heroH1: 'Tu cuerpo postparto merece un <span>plan médico real</span>',
    heroSub: 'El 78% de las mamás que tuvieron parto o cesárea nunca reciben rehabilitación de su core. La diástasis, el dolor de espalda y la barriga persistente tienen solución — con protocolo médico.',
    stats: [
      { num: '6sem', label: 'promedio para cerrar diástasis' },
      { num: '500+', label: 'mamás activas en el programa' },
      { num: '98%', label: 'reportan mejora en 90 días' },
    ],
    probTag: 'Lo que vives sin un protocolo postparto',
    probH2: 'Lo que <span>nadie te dijo</span> después del parto',
    probSub: 'Te dieron el alta pero nadie te enseñó a recuperar tu core. Eso tiene consecuencias reales que pueden durar años.',
    problemas: [
      { icon: '🫁', title: 'Diástasis sin tratar', description: 'La separación de rectos abdominales que no se trata a tiempo genera dolor lumbar crónico, incontinencia y barriga persistente que ni la dieta ni el ejercicio eliminan.' },
      { icon: '⚠️', title: 'Faja como solución', description: 'El 73% de las mamás usa faja. Pero la faja atrofia el core, aumenta la presión hacia el suelo pélvico y empeora la diástasis a largo plazo.' },
      { icon: '📉', title: 'Dieta hipocalórica en lactancia', description: 'Restringir calorías mientras se amamanta reduce la producción de leche, eleva el cortisol y hace que el cuerpo pierda músculo en lugar de grasa.' },
      { icon: '😴', title: 'Cortisol crónico sin manejo', description: 'El insomnio del postparto dispara el cortisol. Sin un protocolo de manejo, el cortisol alto frena la pérdida de grasa y destruye tejido muscular — aunque comas bien.' },
    ],
    progTag: 'Protocolo MamaRAP',
    progH2: 'Reconexión, cierre y <span>fuerza funcional</span>',
    progSub: 'Tres fases diseñadas por el Dr. Juan Pablo para cada etapa del postparto — semana 1 a mes 6.',
    programa: [
      { icon: '🌿', title: 'Fase 1 · Reconexión (sem 1-4)', description: 'Respiración diafragmática, activación del transverso y alimentación antiinflamatoria. Bajamos el cortisol y preparamos el cuerpo para moverse.' },
      { icon: '🩻', title: 'Fase 2 · Cierre Estructural (sem 4-10)', description: 'Aproximación de rectos, trabajo de presión intraabdominal y activación de suelo pélvico. Cerramos la diástasis desde adentro.' },
      { icon: '💪', title: 'Fase 3 · Fuerza Funcional (mes 3+)', description: 'Vuelta al movimiento con carga progresiva. Cadena posterior, glúteos y core integrado. Recomposición corporal real sin riesgo de prolapso.' },
    ],
    resSub: 'Resultados verificados de mamás postparto que completaron el protocolo MamaRAP con el Dr. Juan Pablo.',
    resultados: [
      { tag: 'Diástasis · Ibagué', title: 'Mamá, 3 meses postparto', stats: [{ value: '+340%', description: 'mejora en medición de apertura abdominal en 8 semanas' }, { value: '8cm', description: 'reducción de perímetro abdominal en 3 meses' }], badge: 'Programa completo' },
      { tag: 'Postparto · Bogotá', title: 'Mamá de gemelos, parto vaginal', stats: [{ value: '12kg', description: 'pérdida de grasa manteniendo masa muscular en 4 meses' }], badge: 'Consulta + App' },
      { tag: 'Cesárea · Medellín', title: 'Segunda cesárea, diástasis severa', stats: [{ value: '6sem', description: 'para cerrar diástasis grado 3 con protocolo' }], badge: 'Protocolo intensivo' },
    ],
    testimonios: [
      { emoji: '🤱', text: '"Llevaba 8 meses con la barriga de 5 meses. En 6 semanas con MamaRAP bajé 6 centímetros. El Dr. JP me explicó por fin qué estaba pasando en mi cuerpo."', name: 'María F.', program: 'MamaRAP · 6 semanas' },
      { emoji: '🌸', text: '"Nunca imaginé que la respiración fuera clave para cerrar la diástasis. Es contraintuitivo pero funciona. La app me ayudó a ser constante."', name: 'Valentina C.', program: 'MamaRAP · 3 meses' },
      { emoji: '💪', text: '"Lo que más me sorprendió es que el plan nutricional de lactancia me ayudó a bajar de peso sin perder leche. Eso no lo conseguí con ninguna dieta."', name: 'Juliana M.', program: 'MamaRAP · Fase 1 y 2' },
    ],
    ctaBadge: '¿Lista para empezar?',
    ctaH2: 'Tu cuerpo lleva meses <span>esperando este programa.</span>',
    ctaSub: 'Quedan 4 cupos disponibles para el programa MamaRAP. Los médicos atienden de forma personalizada y el grupo es pequeño por diseño.',
  },
  kids: {
    id: 'kids',
    color: '#0ea5e9',
    colorRgb: '14,165,233',
    label: 'Kids & Loncheras',
    emoji: '🦸‍♀️',
    medico: 'Dr. Pecue',
    medicoRole: 'Pediatría Integral · Nutrición Infantil',
    heroBadge: 'Kids & Loncheras · Nutrición Infantil',
    heroH1: 'El cerebro de tu hijo funciona con <span>las grasas correctas</span>',
    heroSub: 'El 68% de los niños en Colombia lleva loncheras con más de 30g de azúcar. Eso no es energía — es un pico de insulina que apaga la concentración antes de la primera clase.',
    stats: [
      { num: '3sem', label: 'para ver mejora en concentración' },
      { num: '92%', label: 'de padres reportan cambios desde semana 2' },
      { num: '5min', label: 'al día para una lonchera que cambia todo' },
    ],
    probTag: 'La realidad de la nutrición infantil hoy',
    probH2: 'Lo que <span>le estás dando</span> a tu hijo sin saberlo',
    probSub: 'Las loncheras "saludables" del supermercado están destruyendo la concentración de tu hijo. Los números son claros.',
    problemas: [
      { icon: '🧃', title: 'El jugo de naranja es peor que la soda', description: 'Un vaso de jugo de naranja tiene 26g de azúcar libre. La fibra ya no está. Es insulina disparada directamente al cerebro de tu hijo.' },
      { icon: '📦', title: 'Ultraprocesados en la lonchera', description: 'El 80% de las loncheras que envían los padres contiene al menos un ultraprocesado. Los aditivos y conservantes interfieren con la microbiota y la absorción de nutrientes.' },
      { icon: '📉', title: 'Bajo rendimiento escolar por glucosa', description: 'El crash de insulina 30 minutos después del recreo hace que tu hijo no pueda concentrarse en las clases de la tarde. No es flojera — es bioquímica.' },
      { icon: '🦷', title: 'Caries como señal de inflamación', description: 'El niño con caries frecuentes tiene inflamación sistémica. La nutrición infantil no es solo de dientes — afecta el desarrollo cerebral, inmunidad y comportamiento.' },
    ],
    progTag: 'Módulos Kids & Loncheras',
    progH2: 'Del desayuno al cerebro: <span>la ciencia de nutrir bien</span>',
    progSub: 'Tres módulos prácticos diseñados por el Dr. Pecue para que la nutrición infantil funcione en la vida real.',
    programa: [
      { icon: '🥑', title: 'Módulo 1 · La Lonchera Perfecta', description: 'Qué poner, en qué cantidad y por qué. Grasas para el cerebro + proteína para la concentración + snack antiinflamatorio que tu hijo querrá comer.' },
      { icon: '🧠', title: 'Módulo 2 · Creatividad en 10 min', description: 'Prep-cooking dominical, texturas variadas y técnicas para que el niño coma sin drama. El Dr. Pecue enseña la psicología detrás del "no quiero comer".' },
      { icon: '🌱', title: 'Módulo 3 · Psicología en la Mesa', description: 'Autonomía controlada, presión social escolar y manejo de alergias. Tu hijo tiene derecho a disfrutar la comida — y tú a no sufrir con cada lonchera.' },
    ],
    resSub: 'Resultados de niños 4-14 años cuyos padres implementaron el protocolo Kids & Loncheras del Dr. Pecue.',
    resultados: [
      { tag: 'Pediatría · Bogotá', title: 'Niño 7 años, bajo rendimiento', stats: [{ value: '+2.3', description: 'puntos de promedio escolar en 6 semanas' }, { value: '0', description: 'loncheras devueltas en el colegio después del mes 1' }], badge: 'Protocolo Dr. Pecue' },
      { tag: 'Nutrición Infantil · Cali', title: 'Niña 9 años, caries frecuentes', stats: [{ value: '68%', description: 'reducción de azúcares en lonchera' }, { value: '12sem', description: 'sin visita al odontólogo por emergencia' }], badge: 'Lonchera inteligente' },
      { tag: 'Kids · Medellín', title: 'Gemelos 5 años, alimentación selectiva', stats: [{ value: '8', description: 'alimentos nuevos aceptados en el mes 1' }, { value: '3', description: 'semanas para cambiar el patrón de "no quiero"' }], badge: 'Psicología alimentaria' },
    ],
    testimonios: [
      { emoji: '🦸‍♀️', text: '"Mi hijo mejoró su concentración desde la semana 2. El Dr. Pecue explica todo de forma tan práctica que en casa ya lo entendemos todos."', name: 'Ana R.', program: 'Kids & Loncheras · mes 2' },
      { emoji: '🌟', text: '"Mandaba jugo de fruta pensando que era sano. Cuando vi los datos de azúcar que le estaba dando a mi hija, cambié todo en 3 días."', name: 'Carolina L.', program: 'Kids & Loncheras · semana 3' },
      { emoji: '🍎', text: '"Lo que más valoro es que mi hijo ahora pide su lonchera él mismo. Ya sabe qué le da energía para el colegio y qué no."', name: 'Camilo V.', program: 'Kids & Loncheras · 4 meses' },
    ],
    ctaBadge: '¿Lista para el cambio?',
    ctaH2: 'Tu hijo tiene <span>derecho a comer bien.</span>',
    ctaSub: 'Quedan 4 cupos en el programa Kids & Loncheras. El Dr. Pecue atiende a los niños de forma directa — no por teléfono, con protocolo real.',
  },
  fit: {
    id: 'fit',
    color: '#ea580c',
    colorRgb: '234,88,12',
    label: 'Cuchos Fit',
    emoji: '💪',
    medico: 'Dr. Juan Pablo',
    medicoRole: 'Nutriólogo · Metabolismo & Deporte 35+',
    heroBadge: 'Cuchos Fit · Metabolismo 35+',
    heroH1: 'Tu metabolismo cambió pero nadie te dijo <span>por qué ni qué hacer</span>',
    heroSub: 'Después de los 35, el cuerpo juega con reglas diferentes. Más cortisol, menos testosterona, más resistencia a la insulina. Sin un protocolo médico, el cardio y la dieta tradicional empeoran todo.',
    stats: [
      { num: '35%', label: 'más eficiencia metabólica con el protocolo' },
      { num: '4.2x', label: 'más masa muscular que con solo dieta' },
      { num: '8sem', label: 'para revertir resistencia a la insulina' },
    ],
    probTag: 'El problema real después de los 35',
    probH2: 'No es fuerza de voluntad. Son <span>tus hormonas</span>',
    probSub: 'El cuerpo después de los 35 requiere una estrategia diferente. Lo que funcionaba a los 25 hoy empeora el problema.',
    problemas: [
      { icon: '🏃‍♀️', title: 'Cardio que sube el cortisol', description: 'El cardio constante a los 35+ eleva el cortisol crónico. El cortisol alto frena el metabolismo, destruye músculo y acumula grasa abdominal — exactamente lo contrario de lo que buscas.' },
      { icon: '📉', title: 'La báscula miente', description: 'Puedes pesar lo mismo pero tener 8% más de grasa y 5kg menos de músculo. La báscula no ve tu composición corporal — y esa diferencia es lo que afecta tu salud metabólica.' },
      { icon: '😴', title: 'Sueño y testosterona vinculados', description: 'Con menos de 7 horas de sueño tu testosterona baja hasta 15%. Testosterona baja = menos músculo, más grasa, peor recuperación. Sin el protocolo de sueño, el entrenamiento no sirve.' },
      { icon: '🍞', title: 'Miedo a los carbohidratos', description: 'Eliminar los carbos después de los 35 baja el cortisol a corto plazo pero destruye la tiroides. El secreto no es eliminarlos — es elegirlos y usarlos en el momento correcto.' },
    ],
    progTag: 'Módulos Cuchos Fit',
    progH2: 'Reset metabólico, no solo <span>perder peso</span>',
    progSub: 'Cuatro módulos diseñados por el Dr. Juan Pablo para revertir el declive metabólico de los 35+ y construir el cuerpo que mereces.',
    programa: [
      { icon: '📊', title: 'Módulo 1 · Diagnóstico Corporal', description: 'Bioimpedancia, análisis hormonal básico y evaluación del sueño. Definimos tu punto de partida real — no en kilos, en composición y metabolismo.' },
      { icon: '🥩', title: 'Módulo 2 · Anabolismo sin Grasa', description: 'Superávit calórico controlado, timing de proteínas y macros por fase. Construimos músculo sin acumular grasa — es bioquímica, no magia.' },
      { icon: '⚡', title: 'Módulo 3 · Reset Hormonal', description: 'Protocolo de sueño, magnesio, manejo de estrés y luz solar. Sin esto, el entrenamiento no funciona. Las hormonas son el jefe del cuerpo.' },
      { icon: '🏋️', title: 'Módulo 4 · Sobrecarga Progresiva', description: 'Menos días de entrenamiento pero más intensidad. Multiarticulares, cadena posterior y fuerza funcional. Lo que construyes a los 40 te dura 20 años.' },
    ],
    resSub: 'Resultados verificados de hombres y mujeres 35-55 años que aplicaron el protocolo Cuchos Fit.',
    resultados: [
      { tag: 'Metabolismo 35+ · Bogotá', title: 'Hombre 42 años, sobrepeso', stats: [{ value: '8kg', description: 'de grasa perdida en 4 meses sin perder músculo' }, { value: '+12%', description: 'masa muscular ganada simultáneamente' }], badge: 'Protocolo completo' },
      { tag: 'Reset Hormonal · Cali', title: 'Mujer 38 años, resistencia insulina', stats: [{ value: '67%', description: 'mejora en sensibilidad a la insulina en 8 semanas' }, { value: '18cm', description: 'reducción de perímetro abdominal en 6 meses' }], badge: 'Reset + Fuerza' },
      { tag: 'Cuchos Fit · Medellín', title: 'Mujer 45 años, meseta metabólica', stats: [{ value: '+23%', description: 'fuerza en 3 meses con sobrecarga progresiva' }], badge: 'Diagnóstico preciso' },
    ],
    testimonios: [
      { emoji: '💪', text: '"Perdí 8 kg de grasa y gané músculo a los 42. El enfoque hormonal es completamente diferente a todo lo que había probado. El Dr. JP sabe exactamente qué decir."', name: 'Carlos M.', program: 'Cuchos Fit · 4 meses' },
      { emoji: '🔥', text: '"Llevaba 3 años con el mismo peso sin entender por qué. El diagnóstico de composición corporal me cambió la perspectiva. No era grasa — era músculo que no tenía."', name: 'Patricia G.', program: 'Cuchos Fit · mes 3' },
      { emoji: '⚡', text: '"Jamás pensé que el sueño fuera tan importante para perder grasa abdominal. Desde que arreglé el sueño, todo lo demás empezó a funcionar."', name: 'Roberto H.', program: 'Cuchos Fit · 6 meses' },
    ],
    ctaBadge: '¿Listo para el reset?',
    ctaH2: 'Tu metabolismo <span>puede reiniciarse.</span>',
    ctaSub: 'Quedan 4 cupos en Cuchos Fit. El Dr. Juan Pablo diseña el protocolo de forma individual — no hay atajos, hay ciencia.',
  },
}
