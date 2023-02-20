import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { AccountTxResponse, Payment, Transaction } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";
import OrderedList from "../../../components/CommonElements/OrderedList/OrderedList";
import Row from "../../../components/CommonElements/Row/Row";
import Spinner from "../../../components/CommonElements/Spinner";
import ErrorMsg from "../../../components/Messages/ErrorMsg";
import { TRANSACTIONS_LIST_HEADER } from "../../../constans/constans";
import { getAccountTransactions } from "../../../services/xrpl";
import TransactionData from "./Transaction";

type TransactionOrResponseOnlyTx = Transaction & ResponseOnlyTxInfo & Payment;

interface TransactionListProps {
    address: string;
}

/**
 * Function used to filter transactions from the response to only get payment transactions
 * Used for the context of the test, we only want to display payment transactions
 */
const getPaymentTransactions = (transaction_response: AccountTxResponse) => {

    let paymentTransactions: TransactionOrResponseOnlyTx[] = [];
    
    for(let transaction of transaction_response.result.transactions) {
        if(transaction.hasOwnProperty('tx')) {
            if(transaction.tx?.TransactionType === 'Payment') {
                paymentTransactions.push(transaction.tx as TransactionOrResponseOnlyTx);
            }
        }
    }

    return paymentTransactions;
}

const TransactionList: FunctionComponent<TransactionListProps> = ({address}) => {

    const [error, setError] = useState<Boolean>(false);
    const [transactions, setTransactions] = useState<TransactionOrResponseOnlyTx[]>();

    /**
     * Function to get transactions from xrpl api
     * Out of useEffect to scale for pagination
     */
    const getTransactions = async () => {
        try{
            const response: AccountTxResponse = await getAccountTransactions(address, 10);
            const filteredTransactions: TransactionOrResponseOnlyTx[]  = getPaymentTransactions(response); 
            setTransactions(filteredTransactions);
            setError(false);
        }catch(e){
            setError(true);
        }
    }

    useEffect(() => {
        getTransactions();
    }, [])
    

    return (
        <Row>
            <OrderedList headers={TRANSACTIONS_LIST_HEADER}>
                {error ? (<ErrorMsg> Error getting Transactions </ErrorMsg>) : 
                    <Fragment>
                        {transactions ? (
                            <Fragment> 
                                {transactions.map((transaction, index) => (
                                    <TransactionData key={index} transaction={transaction}/>
                                ))}
                            </Fragment>
                            ) : <Spinner/>
                        }
                    </Fragment>
                }
            </OrderedList>
        </Row>
    )
}

export default TransactionList;