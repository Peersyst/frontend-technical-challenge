/** @format */

// import { AccountNotFound } from "../AccountNotFound/AccountNotFound"
import { IaccountInfo } from "../../../types/types";
import Assets from "../Tab/Assets/Assets";
import { Tab } from "../Tab/Tab";
import Transactions from "../Tab/Transactions/Transactions";
import {
    AccountInfoContainer,
    Address,
    AddressContainer,
    HeaderContainer,
} from "./AccountInfo.styles";
import Balance from "./Balance/Balance";
import { useState } from "react";

interface Props {
    accountInfo: IaccountInfo;
}

const AccountInfo: React.FC<Props> = ({ accountInfo }) => {
    const [tabState, setTabState] = useState<string>("Transactions");

    return (
        <AccountInfoContainer>
            <>
                <HeaderContainer>
                    <AddressContainer>
                        <Address style={{ color: "#fff" }}>
                            {accountInfo.Account}
                        </Address>
                    </AddressContainer>
                    <Balance accountInfo={accountInfo} />
                </HeaderContainer>
                <Tab
                    tabState={tabState}
                    setTabState={setTabState}
                    address={accountInfo.Account}
                />

                {tabState === "Transactions" ? (
                    <Transactions address={accountInfo.Account} />
                ) : (
                    <Assets address={accountInfo.Account} />
                )}
            </>
        </AccountInfoContainer>
    );
};

export default AccountInfo;
