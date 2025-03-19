import "./heroSection.css";
import heroImage from "../../../public/assets/hero.jpg";

export default function HeroSection() {
  return (
    <section class="hero-section">
      <div class="hero-section__content ">
        <div>
          <div class="hero-section__text ">
            <h1 class="hero-section__title text-5xl font-bold tracking-tight text-balance sm:text-5xl" >
              Tecnologia Avançada para sua Empresa
            </h1>
            <p class="hero-section__description mt-8 text-lg font-medium text-pretty sm:text-xl/8">
              Somos a Distribuidora referência em equipamentos de {" "}
              <strong>segurança eletrônica, informática e sonorização.</strong>
            </p>
          </div>
          <div class="cta-container">
            <button>Seja um parceiro</button>
            <p class="mt-8 text-lg font-medium text-pretty sm:text-x3/6">
              Fale com um especialista e descubra as melhores opções para você.
            </p>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Técnico sorrindo" />
        </div>
      </div>
    </section>
  );
}
