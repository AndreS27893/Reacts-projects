import React from "react";
import "./Slider.css";
import eCommerce from "../../media/eCommerce.jpg"
import formularioPage from "../../media/formularioPage.jpg"
import tributo from "../../media/tributo.jpg"
const slidesInfo = [
  {
    src:{eCommerce},
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    src:
      {formularioPage},
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src:
      {tributo},
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;