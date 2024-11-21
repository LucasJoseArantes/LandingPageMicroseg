import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../contact/sectionContact.css";
import FadeSubTitle from "../fadeTitle/fadesubTitle";

const SectionContact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    city: "",
    segments: [],
  });

  const [isSending, setIsSending] = useState(false); // Controle do estado de envio
  const [successMessage, setSuccessMessage] = useState("");

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormState({
          ...formState,
          segments: [...formState.segments, value],
        });
      } else {
        setFormState({
          ...formState,
          segments: formState.segments.filter((segment) => segment !== value),
        });
      }
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  // Função para enviar o formulário por e-mail
  const addCRM = (e) => {
    e.preventDefault();
    setIsSending(true);

    const { name, phone, city, segments } = formState;

    emailjs
      .send(
        "service_srotgxk", // Substitua pelo seu Service ID
        "template_8s5r36f", // Substitua pelo seu Template ID
        {
          name,
          phone,
          city,
          segments: segments.join(", "), // Converter array em string separada por vírgulas
        },
        "CwWICS6tSKLnVk76_" // Substitua pelo seu User ID
      )
      .then(
        (response) => {
          setIsSending(false);
          setSuccessMessage("Formulário enviado com sucesso!");
          setFormState({ name: "", phone: "", city: "", segments: [] });
        },
        (error) => {
          setIsSending(false);
          alert("Erro ao enviar o formulário. Tente novamente.");
          console.error("Erro:", error);
        }
      );
  };

  const segmentsList = [
    "Controle de Acesso",
    "Alarme",
    "CFTV",
    "Concertina",
    "Motor",
    "Informática",
    "Sonorização",
    "Outros",
  ];

  return (
    <section className="sectionContact" id="contact">
      <div className="contactContent">
        <div className="contactTitle">
          <FadeSubTitle className="sectionTitle" text={"Fale Conosco"} />
          <p className="sectionSubtitle">
            Deixe o seus dados e entraremos em contato!
          </p>
        </div>

        <form className="contactForm" onSubmit={addCRM}>
          <div className="formGroup">
            <label htmlFor="name">Nome da Empresa</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Preencha com seu nome"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="(yy) xxxxx-xxxx"
              value={formState.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Preencha com a cidade"
              value={formState.city}
              onChange={handleChange}
              required
            />
          </div>

          <label>Segmentos de atuação</label>
          <div className="formGroup segments">
            {segmentsList.map((segment) => (
              <div key={segment}>
                <label>
                  <input
                    type="checkbox"
                    name="segments"
                    value={segment}
                    checked={formState.segments.includes(segment)}
                    onChange={handleChange}
                  />
                  {segment}
                </label>
              </div>
            ))}
          </div>

          <button type="submit" className="button" disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar"}
          </button>
          {successMessage && <p className="successMessage">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
