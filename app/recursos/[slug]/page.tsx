/// <reference types="react" />

'use client'

import { notFound } from 'next/navigation'

// Importa tus componentes
import CalculadoraROI from './calculadora-roi'
import ChecklistPerfil from './checklist-perfil'
import TestPosicionamiento from './test-posicionamiento'
import PlantillasPost from './plantillas-post'


// Diccionario que asocia cada slug con un componente
const componentes: Record<string, () => JSX.Element> = {
  'calculadora-roi': () => <CalculadoraROI />,
  'checklist-perfil': () => <ChecklistPerfil />,
  'test-posicionamiento': () => <TestPosicionamiento />,
  'plantillas-post':() => <PlantillasPost />,
}

export default function Recurso({ params }: { params: { slug: string } }) {
  const componente = componentes[params.slug]

  if (!componente) return notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {componente()}
    </main>
  )
}
