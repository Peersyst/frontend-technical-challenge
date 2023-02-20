/** @format */

import {
    TransactionContainer,
    UpperTransaction,
    DetailsTransaction,
    ColumnAccount,
    ColumnDate,
    ColumnStatus,
    ColumnType,
    PaymentContainer,
    PaymentLabel,
    StatusTransaction,
    StatusContainer,
    PaymentTransaction,
    SendLabel,
    Amount,
    CurrencyLabel,
    AccountTo,
} from "./TransactionDetail.styles";
import IconPayment from "../../../../../assets/payment.svg";
import IconStatusTransaction from "../../../../../assets/checkStatus.svg";
import { useNavigate } from "react-router-dom";
import { getDate } from "../../../../../utils/getDate";

interface Props {
    transaction: any;
}

const TransactionDetail: React.FC<Props> = ({ transaction }) => {
    const navigate = useNavigate();
    function handleClickAccount() {
        navigate(`/accounts/${transaction.tx.Destination}`);
    }
    return (
        <>
            <TransactionContainer>
                <UpperTransaction>
                    <ColumnAccount>{transaction.tx.Account}</ColumnAccount>
                    <ColumnType>
                        {transaction.tx.TransactionType === "Payment" ? (
                            <PaymentContainer>
                                <img src={IconPayment} alt="icon-payment"></img>
                                <PaymentLabel>
                                    {transaction.tx.TransactionType}
                                </PaymentLabel>
                            </PaymentContainer>
                        ) : (
                            transaction.tx.TransactionType
                        )}
                    </ColumnType>
                    <ColumnStatus>
                        <StatusContainer>
                            <img
                                src={IconStatusTransaction}
                                alt="status-transaction"
                            ></img>
                            <StatusTransaction>
                                {transaction.meta.TransactionResult ===
                                "tesSUCCESS"
                                    ? "Success"
                                    : transaction.meta.TransactionResult}
                            </StatusTransaction>
                        </StatusContainer>
                    </ColumnStatus>
                    <ColumnDate>
                        {getDate(new Date(transaction.tx.date))}
                    </ColumnDate>
                </UpperTransaction>
                {transaction.tx.TransactionType === "Payment" ? (
                    <DetailsTransaction>
                        <PaymentTransaction>
                            <SendLabel>SEND</SendLabel>
                            <Amount>
                                {Number(
                                    transaction.meta.delivered_amount
                                ).toLocaleString()}
                            </Amount>
                            <CurrencyLabel> XRP </CurrencyLabel>
                            <CurrencyLabel> TO </CurrencyLabel>
                            <AccountTo onClick={handleClickAccount}>
                                {transaction.tx.Destination}
                            </AccountTo>
                        </PaymentTransaction>
                    </DetailsTransaction>
                ) : null}
            </TransactionContainer>
        </>
    );
};
export default TransactionDetail;
