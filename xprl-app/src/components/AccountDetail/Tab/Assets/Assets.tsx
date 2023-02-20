/** @format */

import { useState } from "react";
import TokenTable from "./TokenTable/TokenTable";
import NftTable from "./NftTable/NftTable";
import { getCurrencies } from "../../../../api/request";
import { useEffect } from "react";
import { Loading } from "../../../../utils/Loading/Loading";
import {
    Radio,
    LabelRadio,
    RadioContainer,
    LabelRadioDesactivated,
} from "./Assets.styles";
import { getNft } from "../../../../api/request";

interface Props {
    address: string;
}
const Assets: React.FC<Props> = ({ address }) => {
    const [inputSelected, setInputSelected] = useState<string>("Issued Tokens");
    const [issuedTokens, setIssuedTokens] = useState<any>([]);
    const [nftToken, setNftToken] = useState<any>([]);
    const [issuer, setIssuer] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getIssuedTokens = async () => {
            try {
                const issuerToken = await getCurrencies(address);
                if (issuerToken) {
                    setIssuer(Object.keys(issuerToken)[0]);
                    setIssuedTokens(issuerToken[Object.keys(issuerToken)[0]]);
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        getIssuedTokens();

        const getNftToken = async () => {
            try {
                const nftToken = await getNft(address);
                setNftToken(nftToken);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        getNftToken();

        return () => {
            setIsLoading(true);
        };
    }, [address]);

    return (
        <>
            <RadioContainer>
                <LabelRadio onClick={(e) => setInputSelected("Issued Tokens")}>
                    <Radio
                        type="radio"
                        checked={
                            inputSelected === "Issued Tokens" ? true : false
                        }
                    />
                    Issued Tokens
                </LabelRadio>
                <LabelRadioDesactivated
                    onClick={(e) => setInputSelected("Nft Token")}
                >
                    <Radio
                        type="radio"
                        checked={
                            inputSelected === "Issued Tokens" ? false : true
                        }
                    />
                    Non-FungibleTokens
                </LabelRadioDesactivated>
            </RadioContainer>
            {isLoading ? (
                <Loading />
            ) : inputSelected === "Issued Tokens" ? (
                <TokenTable issuedTokens={issuedTokens} issuer={issuer} />
            ) : (
                <NftTable nftToken={nftToken} />
            )}
        </>
    );
};
export default Assets;
