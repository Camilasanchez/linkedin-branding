'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GenerarContenidoLanding() {
  const router = useRouter()

  const [perfil, setPerfil] = useState({
    nombre: '',
    proposito: '',
    objetivo: '',
    industria: '',
    nivel: 'Media',
    genero: '',
    frases: '',
    profesion: ''
  })

  useEffect(() => {
    const datos = localStorage.getItem('perfil')
    if (datos) setPerfil(JSON.parse(datos))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPerfil((prev) => ({ ...prev, [name]: value }))
  }

  const guardarPerfil = () => {
    localStorage.setItem('perfil', JSON.stringify(perfil))
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
        Creador de Contenido para LinkedIn con IA
      </h1>

      <p className="text-gray-700 text-lg text-center mb-8 max-w-2xl mx-auto">
        Completa tu perfil profesional una sola vez. Usaremos esta información para crear contenido y un plan de publicaciones personalizado que potencie tu presencia en LinkedIn.
      </p>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Información básica</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={perfil.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="proposito"
          placeholder='Tu propósito (ej: "Empoderar a mujeres en tecnología")'
          value={perfil.proposito}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="objetivo"
          placeholder="Objetivo profesional (ej: Convertirme en referente en ciberseguridad)"
          value={perfil.objetivo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="industria"
          placeholder="Industria (ej: Marketing digital, Data Science)"
          value={perfil.industria}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="nivel"
          value={perfil.nivel}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Alta">Alta experiencia</option>
          <option value="Media">Media experiencia</option>
          <option value="Baja">Baja experiencia</option>
        </select>

        <h2 className="text-xl font-semibold text-indigo-600 mt-6 mb-2">Opcional</h2>

        <select
          name="genero"
          value={perfil.genero}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Género (opcional)</option>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
          <option value="Prefiero no decir">Prefiero no decir</option>
        </select>

        <input
          type="text"
          name="frases"
          placeholder='Frases de estilo (ej: "Sé auténtico", "Construyamos comunidad")'
          value={perfil.frases}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="profesion"
          placeholder="Profesión o empresa actual (opcional)"
          value={perfil.profesion}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <Link href="/generar-contenido/generar-post">
          <button
            onClick={guardarPerfil}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg"
          >
            Generar Contenido
          </button>
        </Link>

        <Link href="/generar-contenido/plan-contenidos">
          <button
            onClick={guardarPerfil}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg"
          >
            Generar Plan de Contenidos
          </button>
        </Link>
      </div>
    </main>
  )
}
