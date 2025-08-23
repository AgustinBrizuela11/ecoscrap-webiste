import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Contacto</h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-600">
                  [Tu Dirección]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-600">
                  [Tu Teléfono]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  info@ecoscrap.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Horario de Atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 8:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full h-96 bg-gray-200">
        {/* Aquí irá el mapa de Google Maps */}
      </div>
    </div>
  );
}
