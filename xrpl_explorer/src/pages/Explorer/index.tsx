import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { getAccountInfo } from "../../services/xrpl";
import AccountInfo from "./AccountInfo";
import { ExplorerContainer, Content } from "./Explorer.styles";
import { AccountInfoResponse} from "xrpl";
import { AccountRoot } from "xrpl/dist/npm/models/ledger";
import TabRow from "../../components/CommonElements/Tabs/TabRow";
import Tab from "../../components/CommonElements/Tabs/Tab";
import TransactionList from "./Transactions/TransactionList";
import Assets from "./Assets";
import { useParams } from "react-router-dom";
import ErrorMsg from "../../components/Messages/ErrorMsg";
import Spinner from "../../components/CommonElements/Spinner";
import { DEFAULT_ADDRESS } from "../../constans/constans";

/**
 * Component wrapping the Explorer page contents
 * 
 * @returns Explorer component
 */

const Explorer: FunctionComponent = () => {

    const { id } = useParams();

    let address = DEFAULT_ADDRESS;

    if(id){
        address = id;
    }

    const [accountData, setAccountData] = useState<AccountRoot>();
    const [error, setError] = useState<Boolean>(false); //Adding error state to show error message if there is an error getting account data, will set false on fetch success
    const [activeTab, setActiveTab] = useState<0|1>(0);

    /**
     * Function to get the content of the active tab in the explorer page depending on the activeTab state
     */
    const getTabContent = (activeTab: number) => {
        if(activeTab === 0) {
            return (
                <TransactionList address={address}/>
            )
        }else{
            return (
                <Assets address={address}/>
            )
        }
    }

    useEffect(() => {

        /**
         * Function to get account data from xrpl api
         * Used on useEffect to get account data on page load, we dont need it out of the scope of this function
         */
        const getAccountData =  async () => {
            try{
                const response: AccountInfoResponse = await getAccountInfo(address);
                const account: AccountRoot = response.result.account_data;
                setAccountData(account)
                if(id){
                    localStorage.setItem('default_address', id);
                }
                setError(false);
            }catch(e){
                setError(true);
            }
        }

        getAccountData();

    }, [id])

    return (
        <Content>
            <ExplorerContainer>
                {error ? <ErrorMsg> Error getting account data, make sure you introduced a valid address. </ErrorMsg> :
                    <Fragment>
                    {accountData ? 
                        <Fragment>
                            <AccountInfo account={accountData}/> 
                            
                            <TabRow>
                                <Tab active={activeTab === 0} onClick={()=> setActiveTab(0)}> Transactions </Tab>
                                <Tab active={activeTab === 1} onClick={()=> setActiveTab(1)}> Assets </Tab>
                            </TabRow>

                            {getTabContent(activeTab)}
                        </Fragment>
                    :  <Spinner/>
                    }
                    </Fragment>
                }
            </ExplorerContainer>
        </Content>
    )
}

export default Explorer;