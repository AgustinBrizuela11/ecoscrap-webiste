import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Cargar imágenes desde src/assets/fotos usando Vite
    const modules = import.meta.glob('../assets/fotos/*.{png,jpg,jpeg,webp,svg}', { eager: true, as: 'url' });
    let imgs = Object.values(modules || {});
    // excluir el logo (si existe) y archivos muy pequeños si se quisiera
    imgs = imgs.filter((u) => !u.includes('logo_con_letras'));

    // mezclar y tomar hasta 9 imágenes
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
    const selected = imgs.slice(0, Math.min(9, imgs.length));
    setImages(selected);
  }, []);

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
        {images.length === 0 ? (
          <p className="text-center text-gray-500">Cargando imágenes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div key={src} className="group relative overflow-hidden rounded-lg bg-gray-100">
                <img src={src} alt={`Foto ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Foto {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
