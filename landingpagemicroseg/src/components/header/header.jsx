import React, { useState } from "react";
import "./header.css";
import whiteLogo from "../../assets/images/logos/whiteLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headerContainer">
      <div className="logo-container">
        <img src={whiteLogo} alt="MicroSeg Distribuidora" />
      </div>

      <div className="nav-container ">
      <button 
        className="hamburger md:hidden" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
        <ul className={`nav-menu ${menuOpen ? "open" : "closed"}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fale Conosco</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <details>
              <summary>Produtos</summary>
              <ul className="dropdown-menu">
                <li><a href="#">Segurança Eletrônica</a></li>
                <li><a href="#">Informática</a></li>
                <li><a href="#">Sonorização</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
