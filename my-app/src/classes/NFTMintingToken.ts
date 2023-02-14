export interface NFTMintingTokenInterface {
	sender: string;
	receiver: string;
	transactionType: string;
	status: boolean;
	dateTime: number;
}

export class NFTMintingToken implements NFTMintingTokenInterface {
	receiver: string;
	sender: string;
	transactionType: string;
	status: boolean;
	dateTime: number;

	constructor(
		sender: string,
		receiver: string,
		transactionTypes: string,
		status: boolean,
		dateTime: number
	) {
		this.sender = sender;
		this.receiver = receiver;
		this.transactionType = transactionTypes;
		this.status = status;
		this.dateTime = dateTime;
	}
}
