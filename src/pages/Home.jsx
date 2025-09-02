import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenidos a Ecoscrap
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expertos en reciclaje y gestión de residuos metálicos
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Compra de Metales</h3>
              <p className="text-gray-600 mb-4">
                Compramos todo tipo de metales para su reciclaje y reutilización.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Gestión de Residuos</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos soluciones integrales para la gestión de residuos industriales.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Reciclaje Industrial</h3>
              <p className="text-gray-600 mb-4">
                Servicios especializados de reciclaje para empresas e industrias.
              </p>
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
