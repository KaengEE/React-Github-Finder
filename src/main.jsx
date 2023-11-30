import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GithubProvider } from "./context/github/GithubContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GithubProvider>
    <App />
  </GithubProvider>
);
