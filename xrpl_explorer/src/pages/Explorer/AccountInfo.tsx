import { Fragment, FunctionComponent } from "react";
import Row from "../../components/CommonElements/Row/Row";
import { BottomRowTitle, InfoList, InfoListItem, AccountLabel } from "./Explorer.styles";
import { AccountRoot } from "xrpl/dist/npm/models/ledger";
import { XRP_CHANGE } from "../../constans/constans";

/**
 * Component to display account info for Explorer page
 * 
 * @param account
 * @returns 
 */

interface AccountInfoProps {
    account: AccountRoot;
  }

/**
 * Component to display account info for Explorer page
 */

const AccountInfo: FunctionComponent<AccountInfoProps> = ({account}) => {
    return (
        <Fragment>
        <Row>
            <AccountLabel> <h1> {account.Account} </h1> </AccountLabel>
        </Row>
        <Row>
            <BottomRowTitle>
                <p> XRP BALANCE </p>
                {parseInt(account.Balance) * XRP_CHANGE}
            </BottomRowTitle>
            <InfoList>
                <InfoListItem size='14px'> ACCOUNT INFO </InfoListItem>
                <InfoListItem size='12px'> RESERVE: <b> 42.00 </b></InfoListItem>
                <InfoListItem size='12px'> CURRENT SEQUENCE: <b> {account.Sequence} </b></InfoListItem>
            </InfoList>
        </Row>
        </Fragment>
    )
}

export default AccountInfo;