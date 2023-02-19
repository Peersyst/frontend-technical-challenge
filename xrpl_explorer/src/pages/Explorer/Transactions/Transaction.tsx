import { Fragment, FunctionComponent } from "react"
import { Transaction } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";
import Col from "../../../components/CommonElements/Col/Col";
import { ListItem } from "../../../components/CommonElements/OrderedList/OrderedList.styles";
import Row from "../../../components/CommonElements/Row/Row";

type TransactionOrResponseOnlyTx = Transaction & ResponseOnlyTxInfo;


interface TransactionProps {
    transaction: TransactionOrResponseOnlyTx;
}

const TransactionData: FunctionComponent<TransactionProps>  = ({ transaction }) => {

    const timestamp = transaction.date; // timestamp in milliseconds
    let formattedDate = 'N/A';

    if(timestamp !== undefined){
        const date = new Date(timestamp);

        formattedDate = date.toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        });
    }
      
    return (
        <Fragment> 
                <ListItem>   
                    <Col> {transaction.Account} </Col> 
                    <Col>  {transaction.TransactionType}  </Col> 
                    <Col> Success </Col>  
                    <Col className='date-label'> {} </Col>  
                </ListItem>
                <Row>
                    <span> SEND 3.80 XRP TO DFDSDSSDFSDFSDFSDD </span>
                </Row>
        </Fragment>
    )
}

export default TransactionData