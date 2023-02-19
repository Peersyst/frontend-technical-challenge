import { FunctionComponent, useEffect, useState } from "react";
import { getAccountInfo, getAccountTransactions } from "../../services/xrpl";
import AccountInfo from "./AccountInfo";
import { ExplorerContainer, Content } from "./Explorer.styles";
import { AccountInfoResponse, AccountTxResponse, Payment, Transaction } from "xrpl";
import { AccountRoot } from "xrpl/dist/npm/models/ledger";
import TabRow from "../../components/CommonElements/Tabs/TabRow";
import Tab from "../../components/CommonElements/Tabs/Tab";
import Row from "../../components/CommonElements/Row/Row";
import TransactionList from "./Transactions/TransactionList";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";

const address = 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe';

/**
 * Component wrapping the Explorer page contents
 * 
 * @returns Explorer component
 */

const Explorer: FunctionComponent = () => {

    type TransactionOrResponseOnlyTx = Transaction & ResponseOnlyTxInfo;

    const [accountData, setAccountData] = useState<AccountRoot>();
    const [transactions, setTransactions] = useState<TransactionOrResponseOnlyTx[]>([]);
    const [activeTab, setActiveTab] = useState<0|1>(0);

    /**
     * Function used to filter transactions from the response to only get payment transactions
     * 
     * @param transaction_response 
     * @returns Payment[] array of payment transactions
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

    const getTransactions = async () => {
        const response: AccountTxResponse = await getAccountTransactions(address, 10);
        const filteredTransactions: TransactionOrResponseOnlyTx[]  = getPaymentTransactions(response); 
        setTransactions(filteredTransactions);
    }

    const getTabContent = (activeTab: number) => {
        if(activeTab === 0) {
            return (
                <TransactionList transactions={transactions}/>
            )
        }
    }

    useEffect(() => {
        getTransactions();

        /**
         * Function to get account data from xrpl api
         * Used on useEffect to get account data on page load, we dont need it out of the scope of this function
         */
        const getAccountData =  async () => {
            const response: AccountInfoResponse = await getAccountInfo(address);
            const account: AccountRoot = response.result.account_data;
            setAccountData(account)
        }

        getAccountData();

    }, [])

    //TODO: Add loading component here

    return (
        <Content>
            <ExplorerContainer>
                {accountData ? <AccountInfo account={accountData}/> : <></>}
                <TabRow>
                    <Tab active={activeTab === 0} onClick={()=> setActiveTab(0)}> Transactions </Tab>
                    <Tab active={activeTab === 1} onClick={()=> setActiveTab(1)}> Assets </Tab>
                </TabRow>
                <Row>
                    {getTabContent(activeTab)}
                </Row>
            </ExplorerContainer>
        </Content>
    )
}

export default Explorer;