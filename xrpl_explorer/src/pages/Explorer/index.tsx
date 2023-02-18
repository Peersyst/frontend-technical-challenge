import { FunctionComponent, useEffect, useState } from "react";
import { getAccountInfo } from "../../services/xrpl";
import AccountInfo from "./AccountInfo";
import { ExplorerContainer, Content } from "./Explorer.styles";
import { AccountInfoResponse } from "xrpl";
import { AccountRoot } from "xrpl/dist/npm/models/ledger";

const address = 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe';

/**
 * Component wrapping the Explorer page contents
 * 
 * @returns Explorer component
 */

const Explorer: FunctionComponent = () => {
    
    const [accountData, setAccountData] = useState<AccountRoot>();

    useEffect(() => {
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
            </ExplorerContainer>
        </Content>
    )
}

export default Explorer;