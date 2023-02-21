import React from "react";
import theme from "../../../../../utils/theme";
import { DetailsBox, GreenText, XRPText } from "../TransactionTables.styles.d";

export default function Details({
	amount,
	receiver,
}: {
	amount?: number;
	receiver: string;
}) {
	return (
		<>
			{amount ? (
				<TransactionDetails amount={amount} receiver={receiver} />
			) : (
				<NFTMintingTokenDetails />
			)}
		</>
	);
}

const TransactionDetails = ({
	amount,
	receiver,
}: {
	amount: number;
	receiver: string;
}) => (
	<tr style={{ backgroundColor: theme.gray.background }}>
		<td colSpan={5}>
			<DetailsBox>
				<span>
					<b>SEND</b>
				</span>
				<XRPText className="margin">{amount}</XRPText>

				<span>XRP TO</span>
				<GreenText>{receiver}</GreenText>
			</DetailsBox>
		</td>
	</tr>
);

const NFTMintingTokenDetails = () => {
	return (
		<tr>
			<td colSpan={5}>
				<DetailsBox>{/* IMPLEMENT HERE */}</DetailsBox>
			</td>
		</tr>
	);
};
