import styled from "styled-components";

const GreenText = styled.span`
	color: ${(props) => props.theme.green.text};
`;

const StatusText = styled.span`
	color: ${(props) => props.theme.green.text};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	&:before {
		display: inline-block;
		background-color: ${(props) => props.theme.green.text};
		background-size: 100%;
		width: 1em;
		height: 1em;
		margin-right: 4px;
		content: "";
		-webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR4nO2aS0gVURzGfz3oFpRomD2hB7Ro06YiCFoVSVQkLUwzatcmInHjpkWLNmZBhRQtIqhdUFApZZsWQVgEQYGZ2aLsQaEGRZRanTjwCcPcO86dmXPvDOIH38Z7zn/+38x5fP9zhGlMXVQBdUA70AX0ASPAqDikv3UCp9W2gowgBzQB3cAfwETkuPruV6yyYx7QAnyMkXwQbaxj5RS0ExhwKMDPt8D2UgqYC1wsoQAv/+lZzr/OYuBZmUQYDx8DS1yJWAW8SUGEEV8DK1x8iTRFGPFq0jmRxnAyPr7SHmUxI46QSxkQMQSsVT77tJFGXmLTFvEb2Kp8NgI/teluLlZEThMsbSGHlM8yYNA31OywD0VLBkScUi7zgecFfm8u5mu4tB1xeEOTeiZwO6DNp7DNsillEU/k4yzOhrRtnExId4oi3nl28SNFtH8QJKIqphV3we/AeuVhDeNYEX1sm8pCQupSEmFf3i7lsA74FqGv3VvycCYlIcf1/OoY5UFbISGdKYiwVh2tQI9i9L9XSEh/mUXYhWW2ltprMWP0FRIyHGNs1wNXYiTQ65moJxK8jJFCQkYjBrmpfvaNXojQ7wuwWn3rVQ3GFTLqQohlh3Zgi9Yi2v8Ctqj9BhnBpMYy8dCa4HWNdYujwN+AdvbNH1S75cCHhCIM8DVfRjLHe8vjfQ7rvMrf5qR+XwC8cCDCyAnnoSth0IdK0mKPhpHfCM4C7jgSYRQrD+0OAvcACxVvG/BDJyET9cN5hyJM0Ia411Hwl8BSxdwE1Hjmj3HM3YWEVDo0jfa0cI0ndm3AvEnCsckOwe87fNBnOdqoRtAUSWupAnHA8cOGVWeYErBhMiE5R+t7qTkIzCEEzRlI1ITQXj+EIidXaTLK/iin9LUZSNgE2JzIdycdGUjc+HiOGLCf72kGkjce1xA6wYNQnZH5MqArjsQXPeUug42H1pWvxBFqUhpmPcAiHCMn95qkNI3Cy6W+qt5R4qHWV+rraS9yOljz3lsk5fty/8OAX1Cjqss4Nn1cLrYhydLqGhUqce09313V00O+f6rpVXnapqJoojSexpTDf1h2IxsI60DTAAAAAElFTkSuQmCC)
			no-repeat 50% 50%;
		mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR4nO2aS0gVURzGfz3oFpRomD2hB7Ro06YiCFoVSVQkLUwzatcmInHjpkWLNmZBhRQtIqhdUFApZZsWQVgEQYGZ2aLsQaEGRZRanTjwCcPcO86dmXPvDOIH38Z7zn/+38x5fP9zhGlMXVQBdUA70AX0ASPAqDikv3UCp9W2gowgBzQB3cAfwETkuPruV6yyYx7QAnyMkXwQbaxj5RS0ExhwKMDPt8D2UgqYC1wsoQAv/+lZzr/OYuBZmUQYDx8DS1yJWAW8SUGEEV8DK1x8iTRFGPFq0jmRxnAyPr7SHmUxI46QSxkQMQSsVT77tJFGXmLTFvEb2Kp8NgI/teluLlZEThMsbSGHlM8yYNA31OywD0VLBkScUi7zgecFfm8u5mu4tB1xeEOTeiZwO6DNp7DNsillEU/k4yzOhrRtnExId4oi3nl28SNFtH8QJKIqphV3we/AeuVhDeNYEX1sm8pCQupSEmFf3i7lsA74FqGv3VvycCYlIcf1/OoY5UFbISGdKYiwVh2tQI9i9L9XSEh/mUXYhWW2ltprMWP0FRIyHGNs1wNXYiTQ65moJxK8jJFCQkYjBrmpfvaNXojQ7wuwWn3rVQ3GFTLqQohlh3Zgi9Yi2v8Ctqj9BhnBpMYy8dCa4HWNdYujwN+AdvbNH1S75cCHhCIM8DVfRjLHe8vjfQ7rvMrf5qR+XwC8cCDCyAnnoSth0IdK0mKPhpHfCM4C7jgSYRQrD+0OAvcACxVvG/BDJyET9cN5hyJM0Ia411Hwl8BSxdwE1Hjmj3HM3YWEVDo0jfa0cI0ndm3AvEnCsckOwe87fNBnOdqoRtAUSWupAnHA8cOGVWeYErBhMiE5R+t7qTkIzCEEzRlI1ITQXj+EIidXaTLK/iin9LUZSNgE2JzIdycdGUjc+HiOGLCf72kGkjce1xA6wYNQnZH5MqArjsQXPeUug42H1pWvxBFqUhpmPcAiHCMn95qkNI3Cy6W+qt5R4qHWV+rraS9yOljz3lsk5fty/8OAX1Cjqss4Nn1cLrYhydLqGhUqce09313V00O+f6rpVXnapqJoojSexpTDf1h2IxsI60DTAAAAAElFTkSuQmCC)
			no-repeat 50% 50%;
		-webkit-mask-size: cover;
		mask-size: cover;
	}
`;

const TransactionTypeDiv = styled.div`
	border: 1.5px solid ${(props) => props.theme.green.success};
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	padding: 2px;
	font-weight: bold;
	text-transform: uppercase;
`;

const DetailsBox = styled.div`
	& > * {
		margin-right: 10px;
	}
	color: ${(props) => props.theme.gray.text};
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-left: 0px;
	align-items: center;
	padding: 40px;
	font-size: 13px;
`;

const XRPText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	&:before {
		display: inline-block;
		background-color: ${(props) => props.theme.gray.text};
		background-size: 100%;
		width: 1em;
		height: 1em;
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

export { GreenText, DetailsBox, XRPText, TransactionTypeDiv, StatusText };
