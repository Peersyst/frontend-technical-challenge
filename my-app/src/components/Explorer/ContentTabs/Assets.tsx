import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrencies, getNFTS } from "../../../utils/requests";
import NoFound from "../../NoFound";
import SpinnerLoading from "../../SpinnerLoading";
import { TabsDiv } from "./Assets/Assets.styles.d";
import NFTSTable from "./Assets/NFTSTable";
import Tab from "./Assets/Tab";
import TokensTable from "./Assets/TokensTable";

export default function Assets({ account }: { account: string }) {
	const [tabSelected, setTabSelected] = useState(
		document.location.href.substring(
			document.location.href.lastIndexOf("/") + 1
		) === "issued"
			? "Issued Tokens"
			: "Non-Fungible tokens"
	);
	const [currencies, setCurrencies] = useState<any>([]);
	const [issuer, setIssuer] = useState("");
	const [nfts, setNFTS] = useState([{}]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const handleClick = () => {
		if (tabSelected === "Issued Tokens") {
			setTabSelected("Non-Fungible tokens");
			navigate(`/accounts/${account}/assets/nft`);
		} else {
			setTabSelected("Issued Tokens");
			navigate(`/accounts/${account}/assets/issued`);
		}
	};

	useEffect(() => {
		const getCurrenciesByAccount = async () => {
			try {
				const response = await getCurrencies(account);
				const currenciesArray = response.result.assets;
				if (currenciesArray) {
					setCurrencies(
						currenciesArray[Object.keys(currenciesArray)[0]]
					);
					setIssuer(Object.keys(currenciesArray)[0]);
				}
				setLoading(false);
			} catch (error: any) {
				console.log(error);
				setLoading(false);
			}
		};
		const getNFTSByAccount = async () => {
			try {
				const response = await getNFTS(account);
				setNFTS(response.result.account_nfts);
			} catch (error: any) {
				console.log(error);
			}
		};

		getNFTSByAccount();
		getCurrenciesByAccount();
	}, [account]);

	return (
		<div>
			<TabsDiv>
				<Tab
					title={"Issued Tokens"}
					setTabSelected={handleClick}
					tabSelected={tabSelected}
				/>

				<Tab
					title={"Non-Fungible tokens"}
					setTabSelected={handleClick}
					tabSelected={tabSelected}
				/>
			</TabsDiv>

			<div>
				{loading ? (
					<NoFound>
						<SpinnerLoading />
					</NoFound>
				) : (
					<>
						{tabSelected === "Issued Tokens" ? (
							<>
								{currencies.length > 0 ? (
									<TokensTable
										elements={currencies}
										issuer={issuer}
									/>
								) : (
									<NoFound>No tokens found</NoFound>
								)}
							</>
						) : (
							<>
								{currencies.length > 0 ? (
									<NFTSTable elements={nfts} />
								) : (
									<NoFound>No NFTS found</NoFound>
								)}
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
}
