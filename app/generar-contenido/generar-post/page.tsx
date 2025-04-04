'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DEEPSEEK_KEY } from '@/lib/constants'
import LoadingButton from '@/components/LoadingButton'

export default function GenerarPost() {
  const router = useRouter()
  const [perfil, setPerfil] = useState<any>(null)
  const [tema, setTema] = useState('')
  const [tono, setTono] = useState('Profesional')
  const [resultado, setResultado] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [loadingPost, setLoadingPost] = useState(false)
  const [loadingComentario, setLoadingComentario] = useState(false)
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    const datosGuardados = localStorage.getItem('perfil')
    if (datosGuardados) setPerfil(JSON.parse(datosGuardados))
  }, [])

  const limpiarResultado = (texto: string) => {
    const partes = texto.split('**🔍 Por qué este post funciona')
    return partes[0].trim()
  }

  const generarPost = async () => {
    if (!perfil || !tema) return
    setLoadingPost(true)
    setComentarios('')
    setResultado('')

    const prompt = `
Eres un experto en creación de contenido para LinkedIn que domina su algoritmo (2024). Generarás posts profesionales que maximicen el alcance orgánico y engagement, respetando políticas de la plataforma.

Perfil:
- Nombre: ${perfil.nombre}
- Propósito: ${perfil.proposito}
- Objetivo profesional: ${perfil.objetivo}
- Industria: ${perfil.industria}
- Nivel de experiencia: ${perfil.nivel}
- Frases de estilo: ${perfil.frases || 'N/A'}
- Profesión o Empresa: ${perfil.profesion || 'N/A'}

Parámetros del Algoritmo:
1. Conversaciones significativas
2. Dwell Time (15+ segundos)
3. Formato óptimo:
   - Longitud: 1,500-2,000 caracteres
   - Hook inicial impactante
   - Storytelling con estructura: Situación > Conflicto > Resolución
   - CTA doble
4. Hashtags: 3-5 estratégicos
5. Políticas: Cero autopromoción directa, evitar engagement bait

Instrucciones:
- Genera un post sobre el tema "${tema}" en tono "${tono}".
- Incluye hook, storytelling, CTA doble y hashtags estratégicos.
- Usa estructuras ganadoras como listas, contraste o errores comunes.
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
      setResultado(limpiarResultado(texto))
    } catch (err) {
      setResultado('Error al generar el contenido. Verifica tu conexión.')
    } finally {
      setLoadingPost(false)
    }
  }

  const generarComentario = async () => {
    if (!resultado) return
    setLoadingComentario(true)
    setComentarios('')

    const promptComentario = `
Eres un creador de contenido estratégico en LinkedIn. Basándote en este post:

"${resultado}"

Genera 3 comentarios que pueda escribir el autor en su propio post para aumentar la conversación y el engagement. Cada uno debe tener un tono auténtico, abrir el diálogo y complementar el post.
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
          messages: [{ role: 'user', content: promptComentario }],
        }),
      })
      const data = await response.json()
      setComentarios(data.choices?.[0]?.message?.content || 'No se generó comentario')
    } catch (err) {
      setComentarios('Error al generar comentarios.')
    } finally {
      setLoadingComentario(false)
    }
  }

  const copiarContenido = () => {
    navigator.clipboard.writeText(resultado)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
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
        Generador de Post para LinkedIn
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-6">
        Completa los campos para generar un post potente y personalizado con ayuda de IA.
      </p>

      <div className="mb-4">
        <label className="block font-medium text-gray-800 mb-1">Tema del Post</label>
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Ej: Tendencias de IA en Recursos Humanos"
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-800 mb-1">Tono del Post</label>
        <select
          value={tono}
          onChange={(e) => setTono(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>Profesional</option>
          <option>Casual</option>
          <option>Inspirador</option>
        </select>
      </div>

      <div className="text-center mb-6">
        <LoadingButton loading={loadingPost} onClick={generarPost}>
          Generar Post
        </LoadingButton>
      </div>

      {resultado && (
        <>
          <section className="bg-white p-6 rounded-lg shadow border border-gray-200 whitespace-pre-wrap">
            {resultado}
          </section>

          <div className="text-center mt-4">
            <button
              onClick={copiarContenido}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
            >
              {copiado ? '✅ Copiado' : '📋 Copiar contenido'}
            </button>
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2 text-center">
              ¿Quieres generar un comentario estratégico para tu propio post?
            </h2>
            <p className="text-center text-gray-600 mb-4 text-sm">
              Comentar tu propia publicación puede aumentar el alcance hasta en un 30%. Usa este espacio para profundizar en la conversación o dejar un llamado a la acción.
            </p>

            <div className="text-center mb-6">
              <LoadingButton loading={loadingComentario} onClick={generarComentario}>
                Generar Comentario
              </LoadingButton>
            </div>

            {comentarios && (
              <div className="bg-white p-4 rounded shadow border border-gray-200 whitespace-pre-wrap">
                {comentarios}
              </div>
            )}
          </div>
        </>
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
