import { Fragment, FunctionComponent, useEffect, useState } from "react"
import { AccountNFTsResponse } from "xrpl";
import Col from "../../../components/CommonElements/Col/Col"
import OrderedList from "../../../components/CommonElements/OrderedList/OrderedList"
import { ListItem } from "../../../components/CommonElements/OrderedList/OrderedList.styles"
import Spinner from "../../../components/CommonElements/Spinner";
import ErrorMsg from "../../../components/Messages/ErrorMsg";
import { NFT_LIST_HEADER } from "../../../constants/constants";
import { getAccountNfts } from "../../../services/xrpl";

interface NftProps {
    address: string;
}

const Nft: FunctionComponent<NftProps> = ({address}) => {

    const [nfts, setNfts] = useState<AccountNFTsResponse>();
    const [error, setError] = useState<Boolean>(false);

    const getNfts = async () => {
        try{
            const response: AccountNFTsResponse = await getAccountNfts(address, 10);
            setNfts(response);
            setError(false)
        }catch(e){
            setError(true)
        }
    }

    useEffect(() => {
        getNfts();
    }, [])

    return (
        <Fragment>
            <OrderedList headers={NFT_LIST_HEADER}>
            {error ? (<ErrorMsg> Error getting NFTs </ErrorMsg>) : 
                <Fragment>
                    {nfts ? (<> 
                        {nfts.result.account_nfts.map((nft, index) => (
                            <ListItem key={index}>   
                                <Col> <a> {nft.NFTokenID} </a> </Col> 
                                <Col> <a> {nft.Issuer} </a> </Col> 
                                <Col> {nft.NFTokenTaxon} </Col>  
                            </ListItem>
                        ))}
                    </>) : <Spinner/>
                    }
                </Fragment>
            }
            </OrderedList>
        </Fragment>
    )
}

export default Nft