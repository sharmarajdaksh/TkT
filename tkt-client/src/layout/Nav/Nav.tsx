import React from "react";

import navStyles from "./Nav.module.scss";

const Nav = (): React.ReactElement => {
  return (
    <nav className={navStyles.nav_shell}>
      <ul>
        <li>Home</li>
        <li>Knowledgebase</li>
        <li>Create Ticket</li>
        <li>Check Status</li>
      </ul>
    </nav>
  );
};

export default Nav;
