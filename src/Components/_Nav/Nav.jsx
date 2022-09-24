import React, { useState } from "react";
import Styles from "./Styles/Nav.module.css";

import { Link } from "react-router-dom";

// import Accordion from "react-bootstrap/Accordion";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import HeroSlider from "../Sliders/Hero-Slider/HeroSlider";
import Featured from "../Project-Data/Featured/Featured";
import Social from "../Sliders/Social/Social";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <Link to="/">
          {/* <img
          src={require("../../Assets/Icons/Logo.png")}
          alt=""
          className={Styles.Logo}
        /> */}
        </Link>

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link to="/" className={Styles.Navlink}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to="#" className={Styles.Navlink}>
              Portfolio
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to="#" className={Styles.Navlink}>
              Posts
            </Link>
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
            <Link to="/" className={Styles.Navlink}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to="#" className={Styles.Navlink}>
              Portfolio
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to="#" className={Styles.Navlink}>
              Posts
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to="#" className={Styles.Navlink}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={Styles.Social_Icon_Bar}>
          <LinkedInIcon className={Styles.Social_Icon} />
          <GitHubIcon className={Styles.Social_Icon} />
          <TwitterIcon className={Styles.Social_Icon} />
          <InsertLinkIcon className={Styles.Social_Icon} />
        </div>

        <Social />
      </div>
    </nav>
  );
};

export default Nav;
