import { useState } from 'react';

export default function Gallery() {
  // Este array contendrá las imágenes reales más adelante
  const images = [
    { id: 1, title: 'Planta de Reciclaje', category: 'instalaciones' },
    { id: 2, title: 'Proceso de Clasificación', category: 'procesos' },
    { id: 3, title: 'Maquinaria Especializada', category: 'equipamiento' },
    { id: 4, title: 'Equipo de Trabajo', category: 'equipo' },
    { id: 5, title: 'Materiales Reciclados', category: 'materiales' },
    { id: 6, title: 'Transporte y Logística', category: 'servicios' },
  ];

  const [filter, setFilter] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'instalaciones', name: 'Instalaciones' },
    { id: 'procesos', name: 'Procesos' },
    { id: 'equipamiento', name: 'Equipamiento' },
    { id: 'equipo', name: 'Equipo' },
    { id: 'materiales', name: 'Materiales' },
    { id: 'servicios', name: 'Servicios' },
  ];

  const filteredImages = filter === 'todos' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Galería</h1>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full ${
                  filter === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Galería */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
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
