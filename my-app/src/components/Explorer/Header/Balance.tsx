import React from "react";
import {
	XRPBalanceDiv,
	BalanceText,
	XRPBalanceText,
	AccountInfoDiv,
	GeneralInfoDiv,
	ReserveDiv,
} from "../../../pages/Explorer/Explorer.styles.d";

export default function Balance({ account }: { account: any }) {
	return (
		<GeneralInfoDiv>
			<XRPBalanceDiv>
				<XRPBalanceText> XRP BALANCE</XRPBalanceText>
				<BalanceText>
					{parseFloat(account.Balance).toLocaleString("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</BalanceText>
			</XRPBalanceDiv>
			<AccountInfoDiv>
				<span id="title">ACCOUNT INFO</span>
				<ReserveDiv>
					<span>RESERVE:</span>
					<BalanceText small>{account.OwnerCount}</BalanceText>
				</ReserveDiv>
				<span>
					CURRENT SEQUENCE:{" "}
					<span style={{ fontWeight: "bold" }}>
						{account.Sequence.toLocaleString("en-US")}
					</span>
				</span>
			</AccountInfoDiv>
		</GeneralInfoDiv>
	);
}
