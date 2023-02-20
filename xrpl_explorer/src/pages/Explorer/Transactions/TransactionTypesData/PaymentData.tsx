import { FunctionComponent } from "react"
import { TransactionOrResponseOnlyTx } from "../TransactionList";

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