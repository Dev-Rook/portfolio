import React, { useState } from "react";
import Styles from "./Styles/Nav.module.css";

// import Accordion from "react-bootstrap/Accordion";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HeroSlider from "../Sliders/Hero-Slider/HeroSlider";

import Featured from "../Project-Data/Featured/Featured";

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
        <img src={require("../../Assets/Icons/Logo.png")} alt="" className={Styles.Logo} />

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
        <div className={Styles.Header}>
        <img src={require("../../Assets/Icons/Logo.png")} alt="" className={Styles.Logo} />

          <CloseIcon
            className={Styles.CloseIcon}
            sx={{ fontSize: 30 }}
            onClick={toogleMenu}
          />
        </div>

        <div className={Styles.Profile_Section}>
          <HeroSlider />
        </div>

        <div className={Styles.MenuLink_Container}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={Styles.Accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Portfolio
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className={Styles.Accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Contact
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Featured />

      </div>
    </nav>
  );
};

export default Nav;
