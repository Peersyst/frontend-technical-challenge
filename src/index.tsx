import ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import Router from "./Router";
import { useLoad } from "hooks/useLoad";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App = () => {
    const loading = useLoad();

    return <StrictMode>{!loading && <Router />}</StrictMode>;
};

root.render(<App />);
