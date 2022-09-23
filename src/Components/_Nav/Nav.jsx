import React, { useState } from "react";
import Styles from "./Styles/Nav.module.css";

// import Accordion from "react-bootstrap/Accordion";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HeroSlider from "../Sliders/Hero-Slider/HeroSlider";

import Featured from "../Project-Data/Featured/Featured";
import Youtube from "../Sliders/YouTube/Youtube";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu((prev) => !prev);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <img
          src={require("../../Assets/Icons/Logo.png")}
          alt=""
          className={Styles.Logo}
        />

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Home
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Portfolio
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Posts
            </a>
          </li>
        </ul>
      </div>

      <div className={Styles.Right_Side}>
        <BrightnessMediumIcon
          sx={{ fontSixe: 30 }}
          className={Styles.ModeIcon}
        />

        <MenuIcon
          sx={{ fontSixe: 40 }}
          onClick={toogleMenu}
          className={Styles.Nav_Icon}
        />
      </div>

      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Home
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Portfolio
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Posts
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Contact
            </a>
          </li>
        </ul>

        <div className={Styles.Social_Icon_Bar}>
            <LinkedInIcon className={Styles.Social_Icon} />
            <GitHubIcon className={Styles.Social_Icon} />
            <TwitterIcon className={Styles.Social_Icon} />
            <InsertLinkIcon className={Styles.Social_Icon} />
          </div>

        {/* <Youtube /> */}
      </div>
    </nav>
  );
};

export default Nav;
