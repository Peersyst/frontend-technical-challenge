import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Home from "./screens/Home";

// const MuiTableCell = withStyles({
//   root: {
//     borderBottom: "none",
//     color: "white",
//   },
// })(TableCell);

const AppWrapper = styled.div`
  width: 100%;
  background-color: black;
  background-size: cover;
`;

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/:id/*" element={<Home />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
