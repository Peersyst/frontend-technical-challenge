import ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <Router />
    </StrictMode>
);
