import React from "react";
import styled from "styled-components";

const AccountInfoContainer = styled.div`
  padding-top: 7vw;
`;

const AddressIdText = styled.div`
  color: white;
  font-size: 3vw;
  font-weight: 800;
  margin-top: 100px;
  margin-bottom: 80px;
`;

const AccountInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 20px 8px;
  min-height: 100px;
`;

const InfoText = styled.div`
  color: white;
  font-size: 1vw;
  margin: 0;
  font-weight: 500;
`;
const InfoLeftText = styled(InfoText)`
  align-self: flex-end;
`;
const ValueText = styled.div`
  color: white;
  font-size: 2vw;
  font-weight: 700;
  margin: 0;
`;

const LeftInfoCell = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

interface AccountInfoI {
  id: string;
  balance: string | undefined;
  reserve: string | undefined;
}

const AccountInfo = ({ id, balance, reserve }: AccountInfoI) => {
  return (
    <AccountInfoContainer>
      <AddressIdText>{id}</AddressIdText>
      <AccountInfoRow>
        <div>
          <InfoText>XRP BALANCE</InfoText>
          <ValueText>{balance}</ValueText>
        </div>
        <LeftInfoCell>
          <InfoLeftText>ACCOUNT INFO</InfoLeftText>
          <ValueText>{reserve}</ValueText>
        </LeftInfoCell>
      </AccountInfoRow>
    </AccountInfoContainer>
  );
};

export default AccountInfo;
