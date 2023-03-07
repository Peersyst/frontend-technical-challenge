/* eslint-disable import/extensions */
import { useEffect, useState } from "react";
import { readAccountTransactions } from "../services/api/xrpl";

function useFetchTransactions(accountId: string): [any[], boolean]{
	const [transactions, setTransactions] = useState<any[]>([]);
	const [isFetching, setIsFetching] = useState<boolean>(true);

	useEffect(() => {
		readAccountTransactions(accountId, 10)
			.then((response) => {
				setIsFetching(false);
				setTransactions(response.result.transactions.filter((o) => o.tx?.TransactionType === 'Payment'));
			})
			.catch((err) =>  {
				setIsFetching(false);
				console.log(err);
			});
	}, []);

	return [transactions,isFetching];
}

export default useFetchTransactions;
