import React from "react";
import Button from "../button";
import "../US/sectionUs.css";
import PointsBox from "./pointsBox";
import FadeTitle from "../fadeTitle/fadeTitle";

const WhyChooseUs = () => {
  return (
    <section className="sectionUs sucessImg">
      <div className="usMainContainer">
        <FadeTitle title=" Por que escolher a MicroSeg Distribuidora?"/>
          <div >
            <div>
              <div className="numbersContainer">
                <div style={{ margin: "20px" }}>
                  <h3>+14</h3>
                  <p>Anos no Mercado</p>
                </div>
                <div style={{ margin: "20px" }}>
                  <h3>1º</h3>
                  <p>Melhor pós-venda da região</p>
                </div>
                <div style={{ margin: "20px" }}> 
                  <h3>+500</h3>
                  <p>Empresas Atendidas</p>
                </div>
              </div>
              <div className="aboutUs-container">
                <p>
                A Microseg teve sua origem em 2010, inicialmente dedicada à instalação de sistemas de segurança eletrônica e informática. 
                </p>
                <br />
                <p>
                Com o tempo, evoluímos para nos tornarmos uma distribuidora consolidada no mercado. Hoje, como distribuidores especializados, estamos focados em fornecer as melhores soluções de segurança eletrônica e informática para nossos clientes.
                </p>
                <br />
                <p> Oferecemos não apenas os melhores preços, mas também um serviço pós-venda excepcional, garantindo a satisfação e a segurança de quem confia em nós.
                </p>
              </div>
            <PointsBox />
            <Button text="Solicitar Orçamento Agora" link="https://wa.me/+5534996506345"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
