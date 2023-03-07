import {
	AccountInfoResponse, AccountNFTsResponse, AccountTxResponse, Client, GatewayBalancesResponse,
} from "xrpl";
import { BaseRequest } from "xrpl/dist/npm/models/methods/baseMethod";

const CLIENT_URL: string = "wss://s.altnet.rippletest.net:51233";

export const readAccountInfo = async (account: string): Promise<AccountInfoResponse> => (
	await xrplRequest({
		command: "account_info",
    account,
    ledger_index: "validated",
	})
);

export const readAccountTransactions = async (account: string, size: number): Promise<AccountTxResponse> => (
	await xrplRequest({
		command: "account_tx",
		account,
		binary: false,
		forward: false,
		ledger_index_min: -1,
		ledger_index_max: -1,
		limit: size,
		})
);

export const readAccountIssued = async (account: string, size: number): Promise<GatewayBalancesResponse> => (
	await xrplRequest({
		command: "gateway_balance",
		account,
		ledger_index: "validated",
		limit: size,
	})
);

export const readAccountNfts = async (account: string, size: number): Promise<AccountNFTsResponse> => (
	await xrplRequest({
		command: "account_nfts",
		account,
		ledger_index: "validated",
		limit: size,
	})
);

const xrplRequest = async (params: BaseRequest): Promise<any> => {
	const client = new Client(CLIENT_URL);
	await client.connect();

	const response = await client.request(params);

	await client.disconnect();
	return response;
};
