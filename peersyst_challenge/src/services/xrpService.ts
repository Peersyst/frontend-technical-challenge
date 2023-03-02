import { AccountInfoRequest, AccountInfoResponse, AccountTxRequest, AccountTxResponse, Client } from "xrpl";
import { XRPL_CLIENT } from "../constants";

export const getXRPGenericRequest = async (props: AccountInfoRequest | AccountTxRequest): Promise<AccountInfoResponse | AccountTxResponse> => {

    const client = new Client(XRPL_CLIENT);
    await client.connect();
    const response = await client.request(props); 
    await client.disconnect();

    return response as AccountInfoResponse | AccountTxResponse
}

export const getXRPAccountInfo = async (account: string): Promise<AccountInfoResponse> => {

    const response = await getXRPGenericRequest({
        command: "account_info",
        account: account,
        ledger_index: "validated",
    });
    
    return response as AccountInfoResponse
}


export const getXRPAccountTransactions = async (account: string): Promise<AccountTxResponse> => {
    
    const response = await getXRPGenericRequest({
        command: "account_tx",
        account: account,
        ledger_index_min: -1,
        ledger_index_max: -1,
        binary: false,
        limit: 10,
        forward: false,
    });
    return response as AccountTxResponse
}