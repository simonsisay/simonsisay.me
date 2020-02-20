import React from "react";
import { theme, GlobalStyle } from "../../global-styles";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>{children}</>
    </ThemeProvider>
  );
};

export default Layout;
