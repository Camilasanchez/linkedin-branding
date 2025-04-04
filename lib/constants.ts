// lib/constants.ts

export const DEEPSEEK_KEY = process.env.NEXT_PUBLIC_DEEPSEEK_KEY ?? ''

if (!DEEPSEEK_KEY) {
  console.warn('⚠️ Advertencia: No se encontró NEXT_PUBLIC_DEEPSEEK_KEY en .env.local')
}
