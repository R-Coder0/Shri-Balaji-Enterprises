import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Floatingbutton.css';

const FloatingButtons = () => {
  const location = useLocation();

  // Define different phone numbers based on the current path
  const getPhoneNumber = () => {
    if (location.pathname === '/machine-repairing') {
      return '+919971586369';
    } else {
      return '+919971586369'; // Default phone number
    }
  };

  const phoneNumber = getPhoneNumber();

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
    console.log('Calling action');
  };

  const handleWhatsappClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    console.log('WhatsApp action');
  };

  return (
    <div className="floating-buttons">
      <div className="floating-button call-button" onClick={handleCallClick}>
        <FaPhoneAlt size={20} />
      </div>
      <div className="floating-button whatsapp-button" onClick={handleWhatsappClick}>
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default FloatingButtons;
