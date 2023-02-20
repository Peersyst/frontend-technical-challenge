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
} from "../TokenTable/TokenTable.styles";
interface Props {
    nftToken: any;
}
const NftTable: React.FC<Props> = ({ nftToken }) => {
    return (
        <TokenContainer>
            <TableToken>
                <TheadToken>
                    <TrToken>
                        <ThToken>Token id</ThToken>
                        <ThToken>Issuer</ThToken>
                        <ThAmount>Taxon</ThAmount>
                    </TrToken>
                </TheadToken>
                <tbody>
                    {nftToken.length ? (
                        nftToken.map((token: any, i: any) => {
                            return (
                                <TrToken key={i}>
                                    <TdToken>{token.NFTokenID}</TdToken>
                                    <LinkItem to="/">
                                        <TdTokenAddress>
                                            {token.Issuer}
                                        </TdTokenAddress>
                                    </LinkItem>
                                    <TdAmount>{token.nft_serial}</TdAmount>
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
export default NftTable;
