/** @format */

import { Client, AccountTxResponse } from "xrpl";
import { IaccountInfo, ITransaction } from "../types/types";

export const getAccountInfo = async (
    address: string
): Promise<IaccountInfo | undefined> => {
    try {
        const client = new Client("ws://s.altnet.rippletest.net:51233");
        await client.connect();
        const response = await client.request({
            command: "account_info",
            account: address,
            ledger_index: "validated",
        });
        await client.disconnect();
        return response.result.account_data as IaccountInfo;
    } catch (error) {
        console.log(error);
    }
};

export const getAccountTransactions = async (
    address: string
): Promise<ITransaction[]> => {
    const client = new Client("ws://s.altnet.rippletest.net:51233");
    await client.connect();
    const response = await client.request({
        command: "account_tx",
        account: address,
        binary: false,
        limit: 50,
        forward: false,
    });
    await client.disconnect();

    //Filter payments transactions
    const paymentTransactions = filterPaymentTransactions(
        response.result.transactions as ITransaction[]
    );
    return paymentTransactions as ITransaction[];
};

function filterPaymentTransactions(transactions: ITransaction[]) {
    const paymentTransactions = transactions.filter(
        (transaction) => transaction.tx?.TransactionType === "Payment"
    );
    return paymentTransactions;
}

export const getCurrencies = async (
    address: string
): Promise<any> => {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();
	const response = await client.request({
		command: "gateway_balances",
		account: address,
	});
	await client.disconnect();
	return response.result?.assets;
}

export const getNft = async (
    address: string
): Promise<any> => {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();
	const response = await client.request({
		command: "account_nfts",
		account: address,
		ledger_index: "validated",
	});
	await client.disconnect();
	return response?.result.account_nfts;
}
