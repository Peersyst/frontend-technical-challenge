/** @format */

import { IaccountInfo } from "../../../../types/types";
import {
    BalanceContainer,
    HeaderContainer,
    FirstColumn,
    SecondColumn,
    SecondaryBalance,
    BalanceTitle,
    BalanceValue,
    InfoSecondary,
    Reserve,
    AccountInfo,
} from "./Balance.styles";
import { parseStringToNumber } from "../../../../utils/parseNumber";
import XrpLogo from "../../../../utils/XrpLogo/XrpLogo";

interface Props {
    accountInfo: IaccountInfo;
}

const Balance: React.FC<Props> = ({ accountInfo }) => {
    return (
        <BalanceContainer>
            <HeaderContainer>
                <>
                    <FirstColumn>
                        <SecondaryBalance>
                            <BalanceTitle>XRP BALANCE</BalanceTitle>
                            <BalanceValue>
                                <XrpLogo width={35} />
                                {parseStringToNumber(accountInfo.Balance)}
                            </BalanceValue>
                        </SecondaryBalance>
                    </FirstColumn>
                    <SecondColumn>
                        <InfoSecondary>
                            <AccountInfo>ACCOUNT INFO</AccountInfo>
                            <Reserve>
                                RESERVE :
                                <XrpLogo width={14} />
                                {accountInfo.OwnerCount}
                            </Reserve>
                            <Reserve>
                                CURRENT SEQUENCE:
                                {accountInfo.Sequence.toLocaleString()}
                            </Reserve>
                        </InfoSecondary>
                    </SecondColumn>
                </>
            </HeaderContainer>
        </BalanceContainer>
    );
};

export default Balance;
