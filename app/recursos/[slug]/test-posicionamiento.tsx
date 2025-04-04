'use client'
import { useState } from 'react'

const preguntas = [
  '¿Tu titular y extracto comunican claramente tu propuesta de valor?',
  '¿Tu perfil está completo (foto, titular, experiencia, aptitudes)?',
  '¿Tu contenido genera reacciones, comentarios o mensajes?',
  '¿Tu imagen transmite profesionalismo y confianza?',
  '¿Tu sección “Acerca de” tiene una narrativa estructurada y atractiva?',
  '¿Publicas y comentas de forma constante en LinkedIn?'
]

export default function TestPosicionamiento() {
  const [respuestas, setRespuestas] = useState<number[]>(Array(preguntas.length).fill(0))
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const puntajeTotal = respuestas.reduce((a, b) => a + b, 0)

  const resultado = () => {
    if (puntajeTotal < 15) {
      return 'Tu posicionamiento necesita mejoras significativas. Revisa y fortalece aspectos como tu "Acerca de", imagen profesional y estrategia de contenido.'
    } else if (puntajeTotal < 22) {
      return 'Tu perfil está en camino, pero aún hay áreas de oportunidad. Considera ajustar el mensaje, mejorar la narrativa de tu "Acerca de" y aumentar tu actividad.'
    } else {
      return '¡Excelente! Tu posicionamiento es sólido. Sigue manteniendo la consistencia y aprovecha tus fortalezas para seguir creciendo.'
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Test de Posicionamiento Profesional en LinkedIn
      </h1>

      <p className="text-gray-700 text-lg mb-4 text-center max-w-2xl mx-auto">
        Posicionarse en LinkedIn significa que tu perfil y tu actividad reflejan claramente tu experiencia, propósito y valor profesional, y que además logras generar percepción positiva y recordación entre quienes te visitan. Un buen posicionamiento te permite atraer oportunidades, fortalecer tu marca personal y conectar con personas relevantes en tu industria.
      </p>

      <p className="text-gray-700 text-base mb-8 text-center max-w-xl mx-auto">
        <strong>¿Cómo se responde?</strong> Para cada ítem, elige un número del 1 al 5, donde 1 es \"poco logrado\" y 5 es \"muy logrado\".
      </p>

      {!mostrarResultado ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setMostrarResultado(true)
          }}
          className="space-y-8"
        >
          {preguntas.map((pregunta, i) => (
            <div key={i}>
              <label className="block text-gray-800 font-medium mb-2">
                {i + 1}. {pregunta}
              </label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((valor) => (
                  <label key={valor} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name={`pregunta-${i}`}
                      value={valor}
                      required
                      onChange={() => {
                        const copia = [...respuestas]
                        copia[i] = valor
                        setRespuestas(copia)
                      }}
                      className="accent-indigo-600"
                    />
                    {valor}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Ver Resultado
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-indigo-700 text-center mb-4">
            Resultado del Test
          </h2>
          <p className="text-center text-gray-700 text-lg mb-2">
            Puntaje total: <span className="font-semibold">{puntajeTotal} / 30</span>
          </p>
          <p className="text-center text-gray-600 mt-4">{resultado()}</p>
          <div className="text-center mt-6">
            <button
              onClick={() => setMostrarResultado(false)}
              className="text-sm text-indigo-600 hover:underline"
            >
              Volver a responder el test
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
