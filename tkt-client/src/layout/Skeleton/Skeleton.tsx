import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

import skeletonStyles from "./Skeleton.module.scss";

interface Props {
  children?: React.ReactNode;
}

const Skeleton = (props: Props): React.ReactElement => {
  return (
    <main className={skeletonStyles.skeleton_shell}>
      <Header />
      <Nav />
      {props.children}
    </main>
  );
};

export default Skeleton;
