import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "~/theme";
import { Store } from "./context";

ReactDOM.render(
  <ThemeProvider>
    <Store>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Store>
  </ThemeProvider>,
  document.getElementById("root")
);
