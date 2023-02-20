import { FunctionComponent } from "react"
import { Payment, Transaction } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";

type TransactionOrResponseOnlyTx = Transaction & ResponseOnlyTxInfo & Payment;

interface PaymentDataProps {
    transaction: TransactionOrResponseOnlyTx;
}

const PaymentData: FunctionComponent<PaymentDataProps> = ({transaction}) => {

    return (
        <span> 
             <p> <b> SEND </b> {transaction.Amount.toString()}  XRP  TO <a> {transaction.Destination.toString()} </a></p> 
        </span>
    )
}

export default PaymentData