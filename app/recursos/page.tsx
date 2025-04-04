// app/recursos/page.tsx
import Link from 'next/link'

const recursos = [
  {
    slug: 'plantillas-post',
    titulo: 'Plantillas de post ganadores',
    descripcion: 'Este es un listado de plantillas de post ganadores para postear por Linkedin, armado en base a post míos y de distintos referentes  internacionales en creación de contenido en esta red.'
  },
  {
    slug: 'calculadora-roi',
    titulo: 'Calculadora de ROI',
    descripcion: 'Calcula cuánto podrías estar perdiendo al no monetizar tus asesorías o tiempo.'
  },
  {
    slug: 'test-posicionamiento',
    titulo: 'Test de Posicionamiento',
    descripcion: 'Evalúa si tu perfil de LinkedIn proyecta tu valor y está optimizado estratégicamente.'
  },
  {
    slug: 'checklist-perfil',
    titulo: 'Checklist de Perfil',
    descripcion: 'Haz un diagnóstico completo de tu perfil para saber qué mejorar y cómo destacarte.'
  },
  
  
  
  // Se pueden agregar más recursos aquí...
]

export default function RecursosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-6">
        Recursos para potenciar tu perfil en LinkedIn
      </h1>
      <p className="text-gray-700 text-lg text-center mb-10">
        Explora herramientas interactivas diseñadas para ayudarte a construir una marca personal sólida y efectiva.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recursos.map((recurso) => (
          <Link 
            key={recurso.slug} 
            href={`/recursos/${recurso.slug}`}
            className="h-full"
          >
            <div className="h-full bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition cursor-pointer flex flex-col">
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                {recurso.titulo}
              </h2>
              <p className="text-gray-600 text-sm flex-grow">
                {recurso.descripcion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
      )
    }