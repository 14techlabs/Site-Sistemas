import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BackTo14tech } from "./components/BackTo14tech";
import "./tailwind.css";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <BackTo14tech />
  </StrictMode>,
);