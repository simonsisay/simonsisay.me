import React from "react";
import { LogoHeader } from "./styles";

const Logo = () => {
  return (
    <LogoHeader
      activeStyle={{ color: "#ef0d33" }}
      swipe
      direction="left"
      to="/"
      duration={0.9}
    >
      {"<Si/>"}
    </LogoHeader>
  );
};

export default Logo;
