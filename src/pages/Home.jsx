import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenidos a FerroScrap
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expertos en reciclaje y gestión de residuos ferrosos
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Recolección de Residuos ferrosos</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos soluciones integrales para la gestión de residuos industriales y urbanos, garantizando un proceso eficiente y ambientalmente responsable.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recolección programada
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Logística óptima y confiable
                </li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Compactación de Residuos ferrosos</h3>
              <p className="text-gray-600 mb-4">
                Nos movilizamos hasta donde estés y compactamos tus residuos ferrosos para optimizar espacio y facilitar su transporte.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Evaluación del proyecto
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compactación con dimensiones específicas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Necesitas nuestros servicios?
          </h2>
          <Link
            to="/contacto"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Solicita una cotización
          </Link>
        </div>
      </section>
    </div>
  );
}
