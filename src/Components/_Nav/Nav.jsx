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
        <p className={Styles.Brand}>Dev Rook</p>

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
          <CloseIcon
            className={Styles.CloseIcon}
            sx={{ fontSize: 30 }}
            onClick={toogleMenu}
          />
        </div>

        <ul className={Styles.MenuLink_Container}>
          <li className={Styles.MenuLink_Item}></li>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                General settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                I am an accordion
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
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Users
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Advanced settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
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
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal data
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
