import React from "react";
import { theme, GlobalStyle } from "../../global-styles";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
