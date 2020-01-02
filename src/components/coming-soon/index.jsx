import React from "react";
import { Container } from "./styles";
import Particles from "react-particles-js";

const ComingSoon = () => {
  return (
    <Container>
      <div className="content">
        <div className="description">
          <h1>Coming soon 🚧</h1>
          <p>
            Thank you for taking interest in checking out my website.
            Unfortunately, the site is currently in development mode. You can
            say hello on <a href="https://twitter.com/sisay_simon">twitter</a>{" "}
            or follow me on <a href="https://github.com/simonsisay">github</a>{" "}
            to learn about me.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ComingSoon;
