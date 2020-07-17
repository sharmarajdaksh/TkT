import React from "react";
import Nav from "../nav/nav";

interface Props {
  children?: React.ReactNode;
}

const Skeleton = (props: Props): React.ReactElement => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default Skeleton;
