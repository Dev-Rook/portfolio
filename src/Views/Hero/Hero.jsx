import React from "react";
import Styles from "./Styles/Hero.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <div className={Styles.Hero}>
      <div className={Styles.Content_Box}>
        <p className={Styles.Small_Text}>Hi, I'm</p>
        <h1 className={Styles.Large_Text}>
          Daniel <span className={Styles.Red_R}>R</span>ook
        </h1>
        <p className={Styles.Small_Text}>React Developer</p>
        <div className={Styles.Social_Icon_Bar}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dev-rook/"
            className={Styles.Social_Icon_Link}
          >
            <LinkedInIcon className={Styles.Social_Icon} />
          </a>
        </div>
        <button className={Styles.Contact_Button}>Contact</button>
      </div>
    </div>
  );
};

export default Hero;
