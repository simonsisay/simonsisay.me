import React from "react";
import { Container } from "./styles";
import Particles from "react-particles-js";
import Logo from "../Logo";
import {
  TiSocialGithub,
  TiSocialTwitter,
  TiSocialLinkedin
} from "react-icons/ti";
import NotificationFlag from "../NotificationFlag";

const ComingSoon = () => {
  return (
    <Container>
      <div className="notification">
        <NotificationFlag />
      </div>
      <div className="particles-container">
        <Particles
          style={{ width: "100%", height: "100%" }}
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#7abdd6",
                  blur: 1
                }
              }
            }
          }}
        />
      </div>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="content">
        <div className="description">
          <h1>Hi, I'm Simon </h1>
          <h3>Frontend Developer</h3>
          <div className="links">
            <a
              rel="noopener noreferrer"
              href={"https://github.com/simonsisay"}
              target="_blank"
            >
              <TiSocialGithub className="icon" />
            </a>
            <a
              rel="noopener noreferrer"
              href={"https://twitter.com/sisay_simon"}
              target="_blank"
            >
              <TiSocialTwitter className="icon" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/simon-sisay-446181187/"
              target="_blank"
            >
              <TiSocialLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComingSoon;
