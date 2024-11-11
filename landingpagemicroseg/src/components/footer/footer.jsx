import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope , FaMapMarkerAlt, FaPhone  } from "react-icons/fa";
import "../footer/footer.css";
import logo150px from '../../assets/images/logos/logo150px.png';

const Footer = () => {
  const handleClick = () => {
    const header = document.querySelector('.navbar');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'navbar' not found.");
    }
  };

  return (
    <footer className="footer">
      <div className="footerContainer">
      <div className="mapFooter">
        <div className="contactDetails">
          <span> <FaMapMarkerAlt></FaMapMarkerAlt>  Rua Salvador 1273 - Nossa Sra. Aparecida, Uberlândia MG</span>
          <span> <FaEnvelope></FaEnvelope>  contato@microseguranca.com.br</span>
          <span> <FaPhone></FaPhone> (34) 3083-1323 </span>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15098.390693153042!2d-48.2627705!3d-18.9049215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445b095b76cfb%3A0x7c3ed864bdd16a82!2sMicroSeg%20Distribuidora!5e0!3m2!1spt-BR!2sbr!4v1731172957750!5m2!1spt-BR!2sbr"
          width="400"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
      <div className="footerContent">
        <div>
          <img className="logo" src={logo150px} alt="MicrosegDistribuidora" onClick={handleClick} />
          <hr />
          <p>Copyright © - MicroSeg Distribuidora - Todos os direitos Reservados</p>
        </div>

        <div className="socialIcons">
          <a href="https://wa.me/+5534996506345" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/microsegdistribuidora/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
