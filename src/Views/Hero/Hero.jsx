import React from "react";
import Styles from "./Styles/Hero.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const Hero = () => {
  return (
    <div className={Styles.Hero}>
      <div className={Styles.Hero_Board}></div>
      <div className={Styles.Content_Box}>
        <p className={Styles.Small_Text}>Hi, I'm</p>
        <h1 className={Styles.Large_Text}>
          Daniel <span className={Styles.Red_R}>R</span>ook
        </h1>
        <p className={Styles.Small_Text}>React Developer</p>
        {/* <button className={Styles.Contact_Button}>Contact</button> */}
      </div>

      <div className={Styles.Info}>
        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>BIO</h3>
          <p className={Styles.Bio_Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            odio impedit sit sapiente possimus explicabo modi quia earum
            repellendus nostrum.
          </p>
        </div>

        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>On The Web</h3>
          <div className={Styles.Web_Profiles}>
            <a target={"_blank"} href="https://www.linkedin.com/in/dev-rook/" className={Styles.WebLink}>
              <LinkedInIcon />
              Daniel Brown
            </a>
            <a target={"_blank"} href="https://github.com/Dev-Rook" className={Styles.WebLink}>
              <GitHubIcon />
              Dev-Rook
            </a>
            <a target={"_blank"} href="https://twitter.com/Dev_Rook" className={Styles.WebLink}>
              <TwitterIcon />
              Dev_Rook
            </a>
            <a target={"_blank"} href="https://rxresu.me/dev.rook121/developer-resume" className={Styles.WebLink}>
              <InsertLinkIcon />
              Developer Resume
            </a>
          </div>
        </div>

        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>Technologies Used</h3>
          <div className={Styles.Tech}>
            <div className={Styles.Tech_Card}>
              <img src={require("../../Assets/Icons/Html-Icon.png")} alt="" className={Styles.Tech_Image} />
            </div>
            <div className={Styles.Tech_Card}>
              <img src={require("../../Assets/Icons/Css-Icon.png")} alt="" className={Styles.Tech_Image} />
            </div>
            <div className={Styles.Tech_Card}>
              <img src={require("../../Assets/Icons/Scss-Icon.png")} alt="" className={Styles.Tech_Image} />
            </div>
            <div className={Styles.Tech_Card}>
              <img src={require("../../Assets/Icons/JavaScript-Icon.png")} alt="" className={Styles.Tech_Image} />
            </div>
            <div className={Styles.Tech_Card}>
              <img src={require("../../Assets/Icons/React-Icon.png")} alt="" className={Styles.Tech_Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
