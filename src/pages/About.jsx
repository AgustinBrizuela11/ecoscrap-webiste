export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Sobre Nosotros</h1>
        </div>
      </div>

      {/* Trayectoria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Trayectoria</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 bg-gray-200 h-64 rounded-lg">
                {/* Aquí irá una imagen */}
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-4">Experiencia y Profesionalismo</h3>
                <p className="text-gray-600">
                  Con años de experiencia en la industria del reciclaje, hemos desarrollado procesos 
                  eficientes y sostenibles para la gestión de residuos metálicos. Nuestro equipo de 
                  profesionales está altamente capacitado y comprometido con la excelencia en el servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Sostenibilidad</h3>
              <p className="text-gray-600">
                Compromiso con prácticas ambientalmente responsables y sostenibles.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Innovación</h3>
              <p className="text-gray-600">
                Búsqueda constante de nuevas formas de mejorar nuestros procesos y servicios.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Integridad</h3>
              <p className="text-gray-600">
                Transparencia y honestidad en todas nuestras operaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                En FerroScrap, nos dedicamos a proporcionar soluciones sostenibles de reciclaje y gestión 
                de residuos ferrosos, contribuyendo a la conservación del medio ambiente y promoviendo 
                una economía circular responsable.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser líderes en la industria del reciclaje de desechos ferrosos industriales o urbanos, estableciendo nuevos estándares 
                de sostenibilidad y eficiencia, mientras creamos un impacto positivo en el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
