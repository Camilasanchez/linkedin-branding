'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DEEPSEEK_KEY } from '@/lib/constants'
import LoadingButton from '@/components/LoadingButton'

export default function PlanContenido() {
  const router = useRouter()
  const [perfil, setPerfil] = useState<any>(null)
  const [semanas, setSemanas] = useState(2)
  const [plan, setPlan] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const datosGuardados = localStorage.getItem('perfil')
    if (datosGuardados) setPerfil(JSON.parse(datosGuardados))
  }, [])

  const generarPlan = async () => {
    if (!perfil) return
    setLoading(true)

    const prompt = `
**Contexto**:
Eres un estratega de contenido senior especializado en LinkedIn, con expertise en algoritmos 2024 y psicología del engagement. Generarás un calendario mensual (${semanas} semanas) que optimice:
- Alcance orgánico
- Tasa de engagement (comentarios > reacciones)
- Posicionamiento de marca

**Perfil del Usuario**:
- Propósito: ${perfil.proposito}
- Objetivo profesional: ${perfil.objetivo}
- Industria: ${perfil.industria}
- Nivel de experiencia: ${perfil.nivel}
- Estilo: ${perfil.frases || 'No especificado'}

**Parámetros Basados en Datos**:
1. Frecuencia: 3-5 posts por semana (ideal 4.2).
2. Días: lunes a viernes, priorizando martes y miércoles.
3. Mix de contenido (Fórmula 4-3-2-1):
   - 40% Educativo (ej. tips, guías)
   - 30% Storytelling (experiencias)
   - 20% Opinión (visión, crítica)
   - 10% Promocional (sin hard selling)
4. Optimización por formato:
   - Martes/Jueves: texto largo (1,500-2,000 caracteres)
   - Lunes: video corto (<90s)
   - Viernes: encuesta o pregunta

**Hashtags por Día**:
- Lunes: 1 trending + 2 nicho
- Miércoles: 2 comunidad + 1 industria
- Viernes: 1 trending + 1 nicho + 1 branded

**Instrucciones**:
1. Genera un plan para ${perfil.industria} dirigido a profesionales como ${perfil.profesion || 'líderes del sector'} con estos elementos:
   ✓ Fecha y tipo de contenido
   ✓ Título hook con ángulo único
   ✓ Formato recomendado (texto, video, carrusel, encuesta)
   ✓ Hashtags estratégicos
   ✓ CTA efectivo

2. Incluye en el mes:
   • 1 post viralizable (ej. "5 verdades incómodas sobre...")
   • 2 colaboraciones con referentes
   • 1 análisis con datos (gráfico o estadística)

3. Sé realista, accionable, creativo. Formato estilo calendario. Una semana por bloque.
`

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${DEEPSEEK_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [{ role: 'user', content: prompt }],
        }),
      })

      const data = await response.json()
      const texto = data.choices?.[0]?.message?.content || 'No se generó contenido'
      const limpio = texto.split('**Resultado Esperado:**')[0]
      setPlan(limpio.trim())
    } catch (err) {
      setPlan('Error al generar el plan')
    } finally {
      setLoading(false)
    }
  }

  if (!perfil) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center">Cargando perfil...</p>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Generador de Plan de Contenido para LinkedIn
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-6">
        Genera un calendario de publicaciones semanal optimizado para el algoritmo actual de LinkedIn. Tendrás ideas claras para cada día, con estructura, CTA y hashtags adecuados.
      </p>

      <div className="mb-4 text-center">
        <label className="mr-2 text-gray-800 font-medium">¿Cuántas semanas deseas planificar?</label>
        <select
          value={semanas}
          onChange={(e) => setSemanas(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} semana{n > 1 && 's'}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center mb-6">
      <LoadingButton loading={loading} onClick={generarPlan}>
  Generar Plan de Contenido
</LoadingButton>      </div>

      {plan && (
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 whitespace-pre-wrap">
          {plan}
        </section>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => router.push('/generar-contenido')}
          className="text-indigo-600 hover:underline"
        >
          🔙 Volver al Perfil
        </button>
      </div>
    </main>
  )
}
