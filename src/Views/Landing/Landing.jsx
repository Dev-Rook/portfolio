import React from "react";
import Styles from "./Styles/Landing.module.css";

import Hero from "../Hero/Hero";
import Featured from "../../Components/Project-Data/Featured/Featured";
import Other from "../../Components/Project-Data/Other/Other";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Hero />
      <div className={Styles.Slider_Container}>
        <Featured />
        <Other />
      </div>
    </div>
  );
};

export default Landing;
