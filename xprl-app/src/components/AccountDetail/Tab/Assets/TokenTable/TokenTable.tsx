/** @format */

import {
    ThToken,
    TrToken,
    TableToken,
    TdNotFound,
    TokenContainer,
    TheadToken,
    TdToken,
    TdTokenAddress,
    ThAmount,
    TdAmount,
    LinkItem,
} from "./TokenTable.styles";
import { parseStringToNumber } from "../../../../../utils/parseNumber";
interface Props {
    issuedTokens: any;
    issuer: any;
}
const TokenTable: React.FC<Props> = ({ issuedTokens, issuer }) => {
    return (
        <TokenContainer>
            <TableToken>
                <TheadToken>
                    <TrToken>
                        <ThToken>Currency Code</ThToken>
                        <ThToken>Issuer</ThToken>
                        <ThAmount>Amount</ThAmount>
                    </TrToken>
                </TheadToken>
                <tbody>
                    {issuer ? (
                        issuedTokens.map((token: any, i: any) => {
                            return (
                                <TrToken key={i}>
                                    <TdToken>{token.currency}</TdToken>
                                    <LinkItem to="/">
                                        <TdTokenAddress>
                                            {issuer}
                                        </TdTokenAddress>
                                    </LinkItem>
                                    <TdAmount>
                                        {parseStringToNumber(token.value)}{" "}
                                        {token.currency}
                                    </TdAmount>
                                </TrToken>
                            );
                        })
                    ) : (
                        <TrToken>
                            <TdNotFound>No tokens found.</TdNotFound>
                        </TrToken>
                    )}
                </tbody>
            </TableToken>
        </TokenContainer>
    );
};
export default TokenTable;
