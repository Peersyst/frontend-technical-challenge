import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Payment, Transaction } from "xrpl";
import { ResponseOnlyTxInfo } from "xrpl/dist/npm/models/common";
import { DEFAULT_ADDRESS } from "../../constants";
import { getXRPAccountTransactions } from "../../services/xrpService";
import { play, succes } from "../../svg";
import { getDateFormated } from "../../utils/utils";
import TransactionPaymentCell from "./TransactionPaymentCell";

const Table = styled.table`
  color: white;
  width: 100%;
`;

const TableTopCell = styled.td<{ paddingLeft: boolean; paddingRight: boolean }>`
  color: #838386;
  font-weight: 700;
  font-size: 10px;
  border-bottom: solid 1px #343437;
  padding-left: ${({ paddingLeft = false }) => (paddingLeft ? "32px" : "0px")};
  padding-right: ${({ paddingRight = false }) =>
    paddingRight ? "32px" : "0px"};
  text-align: ${({ paddingLeft = false }) => (paddingLeft ? "left" : "right")};
`;

const TransTypePayment = styled.div`
  background-color: #145c35;
  border-radius: 100px;
  display: inline-block;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  margin: 8px 0px;
  border: 1px solid #32e685;
  font-size: 14px;
  line-height: 1;
`;

const TableRowContent = styled.tr`
  vertical-align: middle;
  line-height: 30px;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #32e685;
  justify-content: flex-end;
`;

const FirstTableCell = styled.td`
  padding-left: 32px;
  font-size: 14px;
`;

const LastTableCell = styled.td`
  padding-right: 32px;
  text-align: right;
  font-size: 14px;
`;

interface TransaccionsI {
  account: string | undefined;
  transactionType: string | undefined;
  status: boolean;
  dateTime: string | undefined;
  tx: any;
}
interface TransaccionesI {
  account: string | undefined;
}

const Transacciones = ({ account = DEFAULT_ADDRESS }: TransaccionesI) => {
  const [content, setContent] = useState<TransaccionsI[]>([]);

  const columsTransactionsKey: string[] = [
    "ACCOUNT",
    "TRANSACTION TYPE",
    "STATUS",
    "DATE/TIME (UTC)",
  ];

  useEffect(() => {
    let temp: TransaccionsI[] = [];

    getXRPAccountTransactions(account).then((res) => {
      temp = res.result.transactions.map((tx) => {
        const dt = new Date(tx.tx?.date ?? 0);
        return {
          account: tx.tx?.Account,
          transactionType: tx.tx?.TransactionType,
          status: tx.validated,
          dateTime: getDateFormated(dt),
          tx: tx.tx,
        };
      });

      const transactionsFiltered = temp.filter(
        (trans) => trans.tx?.TransactionType === "Payment"
      );

      setContent(transactionsFiltered);
    });
  }, [account]);

  function getTransactionTypeElement(transType: string | undefined) {
    if (transType === "Payment")
      return <TransTypePayment>{play} PAYMENT</TransTypePayment>;
    else return <></>;
  }

  function getTransactionGenericCell(
    transaction: (Transaction & ResponseOnlyTxInfo) | Payment
  ) {
    if (transaction.TransactionType === "Payment") {
      return (
        <TransactionPaymentCell trans={transaction}></TransactionPaymentCell>
      );
    }
    return;
  }

  return (
    <>
      <Table border={0}>
        <thead>
          <tr>
            {columsTransactionsKey.map((transKey, key) => {
              return (
                <TableTopCell
                  paddingLeft={key === 0}
                  paddingRight={key === columsTransactionsKey.length - 1}
                  key={key}
                >
                  {transKey}
                </TableTopCell>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {content.map((trans, key) => {
            return (
              <Fragment key={key}>
                <TableRowContent key={key}>
                  <FirstTableCell>{trans.account}</FirstTableCell>
                  <td align="right">
                    {getTransactionTypeElement(trans.transactionType)}
                  </td>
                  <td align="left">
                    {trans.status ? (
                      <StatusWrapper>{succes}Success</StatusWrapper>
                    ) : (
                      <></>
                    )}
                  </td>
                  <LastTableCell>{trans.dateTime}</LastTableCell>
                </TableRowContent>
                {getTransactionGenericCell(trans.tx)}
              </Fragment>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Transacciones;
