import React from "react";
import Styles from "./Styles/Landing.module.css";

import Hero from "../Hero/Hero";
import Featured from "../../Components/Project-Data/Featured/Featured";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Hero />
      <Featured />
    </div>
  );
};

export default Landing;
