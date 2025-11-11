import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // Número de WhatsApp (formato para wa.me: código de país + número, sin + ni espacios)
  const phoneNumber = '5493425981228';
  const message = 'Hola, quisiera obtener más información sobre sus servicios de compactacion.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abrir en una nueva pestaña de forma segura
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
