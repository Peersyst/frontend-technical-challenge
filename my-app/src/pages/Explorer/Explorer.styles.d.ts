import styled from "styled-components";

interface TabDivProps {
	readonly selected?: boolean;
}

interface BalanceTextProps {
	readonly small?: boolean;
}

const ExplorerDiv = styled.div`
	height: 100%;
	background-color: black;
	max-width: 1200px;
	margin: 0 auto;
	color: white;
`;

const XRPBalanceDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 8px;
	line-height: 8px;
`;

const BalanceText = styled.span<BalanceTextProps>`
	display: flex;
	align-items: center;
	font-size: ${(props) => (props.small ? "1em" : "1.5em")};
	${(props) => props.small && "font-weight: bold;"};

	&:before {
		display: inline-block;
		background-color: #ffffff;
		background-size: 100%;
		width: 1.5em;
		height: 1.5em;
		margin-right: 4px;
		content: "";
		-webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVR4nO2ZyW7UQBCGO3e4AQ8ArnIUAriqg6scIbFd4cQS9vUAAUXsO4QrD4HgQVheAHiNELghbiwDaktzgCmHWWyPR/iTWmqN7fb/j93dVWXnWlpaWlrKBEnuIeuvPxrJj5j1pKuJOEkPA+m3Hh2sT/saAEnvWiaQ5FTl4n12pED88kADAesd20R6uirxyHoUSL733NfLk6EGBE5vWyYg0TN1iQeSxyMNDF5umSa8ni1LPJAcKxD/qJQbIMlN4538CSznKhPP+tCVCZLeMEx00Mvi0OKT7Hg+r3rFP3BVgKzXc9F/m2C5MuhYMWUXwlM0Jux9VyVAesk2kV7tdwxM9KIhvhOzXHN1AKRLtol8o5la49KpsJ5b1wLpkquT8I8bQsIK9QFJFuL5+fXdc0M//JYfs+YR9//0yjXhZdE00V2lSD8C6Yr5rpewCJRCxNkBJP1SILCwAcvXEPO4JrBlx86twPK6fwPyKkrSGdc0Yp/uBZbnSLraOzd0NRyLvexxk0CU7No4PZfNhobebxi3npaJY/P2bFPsdVtooe8mAaRsP5K+RJbPxsrzCVlfIKf7XNOYnstmgfRt33sA6Zuw9LomEJEenNiNDNcKJULWRrqShxJGzD/2UAILgjlgfR8qCzMzu9d1zw39vNrA+q4RwRwUh9PL/wqnQ5I+1nA6Ir08alZWkI11Kk9oClPKId7jiOR8rSllUVIfnkjjk3qwakMhYSmhNgRV14QKq3MlFraQZKGaqlyN9VEsuy46jgp1nFemDRODVqbH+Y0gHv3bgC0+8nrC1UREcsgyAazP6tLQ0tLS8p/wG65VXwAZyFfSAAAAAElFTkSuQmCC)
			no-repeat 50% 50%;
		mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVR4nO2ZyW7UQBCGO3e4AQ8ArnIUAriqg6scIbFd4cQS9vUAAUXsO4QrD4HgQVheAHiNELghbiwDaktzgCmHWWyPR/iTWmqN7fb/j93dVWXnWlpaWlrKBEnuIeuvPxrJj5j1pKuJOEkPA+m3Hh2sT/saAEnvWiaQ5FTl4n12pED88kADAesd20R6uirxyHoUSL733NfLk6EGBE5vWyYg0TN1iQeSxyMNDF5umSa8ni1LPJAcKxD/qJQbIMlN4538CSznKhPP+tCVCZLeMEx00Mvi0OKT7Hg+r3rFP3BVgKzXc9F/m2C5MuhYMWUXwlM0Jux9VyVAesk2kV7tdwxM9KIhvhOzXHN1AKRLtol8o5la49KpsJ5b1wLpkquT8I8bQsIK9QFJFuL5+fXdc0M//JYfs+YR9//0yjXhZdE00V2lSD8C6Yr5rpewCJRCxNkBJP1SILCwAcvXEPO4JrBlx86twPK6fwPyKkrSGdc0Yp/uBZbnSLraOzd0NRyLvexxk0CU7No4PZfNhobebxi3npaJY/P2bFPsdVtooe8mAaRsP5K+RJbPxsrzCVlfIKf7XNOYnstmgfRt33sA6Zuw9LomEJEenNiNDNcKJULWRrqShxJGzD/2UAILgjlgfR8qCzMzu9d1zw39vNrA+q4RwRwUh9PL/wqnQ5I+1nA6Ir08alZWkI11Kk9oClPKId7jiOR8rSllUVIfnkjjk3qwakMhYSmhNgRV14QKq3MlFraQZKGaqlyN9VEsuy46jgp1nFemDRODVqbH+Y0gHv3bgC0+8nrC1UREcsgyAazP6tLQ0tLS8p/wG65VXwAZyFfSAAAAAElFTkSuQmCC)
			no-repeat 50% 50%;
		-webkit-mask-size: cover;
		mask-size: cover;
	}
`;

const XRPBalanceText = styled.span`
	font-size: 1em;
`;

const AccountInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 8px;
	line-height: 20px;
	align-items: flex-end;
	font-size: 13px;
	& > span#title {
		font-size: 15px;
	}
`;

const GeneralInfoDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

const ReserveDiv = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

const MenuTabsDiv = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.tabs.primary};
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-top: 1px solid ${(props) => props.theme.tabs.noSelected};
`;

const TabDiv = styled.div<TabDivProps>`
	padding: 24px 24px 0px;
	cursor: pointer;
	background-color: ${(props) => props.theme.tabs.primary};
	border-top: 2px solid
		${(props) =>
			props.selected ? props.theme.tabs.selected : "transparent"};
	${(props) => props.selected && "font-weight: bold;"}
	&:hover {
		font-weight: bold;
	}
`;

const HeaderExplorerDiv = styled.div`
	padding-bottom: 30px;
`;

const HeaderIdDiv = styled.div`
	margin-top: 106px;
	margin-bottom: 80px;
	margin-left: 12px;
	& > h1 {
		font-size: 45px;
	}
`;

const TabsMenuAndContent = styled.div`
	margin-left: 5px;
`;

export {
	ExplorerDiv,
	XRPBalanceDiv,
	BalanceText,
	XRPBalanceText,
	AccountInfoDiv,
	GeneralInfoDiv,
	ReserveDiv,
	MenuTabsDiv,
	TabDiv,
	HeaderExplorerDiv,
	HeaderIdDiv,
	TabsMenuAndContent,
};
