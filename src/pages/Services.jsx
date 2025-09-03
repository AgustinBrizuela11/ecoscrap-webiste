export default function Services() {
  const services = [
    {
      title: "Recoleccion de Residuos ferrosos",
      description: "Ofrecemos soluciones integrales para la gestión de residuos industriales y urbanos, garantizando un proceso eficiente y ambientalmente responsable.",
      features: [
        "Recolección programada",
        "Logistica optima y confiable",
        "Documentación y certificados",
        "Cumplimiento normativo"
      ]
    },
    {
      title: "Compactacion de Residuos ferrosos",
      description: "Nos movilizamos hasta donde estes y compactamos tus residuos ferrosos para optimizar espacio y facilitar su transporte.",
      features: [
        "Evaluación del proyecto",
        "Compactacion con dimensiones para transporte y fundicion",
        "Recuperación de materiales",
        "Gestión de residuos"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Nuestros Servicios</h1>
        </div>
      </div>

      {/* Servicios Detallados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="w-full md:w-1/2 bg-gray-200 h-64 rounded-lg">
                  {/* Aquí irá una imagen representativa del servicio */}
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">¿Necesita alguno de nuestros servicios?</h2>
          <p className="text-gray-600 mb-8">
            Contáctenos para obtener más información o solicitar una cotización personalizada.
          </p>
          <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Contactar Ahora
          </button>
        </div>
      </section>
    </div>
  );
}
