// app/recursos/[slug]/checklist-perfil.tsx
'use client'
import { useState } from 'react'

const checklist = [
  '¿Tienes una foto profesional y actualizada?',
  '¿Tu titular describe claramente lo que haces y a quién ayudas?',
  '¿Incluyes una descripción atractiva que cuente tu historia profesional?',
  '¿Tienes enlaces visibles a proyectos, artículos u otros contenidos?',
  '¿Tu experiencia laboral está actualizada y bien redactada?',
  '¿Incluyes habilidades relevantes alineadas con tus objetivos profesionales?',
  '¿Publicas contenido al menos 5 veces por semana?',
  '¿Comentas y participas activamente en otras publicaciones?',
  '¿Estás usando una URL personalizada en tu perfil?',
  '¿Tu perfil está alineado con el tipo de oportunidades que buscas?'
]

export default function ChecklistPerfil() {
  const [estado, setEstado] = useState<boolean[]>(Array(checklist.length).fill(false))

  const completados = estado.filter((item) => item).length

  const feedback = () => {
    if (completados === checklist.length) return '¡Felicidades! Tu perfil está completamente optimizado.'
    if (completados >= 7) return '¡Vas por muy buen camino! Revisa los puntos que faltan y ajusta.'
    return 'Aún puedes mejorar tu perfil. Toma estos ítems como guía para optimizarlo.'
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700 text-center">
        Checklist de Perfil de LinkedIn
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
        Un perfil optimizado de LinkedIn puede marcar una gran diferencia en tu carrera profesional. Tener una foto profesional, un titular claro, una descripción atractiva y contenido actualizado transmite profesionalismo y mejora tu visibilidad. Además, alinear tu perfil con tus objetivos y mantener una presencia activa (al menos 5 publicaciones semanales) te posiciona como una persona activa, confiable y relevante en tu industria. Usa este checklist como autodiagnóstico para optimizar tu presencia profesional.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {checklist.map((item, i) => (
          <div key={i} className="flex items-start">
            <input
              type="checkbox"
              checked={estado[i]}
              onChange={() => {
                const nuevo = [...estado]
                nuevo[i] = !nuevo[i]
                setEstado(nuevo)
              }}
              className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="ml-3 text-gray-800 text-base">{item}</label>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg text-indigo-700 font-semibold">Completaste {completados} de {checklist.length} ítems</p>
        <p className="text-gray-700 mt-2">{feedback()}</p>
      </div>
    </main>
  )
}
