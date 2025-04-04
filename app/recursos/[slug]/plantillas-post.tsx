// app/recursos/[slug]/plantillas-post.tsx

export default function PlantillasPost() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Plantillas Ganadoras de Post para LinkedIn
        </h1>
  
        <p className="text-gray-700 text-lg mb-6">
          Aquí encontrarás un conjunto de plantillas basadas en estrategias comprobadas y experiencias reales para ayudarte a crear contenido de alto impacto en LinkedIn. Estas fórmulas te servirán de guía para contar historias, compartir conocimientos, generar interacción y posicionarte como referente.
        </p>
  
        <ul className="space-y-8 text-gray-800">
          <li>
            <h2 className="text-xl font-semibold text-indigo-600">1. Plantilla de Historia Personal</h2>
            <p><strong>Fórmula:</strong> Hace un tiempo... &rarr; Situación desafiante &rarr; Lo que aprendiste &rarr; CTA.</p>
            <p><strong>Ejemplo:</strong> Hace 1 año no sabía cómo usar LinkedIn. Probé, fallé, y finalmente encontré una estrategia. Hoy tengo más de 10K visitas al mes. Si estás empezando, comentá y te paso mi guía.</p>
          </li>
  
          <li>
            <h2 className="text-xl font-semibold text-indigo-600">2. Plantilla de Tip Profesional</h2>
            <p><strong>Fórmula:</strong> "Te dejo 3 tips para..." &rarr; Enumeración &rarr; CTA.</p>
            <p><strong>Ejemplo:</strong> 3 tips para que tu perfil de LinkedIn brille:
              <ol className="list-decimal list-inside">
                <li>Foto profesional y portada clara</li>
                <li>Resumen con historia y logros</li>
                <li>Publicaciones 3-5 veces por semana</li>
              </ol>
              Si querés que revise tu perfil, comentá “perfil” abajo.</p>
          </li>
  
          <li>
            <h2 className="text-xl font-semibold text-indigo-600">3. Plantilla de Aprendizaje o Fracaso</h2>
            <p><strong>Fórmula:</strong> Lo que intentaste &rarr; Fracaso o error &rarr; Lección que aprendiste &rarr; CTA reflexiva.</p>
            <p><strong>Ejemplo:</strong> Intenté vender sin crear contenido. Nadie me escribía. Cuando empecé a compartir tips reales, llegaron los mensajes. La clave está en aportar antes de pedir.</p>
          </li>
  
          <li>
            <h2 className="text-xl font-semibold text-indigo-600">4. Plantilla de Agradecimiento o Logro</h2>
            <p><strong>Fórmula:</strong> Logro alcanzado &rarr; Reflexión personal &rarr; Agradecimiento &rarr; CTA inspiradora.</p>
            <p><strong>Ejemplo:</strong> Hoy llegamos a 50K seguidores. Esto empezó como un experimento y se convirtió en una comunidad. Gracias por estar. Contame, ¿qué aprendiste esta semana?</p>
          </li>
  
          <li>
            <h2 className="text-xl font-semibold text-indigo-600">5. Plantilla de Hack o Recurso</h2>
            <p><strong>Fórmula:</strong> Herramienta o tip concreto &rarr; Beneficio &rarr; Mini tutorial &rarr; CTA de valor.</p>
            <p><strong>Ejemplo:</strong> Descubrí Gamma.app para hacer presentaciones con IA. En 5 minutos tenés algo visual y profesional. Si querés que arme una para vos, decime tu tema abajo.</p>
          </li>
        </ul>
      </div>
    )
  }