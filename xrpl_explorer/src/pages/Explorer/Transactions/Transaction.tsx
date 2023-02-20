import { Fragment, FunctionComponent } from "react"
import Badge from "../../../components/CommonElements/Badge/Badge";
import Col from "../../../components/CommonElements/Col/Col";
import { ListItem } from "../../../components/CommonElements/OrderedList/OrderedList.styles";
import Row from "../../../components/CommonElements/Row/Row";
import { DATE_FORMAT, PAYMENT_BADGE_BACKGROUND_COLOR, PAYMENT_BADGE_BORDER_COLOR, TRANSACTION_TYPE_DATA_BG_COLOR } from "../../../constans/constans";
import { TransactionOrResponseOnlyTx } from "./TransactionList";
import PaymentData from "./TransactionTypesData/PaymentData";

interface TransactionProps {
    transaction: TransactionOrResponseOnlyTx;
}

const TransactionData: FunctionComponent<TransactionProps>  = ({ transaction }) => {

    const timestamp = transaction.date; // timestamp in milliseconds
    let formattedDate = 'N/A';

    if(timestamp !== undefined){
        const date = new Date(timestamp);
        formattedDate = date.toLocaleString('en-US', DATE_FORMAT);
    }

    /**
     * Functions to get the data filtering by transaction type so wen can reuse the component
    */

    const getTransactionTypeData = (type: string) =>{
        if(type === 'Payment'){
            return <PaymentData transaction={transaction}/>
        }
    }

    const getTransactionBadge = (type: string) => {
        if(type === 'Payment'){
            return <Badge borderColor={PAYMENT_BADGE_BORDER_COLOR} backgroundColor={PAYMENT_BADGE_BACKGROUND_COLOR}> {type} </Badge>
        }
    }
      
    return (
        <Fragment> 
                <ListItem>   
                    <Col> {transaction.Account} </Col> 
                    <Col> {getTransactionBadge(transaction.TransactionType)} </Col> 
                    <Col> Success </Col>  
                    <Col> {formattedDate} </Col>  
                </ListItem>
                <Row backgroundColor={TRANSACTION_TYPE_DATA_BG_COLOR}>
                    {getTransactionTypeData(transaction.TransactionType)}
                </Row>
        </Fragment>
    )
}

export default TransactionData