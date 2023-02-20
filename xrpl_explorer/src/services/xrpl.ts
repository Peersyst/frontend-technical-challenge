import { Client, AccountInfoResponse, AccountTxResponse, AccountNFTsResponse, AccountCurrenciesResponse, GatewayBalancesResponse } from "xrpl"
import { RIPPLE_TEST_URL } from "../constans/constans"

/**
 * Generic request function to avoid repeating code
 * 
 * @param command 
 * @param params 
 * @returns response from xrpl
 */
const xrplGenericRequest = async (command: string, params: object): Promise<any> => {
    const client = new Client(RIPPLE_TEST_URL)
    await client.connect()

    const response = await client.request({
        command,
        ...params,
    })
    await client.disconnect()
    return response;
}

/**
 * Function to get account info
 * 
 * @param address 
 * @returns account info
 */
export const getAccountInfo = async (address: string): Promise<AccountInfoResponse> => {
    return await xrplGenericRequest('account_info', {
        account: address,
        ledger_index: 'validated',
    });
} 

/**
 * Function to get account transactions limiting the number of results
 * 
 * @param address 
 * @param limit 
 * @returns account transactions
 */
export const getAccountTransactions = async (address: string, limit = 10): Promise<AccountTxResponse> => {
    return xrplGenericRequest('account_tx', {
        account: address,
        ledger_index_min: -1,
        ledger_index_max: -1,
        binary: false,
        limit,
        forward: false,
    })
}

/**
 * Function to get Nfts limiting the number of results
 * 
 * @param address 
 * @param limit 
 * @returns NFTs
 */
export const getAccountNfts = async (address: string, limit = 10): Promise<AccountNFTsResponse> => {
    return xrplGenericRequest('account_nfts', {
        account: address,
        ledger_index: "validated",
        limit,
    })
}

/**
 * Function to get IssuedTokens limiting the number of results
 * 
 * @param address 
 * @param limit 
 * @returns NFTs
 */
export const getAccountIssuedTokens = async (address: string, limit = 10): Promise<GatewayBalancesResponse> => {
    return xrplGenericRequest('gateway_balances', {
        account: address,
        ledger_index: "validated",
        limit,
    })
}