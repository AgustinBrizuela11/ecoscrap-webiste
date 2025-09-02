export default function Gallery() {
  const images = [
    { id: 1, title: 'Planta de Reciclaje' },
    { id: 2, title: 'Proceso de Clasificación' },
    { id: 3, title: 'Maquinaria Especializada' },
    { id: 4, title: 'Equipo de Trabajo' },
    { id: 5, title: 'Materiales Reciclados' },
    { id: 6, title: 'Transporte y Logística' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Galería</h1>
        </div>
      </div>

      {/* Galería */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                {/* Aquí irá la imagen real */}
                <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
