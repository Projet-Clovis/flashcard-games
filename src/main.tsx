import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./shared/components/App.tsx";

const rootEl = document.getElementById("root");

if (!rootEl) {
    throw new Error("Missing root element");
}

createRoot(rootEl).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
