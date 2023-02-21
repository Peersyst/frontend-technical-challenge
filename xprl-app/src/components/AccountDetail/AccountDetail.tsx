/** @format */

import { useEffect, useState } from "react";
import { getAccountInfo } from "../../api/request";
import { useParams } from "react-router-dom";
import { defaultAddress } from "../../utils/defaultAddress";
import { Loading } from "../../utils/Loading/Loading";
import AccountInfo from "./AccountInfo/AccountInfo";
import { IaccountInfo } from "../../types/types";
import { AccountNotFound } from "./AccountNotFound/AccountNotFound";
import { ContentContainer } from "./AccountDetail.styles";

export function AccountDetail() {
    const [accountInfo, setAccountInfo] = useState<IaccountInfo>();
    const { address } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        //Get the address from params or send the default, and save it into localStorage
        const getUserAccount = async () => {
            try {
                const res = await getAccountInfo(
                    address ? address : defaultAddress
                );
                setAccountInfo(res);
                if (res) {
                    localStorage.setItem("lastAccountVisited", res.Account);
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };
        getUserAccount();
        return () => {
            setIsLoading(true);
        };
    }, [address]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <ContentContainer>
                    {accountInfo ? (
                        <AccountInfo accountInfo={accountInfo} />
                    ) : (
                        <AccountNotFound />
                    )}
                </ContentContainer>
            )}
        </>
    );
}
