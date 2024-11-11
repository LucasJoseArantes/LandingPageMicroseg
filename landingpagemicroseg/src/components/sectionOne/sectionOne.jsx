import Button from "../button";
import "./sectionOne.css";

const SectionOne = () => {
  return (
    <section className="sectionOne" >
      <div className="sectionOneConatiner">
        <div className="mainTitle">
          <h1>
            Entre em contato e faça seu orçamento conosco!
          </h1>
          <img src="" alt="" />
          <h2>
            Somos a Distribuidora referência em equipamentos de segurança, informática e sonorização.
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
