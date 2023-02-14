import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Payment } from "../../../classes/Payment";
import { getTransactionsInformation } from "../../../utils/requests";
import NoFound from "../../NoFound";
import SpinnerLoading from "../../SpinnerLoading";
import TransactionTable from "./Transactions/TransactionTable";

const LoadingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const getFilteredTransactions = (transactions: any[]) => {
	const transactionsFiltered = transactions.filter(
		(txs) => txs.tx?.TransactionType === "Payment"
	);
	return transactionsFiltered.map((tx) => {
		return new Payment(
			tx.tx?.Account,
			tx.tx?.Destination,
			tx.tx?.TransactionType,
			tx.validated,
			tx.tx?.date,
			tx.tx?.Amount
		);
	});
};

export default function Transactions({ account }: { account: string }) {
	const [transactions, setTransactions] = useState<Payment[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getTransactions = async () => {
			const response = await getTransactionsInformation(account);
			const transactions: any[] | undefined =
				response.result.transactions;
			const filteredTransactions: Payment[] =
				getFilteredTransactions(transactions);

			setTransactions(filteredTransactions || []);
			setLoading(false);
		};

		getTransactions();
	}, [account]);

	return (
		<div>
			{loading ? (
				<LoadingDiv>
					<SpinnerLoading />
				</LoadingDiv>
			) : (
				<>
					{transactions.length > 0 ? (
						<TransactionTable elements={transactions} />
					) : (
						<NoFound>No transactions found</NoFound>
					)}
				</>
			)}
		</div>
	);
}
