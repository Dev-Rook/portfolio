import React from "react";
import Styles from "./Styles/Landing.module.css";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

        <button className={Styles.Portfolio_Button}>
          Portfolio
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Landing;
