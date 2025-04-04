// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-6">
        Potencia tu Marca Personal en LinkedIn
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8">
        Aprende a crear contenido atractivo y aumentar tu presencia en LinkedIn con la ayuda de nuestra IA personalizada. Genera posts y comentarios que impacten.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/generar-contenido" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
          Generador de Contenido
        </Link>
        <Link href="/recursos" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
          Recursos Adicionales
        </Link>
      </div>

      <section className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
          ¿Por qué usar LinkedIn para tu Marca Personal?
        </h2>
        <p className="text-gray-700 mb-4">
          LinkedIn es la plataforma más poderosa para posicionarte profesionalmente. Con nuestra herramienta de IA, te ayudamos a crear contenido relevante y aumentar tu visibilidad.
        </p>
        <p className="text-gray-700 mb-4">
          Si no sabes por dónde empezar, nuestros recursos adicionales te guiarán paso a paso para construir un perfil destacado.
        </p>
        <p className="text-gray-700">
          ¡Comienza hoy mismo y haz crecer tu red de contactos profesionales!
        </p>
      </section>

      <footer className="mt-16 text-sm text-gray-500 flex items-center gap-2">
        <span>Desarrollado por</span>
        <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
      </footer>
    </main>
  )
}
