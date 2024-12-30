import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {  GlobalStyle } from "./styles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { ScrollProvider } from "./context/contextScroll/ScrollContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
      </ThemeProvider>
    </ScrollProvider>
  </StrictMode>
);
