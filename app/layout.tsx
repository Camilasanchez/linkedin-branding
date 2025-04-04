// app/layout.tsx
import '../styles/globals.css'

export const metadata = {
  title: 'LinkedIn Branding',
  description: 'Mejora tu marca personal con IA',
  icons: {
      icon: '/favicon.ico',
    },
  }


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  )
}
