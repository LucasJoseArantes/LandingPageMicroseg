import React from "react";
import "./sectionCampaign.css";
import FadeTitle from "../fadeTitle/fadeTitle";

const brands = [
    { name: "UNV", image: "/assets/1.png" },
    { name: "Frahm", image: "/assets/3.png" },
    { name: "JFL", image: "/assets/4.png" },
    { name: "Megatron", image: "/assets/5.png" },
    { name: "Control iD", image: "/assets/6.png" },
    { name: "BringIT", image: "/assets/8.png" },
    { name: "Prime", image: "/assets/9.png" },
    { name: "BringIT", image: "/assets/10.png" },
    { name: "JFL", image: "/assets/11.png" },
    { name: "MDX", image: "/assets/2.png" },
  ];

const SectionCampaign = () => (
  <section className="sectionCampaign" id="sectionCampaign">
    <div className="mainImage">
      <FadeTitle title="Marcas Parceiras" />
    </div>

    <div className="grid-container grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-2 sm:gap-y-3 md:gap-y-4">

      {brands.map((brand, index) => (
        <div
          key={index}
          className="brand-card  bg-center w-full h-40 "
          style={{ backgroundImage: `url(${brand.image})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}
        >
        </div>
      ))}
    </div>
  </section>
);

export default SectionCampaign;
