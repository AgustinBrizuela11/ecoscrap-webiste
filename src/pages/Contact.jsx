import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    time: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Formatear la fecha y hora en zona horaria Argentina
    const timeArg = new Date().toLocaleString('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        time: timeArg
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Limpiar el formulario después del envío exitoso
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        time: ''
      });

      toast.success('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
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
                  Interseccion de Avenida Peñaloza y Facundo Quiroga
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-600">
                  +543425786546
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  ferroscrapoficial@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Horario de Atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 8:00 AM - 12:00 PM
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
                  className="form-input mt-1 block w-full border-2 p-2 rounded-lg border-gray-300 focus:border-primary-500"
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
                  className="form-input mt-1 block w-full border-2 p-2 rounded-lg border-gray-300 focus:border-primary-500"
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
                  className="form-input mt-1 block w-full border-2 p-2 rounded-lg border-gray-300 focus:border-primary-500"
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
                  className="form-input mt-1 block w-full border-2 p-2 rounded-lg border-gray-300 focus:border-primary-500"
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
                  className="form-textarea mt-1 block w-full border-2 p-2 rounded-lg border-gray-300 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3399.563698815656!2d-60.710471924626475!3d-31.5635864033824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMzJzQ4LjkiUyA2MMKwNDInMjguNCJX!5e0!3m2!1ses!2sar!4v1762226987464!5m2!1ses!2sar" 
        width="100%" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
