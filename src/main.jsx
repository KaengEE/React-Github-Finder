import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GithubProvider } from "./context/github/GithubContext.jsx";
import { AlertProvider } from "./context/alert/AlertContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GithubProvider>
    <AlertProvider>
      <App />
    </AlertProvider>
  </GithubProvider>
);
