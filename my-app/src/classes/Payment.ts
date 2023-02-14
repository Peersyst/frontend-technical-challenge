export interface PaymentInterface {
	sender: string;
	receiver: string;
	transactionType: string;
	status: boolean;
	dateTime: number;
	amount: number;
}

export class Payment implements PaymentInterface {
	receiver: string;
	sender: string;
	transactionType: string;
	status: boolean;
	dateTime: number;
	amount: number;

	constructor(
		sender: string,
		receiver: string,
		transactionTypes: string,
		status: boolean,
		dateTime: number,
		amount: number
	) {
		this.receiver = receiver;
		this.sender = sender;
		this.transactionType = transactionTypes;
		this.status = status;
		this.dateTime = dateTime;
		this.amount = amount;
	}
}
