import React, { useState } from "react";
import Styles from "./Styles/Nav.module.css";

import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className={Styles.Nav}>
      <img
        src={require("../../Assets/Icons/Menu-Icon.png")}
        alt=""
        onClick={toogleMenu}
        className={Styles.Nav_Icon}
      />

      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}>
        <div className={Styles.Header}>
          <CloseIcon className={Styles.CloseIcon} sx={{fontSize: 30}} onClick={toogleMenu}/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
