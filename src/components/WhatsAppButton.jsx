import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // Reemplaza este número con el número de WhatsApp real
  const phoneNumber = '549XXXXXXXXXX';
  const message = 'Hola! Me gustaría obtener más información sobre sus servicios.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
