export const excuseParts = {
  inicio: [
    "Mi perro",
    "Mi gato",
    "Mi vecino",
    "Mi computadora",
    "Mi café",
    "Mi despertador",
    "Mi router",
    "Mi planta",
    "Mi almohada",
    "El universo",
    "Mi karma",
    "Mi horóscopo",
    "Mi calendario",
    "Mi reloj",
    "Mi sombra",
    "Mi espejo",
    "Mi GPS",
    "Mi hamster",
    "Mi consciencia",
    "Mi sofá",
    "El destino",
    "Mi intuición",
    "La gravedad",
    "Mi productividad",
    "Mi creatividad",
    "El tiempo",
    "Mi memoria RAM",
    "Mi cerebro",
    "Mi lado responsable",
    "Mi sentido común"
  ],
  medio: [
    "entró en crisis y",
    "se rebeló porque",
    "decidió que",
    "conspiró para",
    "tuvo un error y",
    "se actualizó mientras",
    "hackeó el sistema para",
    "perdió la conexión cuando",
    "entró en modo zen y",
    "inició una revolución porque",
    "se fue de vacaciones y",
    "necesitaba terapia mientras",
    "se volvió filosófico y",
    "experimentó un bug cuando",
    "entró en modo ahorro mientras",
    "pidió un tiempo libre para",
    "se sincronizó mal y",
    "tuvo una epifanía mientras",
    "desarrolló consciencia y",
    "se quedó sin batería cuando",
    "entró en mantenimiento y",
    "sufrió un cortocircuito mientras",
    "se reinició justo cuando",
    "perdió la señal mientras",
    "entró en modo avión cuando",
    "necesitaba actualización mientras",
    "se quedó procesando",
    "tuvo un error 404 mientras",
    "entró en bucle infinito",
    "perdió la conexión wifi"
  ],
  final: [
    "estaba descargando más RAM",
    "meditaba sobre el sentido de la vida",
    "buscaba señal en el metaverso",
    "intentaba programar en HTML",
    "aprendía a hablar en binario",
    "hacía yoga cuántico",
    "buscaba el significado de la productividad",
    "trataba de encontrar bugs en la matriz",
    "actualizaba el sistema operativo del karma",
    "recalibraba la sincronización universal",
    "debuggeaba el código del destino",
    "optimizaba el rendimiento del tiempo",
    "instalaba parches de personalidad",
    "formateaba el disco duro emocional",
    "ejecutaba un análisis de consciencia",
    "restauraba copias de seguridad mentales",
    "minaba criptoexcusas",
    "compilaba pensamientos aleatorios",
    "indexaba momentos perdidos",
    "escaneaba virus existenciales",
    "desfragmentaba memorias",
    "calibraba sensores de responsabilidad",
    "actualizaba drivers de motivación",
    "sincronizaba con el servidor astral",
    "procesaba datos del inconsciente",
    "ejecutaba scripts de procrastinación",
    "parseaba mensajes del universo",
    "renderizaba nuevas realidades",
    "implementaba protocolos de caos",
    "validaba certificados de existencia"
  ]
};

export function generateExcuse(): string {
  const randomInicio = excuseParts.inicio[Math.floor(Math.random() * excuseParts.inicio.length)];
  const randomMedio = excuseParts.medio[Math.floor(Math.random() * excuseParts.medio.length)];
  const randomFinal = excuseParts.final[Math.floor(Math.random() * excuseParts.final.length)];
  
  return `${randomInicio} ${randomMedio} ${randomFinal}.`;
}