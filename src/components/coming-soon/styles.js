import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 50px;
  background: #000;

  .content {
    width: 100%;
    height: 100%;
    margin-top: -100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-family: "PT Sans Caption", sans-serif;
      font-weight: 800;
      font-size: 4em;
      color: #fff;
      margin: 0px;
      padding: 0px;
    }

    p {
      font-family: "PT Sans Caption", sans-serif;
      padding-left: 8px;
      font-size: 20px;
      font-weight: lighter;
      color: #bfc9c6;
      max-width: 600px;
      line-height: 30px;

      a {
        color: #3ebcbc;
      }
    }

    .contact {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      img {
        width: 400px;
        height: 260px;
      }
    }

    @media (max-width: 713px) {
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 3em;
      }

      p {
        max-width: 300px;
      }
    }
  }
`;
