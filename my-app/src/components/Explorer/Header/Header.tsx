import React from "react";
import {
	HeaderExplorerDiv,
	HeaderIdDiv,
} from "../../../pages/Explorer/Explorer.styles.d";
import NoFound from "../../NoFound";
import Balance from "./Balance";

export default function Header({ account }: { account: any }) {
	return (
		<HeaderExplorerDiv>
			{Object.keys(account).length > 0 ? (
				<>
					<HeaderIdDiv>
						<h1>{account.Account}</h1>
					</HeaderIdDiv>
					<Balance account={account} />{" "}
				</>
			) : (
				<NoFound>No account found</NoFound>
			)}
		</HeaderExplorerDiv>
	);
}
