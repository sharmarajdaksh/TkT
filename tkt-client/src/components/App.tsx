import React from "react";

import appStyles from "./App.module.scss";

import Skeleton from "../layout/skeleton/skeleton";

function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.container}>
        <Skeleton>
          <p>Hello I'm a child</p>
          <p>I'm also a child !</p>
        </Skeleton>
      </div>
    </div>
  );
}

export default App;
