import { useEffect, useState } from "react";
import "./sectionOne.css";
import Button from "../button";

const images = ["unv", "mdx", "agl" , "bringit", "frahm" , "controlid"];

const titulos = [
  "Soluções de amanhã, ao seu alcance hoje. Entre em contato e faça um orçamento conosco!",
  "Fornecendo a segurança que seu projeto precisa, com a qualidade que seus clientes exigem.",
  "Velocidade, força e segurança na aberura de portões. Opções inteligentes e eficientes.",
  "Tudo para manutenção de Notebooks. Proutos com qualidade e garantia.",
  "Sons precisos e potentes para transformar qualquer ambiente com qualidade profissional.",
  "Controle eficiente e seguro, perfeito para soluções de alta performance."
];

const SectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Tempo para aplicar o efeito de saída
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="sectionOne">
      <div className="sectionOneContainer">
        <div className="imgContainer">
          <img
            src={`/assets/images/bdg/${images[currentIndex]}.png`}
            alt=""
            className={isTransitioning ? "" : "active"}
          />
        </div>
        <div className="mainTitle">
          <h1 className={!isTransitioning ? "active" : ""}>
            {titulos[currentIndex]}
          </h1>
          <h2 className={!isTransitioning ? "active" : ""}>
            Somos a Distribuidora referência em equipamentos de segurança,
            informática e sonorização.
          </h2>
          <div className="partherBtn">
            <Button
              text="Seja um parceiro"
              nextSection="#sectionTwo"
              link="https://wa.me/+5534996506345"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
