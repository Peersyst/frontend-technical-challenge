import { Fragment, FunctionComponent, useState } from "react";
import Checkbox from "../../../components/CommonElements/Checkbox/Checkbox";
import Col from "../../../components/CommonElements/Col/Col";
import Row from "../../../components/CommonElements/Row/Row";
import IssuedTokens from "./IssuedTokens";
import Nft from "./Nft";

interface AssetsProps {
    address: string;
}

const Assets: FunctionComponent<AssetsProps> = ({address}) => {

    const [activeTab, setActiveTab] = useState<0|1>(0);

    /**
     * Function to get the content of the active tab in the asset section depending on the activeTab state
     */
    const getActiveTab = (tab: 0|1) => {
        if(tab === 0){
            return <IssuedTokens address={address}/>
        }else{
            return <Nft address={address}/>
        }
    }    

    return (
        <Fragment>
            <Row> 
                <Col> 
                    <Checkbox label="Issued Tokens" checked={activeTab === 0} onChange={()=>{setActiveTab(0)}}/>  
                </Col>
                <Col> 
                     <Checkbox label="Non-Fungible Tokens" checked={activeTab === 1} onChange={()=>{setActiveTab(1)}}/>  
                </Col>
            </Row>
            <Row> 
                {getActiveTab(activeTab)}
            </Row>
        </Fragment>
    )
};

export default Assets;