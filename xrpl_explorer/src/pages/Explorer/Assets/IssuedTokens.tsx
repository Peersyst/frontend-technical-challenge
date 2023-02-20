import { Fragment, FunctionComponent, useEffect, useState } from "react"
import { GatewayBalancesResponse } from "xrpl";
import OrderedList from "../../../components/CommonElements/OrderedList/OrderedList"
import Row from "../../../components/CommonElements/Row/Row";
import Spinner from "../../../components/CommonElements/Spinner";
import ErrorMsg from "../../../components/Messages/ErrorMsg";
import { ISSUED_TOKENS_LIST_HEADER } from "../../../constans/constans";
import { getAccountIssuedTokens } from "../../../services/xrpl";

interface IssuedTokensProps {
    address: string;
}

const IssuedTokens: FunctionComponent<IssuedTokensProps> = ({address}) => {

    const [issuedTokens, setIssuedTokens] = useState<GatewayBalancesResponse>();
    const [error, setError] = useState<Boolean>(false);

    const getIssuedTokens = async () => {
        try{
            const response: GatewayBalancesResponse = await getAccountIssuedTokens(address, 10);
            console.log(response)
            setIssuedTokens(response);
            setError(false)
        }catch(e){
            setError(true)
        }
    }

    useEffect(() => {
        getIssuedTokens();
    }, [])

    return (
        <Fragment>
            <OrderedList headers={ISSUED_TOKENS_LIST_HEADER}>
            {error ? (<ErrorMsg> Error getting Issued Tokens </ErrorMsg>) : 
                
                <Fragment>
                    {issuedTokens ? (
                        <> 
                            <Row fullWidth justifyContent="center"> Not finished yet </Row>
                        </>
                        ) : <Spinner/>
                    }
                </Fragment>
                
            }
            </OrderedList>
        </Fragment>
    )
}

export default IssuedTokens