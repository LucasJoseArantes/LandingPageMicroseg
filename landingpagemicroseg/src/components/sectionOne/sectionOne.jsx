import Button from "../button";
import "./sectionOne.css";
import { useEffect, useState } from 'react';
import FadeTitle from '../fadeTitle/fadeTitle';
import FadeSubTitle from '../fadeTitle/fadesubTitle';

const images = [
  'url(/assets/images/bdg/1.png)',
  'url(/assets/images/bdg/2.png)',
  'url(/assets/images/bdg/3.png)',
  'url(/assets/images/bdg/4.png)',
];

const titulos = [
  'Soluções de amanhã, ao seu alcance hoje. Entre em contato e faça um orçamento conosco!',
  "Fornecendo a segurança que seu projeto precisa, com a qualidade que seus clientes exigem.",
  "Tudo para manutenção de Notebooks a pronta entrega!",
  'Sons precisos e potentes para transformar qualquer ambiente com qualidade profissional.',
  'Controle eficiente e seguro, perfeito para soluções de alta performance.'
];


const SectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="sectionOne"
      style={{ backgroundImage: images[currentIndex] }}
    >
      <div className="sectionOneContainer">
        <div className="mainTitle">
          <FadeTitle title={titulos[currentIndex]} />
          <FadeSubTitle text="Somos a Distribuidora referência em equipamentos de segurança, informática e sonorização." />
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
