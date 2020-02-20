import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .notification {
    position: absolute;
    bottom: 14px;
    right: 1px;
  }

  .particles-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100%;
  }

  .logo-container {
    position: absolute;
    top: 20px;
    left: 40px;
  }

  .content {
    width: 100vw;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      font-family: "AvenirLTPro-Heavy";
      font-weight: 900;
      font-size: 7em;
      color: #f2efef;
      margin: 0px;
      padding: 0px;
      text-shadow: 4px 4px 12px #252525;
      text-transform: uppercase;
    }

    h3 {
      color: #707070;
      text-align: center;
      font-size: 2.8em;
      margin: 0px;
      font-family: "Poiret One", cursive;
      letter-spacing: 2px;
    }

    .links {
      display: flex;
      justify-content: center;
      margin-top: 10px;

      .icon {
        font-size: 40px;
        color: #707070;
        margin-right: 30px;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
    }

    @media (max-width: 950px) {
      justify-content: center;
      align-items: center;
      overflow: hidden;

      h1 {
        font-size: 5em;
        text-align: center;
      }

      h3 {
        width: 100%;
        font-size: 1.6em;
      }
    }
  }
`;
