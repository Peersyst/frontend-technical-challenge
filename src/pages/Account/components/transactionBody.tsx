import React from "react";
import { AccountCol, DateCol, Details, StatusCol, TypeCol, Upper, ListElement } from "../Transactions/index.style";
import { CaretRightFilled, CheckCircleFilled } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { DEFAULT_ACCOUNT } from "../../../utils/constant";
import { AmountDetails, CategoryLabel, SendDetails, Status, TransactionDetails, TransactionError, TypeCategory } from "./tranasctionBody.style";
import Logo from "../../../components/Logo";
import { dateParsed } from "../../../utils/helpers";
import Spinner from "../../../components/Spinner";
import useFetchTransactions from "../../../hooks/fetchTransactions";


const TabBody = () => {
	const { accountId } = useParams();
	const [transactions, isFetching] = useFetchTransactions(accountId ?? DEFAULT_ACCOUNT);

	return (!isFetching ? (
		!!transactions.length ? (transactions.map((transaction, index) => (
			<ListElement key={`${index}`}>
				<Upper>
					<AccountCol>
					{accountId}
					</AccountCol>
					<TypeCol>
						<TypeCategory category={transaction.tx.TransactionType}>
							<CaretRightFilled />
							<CategoryLabel>{transaction.tx.TransactionType}</CategoryLabel>
						</TypeCategory>
					</TypeCol>
					<StatusCol>
						<Status>
							<CheckCircleFilled />
							{transaction.meta.TransactionResult.substring(3)}
						</Status>
					</StatusCol>
					<DateCol>
						{dateParsed(new Date(transaction.tx.date * 1000))}
					</DateCol>
				</Upper>
				<Details>
					<>
						<SendDetails>SEND</SendDetails>
						<AmountDetails>
							<Logo width="10px" />
							{Number(transaction.meta.delivered_amount).toLocaleString()} XRP TO</AmountDetails>
						<TransactionDetails>{transaction.tx.Destination}</TransactionDetails>
					</>
				</Details>
			</ListElement>))) : (
				<TransactionError>No transactions found.</TransactionError>
			)
		) : (
			<Spinner />
		)
	);
}

export default TabBody;