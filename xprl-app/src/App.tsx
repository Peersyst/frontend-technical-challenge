/** @format */

import React from "react";
// import loader from './assets/xrp-loader.png'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AccountDetail } from "./components/AccountDetail/AccountDetail";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404/Page404";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/accounts/:address/*"
                    element={<AccountDetail />}
                />
            </Routes>
        </>
    );
}

export default App;
