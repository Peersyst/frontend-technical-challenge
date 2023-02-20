/** @format */

import {
    TransactionsContainer,
    HeaderTable,
    ColumnAccount,
    ColumnType,
    ColumnStatus,
    ColumnDate,
    NotFoundTd,
    LoadMore,
} from "./Transactions.styles";
import { useEffect } from "react";
import { getAccountTransactions } from "../../../../api/request";
import { useState } from "react";
import TransactionDetail from "./TransactionDetail/TransactionDetail";
import { Loading } from "../../../../utils/Loading/Loading";
import { ITransaction } from "../../../../types/types";

interface Props {
    address: string;
}

const Transactions: React.FC<Props> = ({ address }) => {
    const [transactions, setTransactions] = useState<
        ITransaction[] | undefined
    >([]);
    const [currentTransactions, setCurrentTransactions] = useState<
        ITransaction[] | undefined
    >([]);
    const [pagination, setPagination] = useState(9);
    const [isLoading, setIsLoading] = useState(true);
    function loadMore() {
        setPagination(pagination + 5);
    }
    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await getAccountTransactions(address);
                setTransactions(response);
                setCurrentTransactions(response.slice(0, 9));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        getTransactions();
    }, [address]);

    useEffect(() => {
        if (pagination) {
            setCurrentTransactions(transactions?.slice(0, pagination));
        } else {
            setCurrentTransactions(transactions?.slice(0, 9));
        }
    }, [pagination, transactions]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <TransactionsContainer>
                    <HeaderTable>
                        <ColumnAccount>ACCOUNT</ColumnAccount>
                        <ColumnType>TRANSACTION TYPE</ColumnType>
                        <ColumnStatus>STATUS</ColumnStatus>
                        <ColumnDate>DATE/TIME (UTC)</ColumnDate>
                    </HeaderTable>

                    {currentTransactions?.length ? (
                        <>
                            {currentTransactions?.map((transaction, i) => {
                                return (
                                    //I don't find a unique key in transaction
                                    <TransactionDetail
                                        key={i}
                                        transaction={transaction}
                                    />
                                );
                            })}
                            {transactions?.length ? (
                                currentTransactions.length <
                                transactions?.length ? (
                                    <LoadMore
                                        onClick={(e) => {
                                            loadMore();
                                        }}
                                    >
                                        Load More...
                                    </LoadMore>
                                ) : null
                            ) : null}
                        </>
                    ) : (
                        <NotFoundTd style={{ color: "#fff" }}>
                            No transactions found.
                        </NotFoundTd>
                    )}
                </TransactionsContainer>
            )}
        </>
    );
};
export default Transactions;
