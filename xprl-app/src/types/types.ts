import { Transaction,TransactionMetadata } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";

export type IaccountInfo = {
    LedgerEntryType: 'AccountRoot';
    Account: string;
    Balance: string;
    Flags: number;
    OwnerCount: number;
    PreviousTxnID: string;
    PreviousTxnLgrSeq: number;
    Sequence: number;
    AccountTxnID?: string;
    Domain?: string;
    EmailHash?: string;
    MessageKey?: string;
    RegularKey?: string;
    TicketCount?: number;
    TickSize?: number;
    TransferRate?: number;
  }

  export type ITransaction ={
    meta:TransactionMetadata,
    tx:Transaction,
    validate?:boolean
  }
