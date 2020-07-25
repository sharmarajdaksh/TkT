import React from "react";

import AppConfig from "../../config";

import headerStyles from "./Header.module.scss";

const Header = (): React.ReactElement => {
  return (
    <nav className={headerStyles.header_shell}>
      <div className={headerStyles.header_title}>{AppConfig.appTitle}</div>
      <div className={headerStyles.header_actions}>
        <ul>
          <li>User Login</li>
          <li>Admin Panel</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
