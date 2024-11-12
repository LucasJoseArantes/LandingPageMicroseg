import React, { useState } from "react";
import axios from "axios";
import "../contact/sectionContact.css";
import FadeSubTitle from "../fadeTitle/fadesubTitle";

const SectionContact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    city: "",
    segments: [], // Armazenar múltiplas seleções
  });

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        // Adiciona o segmento selecionado ao array
        setFormState({
          ...formState,
          segments: [...formState.segments, value],
        });
      } else {
        // Remove o segmento desmarcado do array
        setFormState({
          ...formState,
          segments: formState.segments.filter((segment) => segment !== value),
        });
      }
    } else {
      // Para outros campos (ex: name, phone)
      setFormState({ ...formState, [name]: value });
    }
  };

  // Função para enviar o formulário
  const addCRM = (e) => {
    e.preventDefault(); // Evita o reload da página

    const notionApiUrl = "https://api.notion.com/v1/pages";
    const notionToken = "secret_aoRIk9UkX2ZX0hj1etd2t4iDZf5jw7ofBmxnNhV1wCf";
    const headers = {
      Authorization: `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    };

    const data = {
      parent: {
        database_id: "1308d3c2b39980d9a6b3d9614f9b52e5", 
      },
      icon: {
        type: "emoji",
        emoji: "👤",
      },
      properties: {
        Nome: {
          title: [
            {
              type: "text",
              text: {
                content: formState.name, 
                link: null,
              },
            },
          ],
        },
        Telefone: {
          phone_number: formState.phone, 
        },
        Segmentos: {
          multi_select: formState.segments.map((segment) => ({ name: segment })),
        },
      },
    };

    axios
      .post(notionApiUrl, data, { headers })
      .then((response) => {
        alert("Dados enviados com sucesso!");
      })
      .catch((error) => {
        alert("Erro ao enviar dados. Tente mais tarde");
      });
  };

  const segmentsList = [
    "Controle de Acesso",
    "Alarme",
    "CFTV",
    "Concertina",
    "Motor",
    "Informática",
    "Sonorização",
    "Outros"
  ];

  return (
    <section className="sectionContact" id="contact">
      <div className="contactContent">
        <div className="contactTitle">
            <FadeSubTitle className="sectionTitle" text={"Fale Conosco"}/>
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
          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
