import { Client } from "xrpl";

async function getAccountDetails(account: string) {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();
	// rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe
	const response = await client.request({
		command: "account_info",
		account: account,
		ledger_index: "validated",
	});

	await client.disconnect();

	return response;
}

async function getTransactionsInformation(account: string) {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();

	const responseChannels = await client.request({
		id: 2,
		command: "account_tx",
		account: account,

		binary: false,
		forward: false,
	});
	await client.disconnect();

	return responseChannels;
}

async function getCurrencies(account: string) {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();
	// rPd9oB2Kdot9HSsXSeFYpKZUV3vDsBzv73
	const response = await client.request({
		command: "gateway_balances",
		account: account,
	});
	await client.disconnect();

	return response;
}

async function getNFTS(account: string) {
	const client = new Client("ws://s.altnet.rippletest.net:51233");
	await client.connect();
	// rMB8mXNQ6spV2i7n7DHVVb5qvC4YWMqp3v
	const response = await client.request({
		command: "account_nfts",
		account: account,
		ledger_index: "validated",
	});

	await client.disconnect();
	return response;
}

export {
	getTransactionsInformation,
	getAccountDetails,
	getCurrencies,
	getNFTS,
};
