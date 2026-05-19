export interface PaymentMethod {
  id: string
  name: string
  emoji: string
  region: 'colombia' | 'international'
  description: string
  popular?: boolean
  whatsappMessage: string
  brandColor: string
  brandBg: string
  badge?: string
}

const WA_NUMBER = '573001234567' // TODO: replace with real number

export function buildWaUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  // ===== COLOMBIA =====
  {
    id: 'nequi',
    name: 'Nequi',
    emoji: '💜',
    region: 'colombia',
    description: 'Pago instantáneo desde tu app Nequi · Sin comisiones',
    popular: true,
    badge: 'Más usado',
    whatsappMessage: 'Hola, quiero pagar el programa Nutrifit con Nequi. ¿Me pasas los datos?',
    brandColor: '#210049',
    brandBg: '#e9d5ff',
  },
  {
    id: 'bancolombia',
    name: 'Bancolombia',
    emoji: '🏦',
    region: 'colombia',
    description: 'PSE o transferencia desde tu cuenta · Pago inmediato',
    whatsappMessage: 'Hola, quiero pagar el programa Nutrifit con Bancolombia PSE.',
    brandColor: '#fdda24',
    brandBg: '#fef9c3',
  },
  {
    id: 'daviplata',
    name: 'Daviplata',
    emoji: '📱',
    region: 'colombia',
    description: 'Pago desde tu billetera Daviplata · Sin tarjeta',
    whatsappMessage: 'Hola, quiero pagar el programa Nutrifit con Daviplata.',
    brandColor: '#ed1c27',
    brandBg: '#fee2e2',
  },
  {
    id: 'tarjeta-co',
    name: 'Tarjeta nacional',
    emoji: '💳',
    region: 'colombia',
    description: 'Visa · Mastercard · Amex · Hasta 12 cuotas sin intereses',
    badge: 'Cuotas',
    whatsappMessage: 'Hola, quiero pagar el programa Nutrifit con tarjeta de crédito en cuotas.',
    brandColor: '#1e40af',
    brandBg: '#dbeafe',
  },
  {
    id: 'efecty',
    name: 'Efecty / Baloto',
    emoji: '🏪',
    region: 'colombia',
    description: 'Paga en efectivo en cualquier punto autorizado del país',
    whatsappMessage: 'Hola, quiero pagar el programa Nutrifit en efectivo (Efecty / Baloto).',
    brandColor: '#f59e0b',
    brandBg: '#fef3c7',
  },

  // ===== INTERNACIONAL =====
  {
    id: 'paypal',
    name: 'PayPal',
    emoji: '🌎',
    region: 'international',
    description: 'Pago seguro desde cualquier país · USD/EUR',
    popular: true,
    badge: 'Recomendado',
    whatsappMessage: 'Hi, I want to pay for the Nutrifit program with PayPal.',
    brandColor: '#003087',
    brandBg: '#dbeafe',
  },
  {
    id: 'stripe',
    name: 'Tarjeta internacional',
    emoji: '💳',
    region: 'international',
    description: 'Visa · Mastercard · Amex (procesado por Stripe en USD/EUR)',
    whatsappMessage: 'Hi, I want to pay for the Nutrifit program with an international card.',
    brandColor: '#635bff',
    brandBg: '#e0e7ff',
  },
  {
    id: 'wise',
    name: 'Wise transfer',
    emoji: '🌐',
    region: 'international',
    description: 'Transferencia internacional al mejor tipo de cambio',
    whatsappMessage: 'Hi, I want to pay for the Nutrifit program via Wise transfer.',
    brandColor: '#00b9ff',
    brandBg: '#cffafe',
  },
  {
    id: 'crypto',
    name: 'USDT · Crypto',
    emoji: '🪙',
    region: 'international',
    description: 'USDT (TRC20 / ERC20) · Sin comisiones bancarias',
    badge: 'Sin comisión',
    whatsappMessage: 'Hi, I want to pay for the Nutrifit program with USDT crypto.',
    brandColor: '#f7931a',
    brandBg: '#ffedd5',
  },
]

export const PAYMENT_TRUST_SIGNALS = [
  { icon: '🔒', label: 'Pago seguro · SSL cifrado' },
  { icon: '📄', label: 'Factura electrónica DIAN' },
  { icon: '🛡️', label: 'Garantía 4 semanas' },
  { icon: '⏱️', label: 'Acceso inmediato al pagar' },
]
