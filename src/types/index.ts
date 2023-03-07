import { Transaction, TransactionMetadata } from "xrpl";

export type TabsType = {
  label: string;
  index: number;
}[];

export interface ITransaction {
	meta: TransactionMetadata,
	tx: Transaction,
	validate?: boolean
}

export interface TypeCategory {
	category: string,
}

export interface IProps {
	accountId: string | undefined,
}

export interface Props {
	right?: boolean,
};
