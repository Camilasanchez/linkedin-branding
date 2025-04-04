// app/recursos/calculadora-roi/page.tsx
'use client'
import { useState } from 'react'

export default function CalculadoraROI() {
  const [tarifaHora, setTarifaHora] = useState<number | ''>('')
  const [tiempoConsulta, setTiempoConsulta] = useState<number | ''>('')
  const [numeroVisitas, setNumeroVisitas] = useState<number | ''>('')
  const [tasaConversion, setTasaConversion] = useState<number | ''>('')
  const [ingresoPerdido, setIngresoPerdido] = useState<number | null>(null)

  const calcularIngresoPerdido = () => {
    if (
      tarifaHora !== '' &&
      tiempoConsulta !== '' &&
      numeroVisitas !== '' &&
      tasaConversion !== ''
    ) {
      const ingreso =
        (tarifaHora * tiempoConsulta * numeroVisitas * tasaConversion) / 100
      setIngresoPerdido(ingreso)
    } else {
      setIngresoPerdido(null)
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">
        Calculadora de Ingreso Potencial Perdido (ROI)
      </h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
        Esta herramienta te ayuda a estimar cuánto podrías estar dejando de ganar
        al ofrecer asesorías o reuniones gratuitas. El ROI (Retorno sobre la inversión)
        en este contexto se refiere al valor económico que podrías generar si ese tiempo
        fuera monetizado según tu tarifa por hora y tasa de conversión.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="tarifaHora"
              className="block text-sm font-medium text-gray-700"
            >
              Tarifa por hora (USD)
            </label>
            <input
              type="number"
              id="tarifaHora"
              value={tarifaHora}
              onChange={(e) =>
                setTarifaHora(
                  e.target.value === '' ? '' : Number(e.target.value)
                )
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="tiempoConsulta"
              className="block text-sm font-medium text-gray-700"
            >
              Tiempo por consulta (horas)
            </label>
            <input
              type="number"
              step="0.1"
              id="tiempoConsulta"
              value={tiempoConsulta}
              onChange={(e) =>
                setTiempoConsulta(
                  e.target.value === '' ? '' : Number(e.target.value)
                )
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="numeroVisitas"
              className="block text-sm font-medium text-gray-700"
            >
              Número de visitas
            </label>
            <input
              type="number"
              id="numeroVisitas"
              value={numeroVisitas}
              onChange={(e) =>
                setNumeroVisitas(
                  e.target.value === '' ? '' : Number(e.target.value)
                )
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="tasaConversion"
              className="block text-sm font-medium text-gray-700"
            >
              Tasa de conversión (%)
            </label>
            <input
              type="number"
              step="0.1"
              id="tasaConversion"
              value={tasaConversion}
              onChange={(e) =>
                setTasaConversion(
                  e.target.value === '' ? '' : Number(e.target.value)
                )
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={calcularIngresoPerdido}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Calcular Ingreso Perdido
          </button>
        </div>
        {ingresoPerdido !== null && (
          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-indigo-500">
            <p className="text-lg">
              Ingreso Potencial Perdido:{' '}
              <span className="font-bold">${ingresoPerdido.toFixed(2)} USD</span>
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
