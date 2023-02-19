import { FunctionComponent } from "react";
import { Transaction } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";
import OrderedList from "../../../components/CommonElements/OrderedList/OrderedList";
import TransactionData from "./Transaction";

type TransactionOrResponseOnlyTx = Transaction & ResponseOnlyTxInfo;

interface TransactionListProps {
    transactions: TransactionOrResponseOnlyTx[];
}

const TransactionList: FunctionComponent<TransactionListProps> = ({transactions}) => {

    const headers = ['ACCOUNT','TRANSACTION','TYPE','STATUS','DATE/TIME (UTC)'];

    /**
     *  
     */

    return (
        <OrderedList headers={headers}>
        {transactions.map((transaction) => (
            <TransactionData transaction={transaction}/>
        ))}
    </OrderedList>
    )
}

export default TransactionList;