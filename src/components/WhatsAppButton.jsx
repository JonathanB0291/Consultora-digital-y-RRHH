import { useState } from 'react';
import { FiMessageCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_2 } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const numbers = [
    { number: WHATSAPP_NUMBER, label: 'Soporte 1' },
    { number: WHATSAPP_NUMBER_2, label: 'Soporte 2' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-button-wrapper">
        <a
          href={`https://wa.me/${numbers[0].number}?text=${encodeURIComponent(t('whatsapp.message'))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Contactar por WhatsApp"
          onClick={closeDropdown}
        >
          <FiMessageCircle className="whatsapp-icon" />
          <span className="whatsapp-tooltip">{t('whatsapp.tooltip')}</span>
        </a>
        
        <button 
          className="whatsapp-dropdown-toggle"
          onClick={(e) => {
            e.stopPropagation();
            toggleDropdown();
          }}
          aria-expanded={isOpen}
          aria-label="Ver más opciones de contacto"
        >
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        {isOpen && (
          <div className="whatsapp-dropdown">
            {numbers.map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/${item.number}?text=${encodeURIComponent(t('whatsapp.message'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-dropdown-item"
                onClick={closeDropdown}
              >
                {item.label}: {item.number}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;

