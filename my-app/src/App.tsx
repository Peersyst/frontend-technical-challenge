import React from "react";
import "./App.css";
import theme from "./utils/theme";
import AppRouter from "./utils/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import styled, { ThemeProvider } from "styled-components";
const BackgroundComponent = styled.div`
	background-color: ${(props) => props.theme.background};
	overflow-x: hidden;
	min-height: 100vh;
	height: auto;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BackgroundComponent>
				<Navbar />
				<AppRouter />
			</BackgroundComponent>
		</ThemeProvider>
	);
}

export default App;
