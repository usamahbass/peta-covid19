import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "~/theme";
import { AppContextProvider } from "./context";

ReactDOM.render(
  <ThemeProvider>
    <AppContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
