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
                  <h3>+15</h3>
                  <p>Anos no Mercado</p>
                </div>
                <div style={{ margin: "20px" }}>
                  <h3>1º</h3>
                  <p>Em pós-venda da região</p>
                </div>
                <div style={{ margin: "20px" }}> 
                  <h3>+500</h3>
                  <p>Empresas Atendidas</p>
                </div>
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
