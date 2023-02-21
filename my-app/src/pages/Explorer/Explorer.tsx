import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Explorer/Header/Header";
import MenuTabs from "../../components/Explorer/MenuTabs";
import NoFound from "../../components/NoFound";
import SpinnerLoading from "../../components/SpinnerLoading";
import { getAccountDetails } from "../../utils/requests";

import { ExplorerDiv } from "./Explorer.styles.d";

export default function Explorer() {
	const { id } = useParams();
	const [accountDetails, setAccountDetails] = useState({});
	const [loading, setLoading] = useState(true);
	const accountId = id ? id : "";
	useEffect(() => {
		const getAccount = async () => {
			try {
				const response = await getAccountDetails(accountId);
				setAccountDetails(response.result.account_data);
				localStorage.setItem(
					"lastAccountSearched",
					response.result.account_data.Account
				);

				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		getAccount();
	}, [accountId]);

	return (
		<ExplorerDiv>
			{!loading ? (
				<>
					<Header account={accountDetails} />
					<MenuTabs account={accountDetails} />
				</>
			) : (
				<NoFound>
					<SpinnerLoading />
				</NoFound>
			)}
		</ExplorerDiv>
	);
}
