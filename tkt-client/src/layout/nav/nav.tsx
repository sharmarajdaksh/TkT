import React, { ReactElement } from "react";

import AppConfig from "../../config";

import navStyles from "./nav.module.scss";

const Nav = (): ReactElement => {
  return (
    <nav className={navStyles.nav_shell}>
      <div className={navStyles.nav_title}>{AppConfig.appTitle}</div>
      <div className={navStyles.nav_actions}></div>
    </nav>
  );
};

export default Nav;
