import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AccountRoot from "xrpl/dist/npm/models/ledger/AccountRoot";
import AccountInfo from "../components/AccountInfo";
import Tabs, { tabI } from "../components/Tabs/Tabs";
import Transacciones from "../components/TransactionsList/TransactionsList";
import { DEFAULT_ADDRESS, XRP_FORMATER } from "../constants";
import { getXRPAccountInfo } from "../services/xrpService";

const HomeContainer = styled.div`
  padding: 8px 5.5vw 8px 5.5vw;
`;

const Home = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [accountInfo, setAccountInfo] = useState<AccountRoot>();

  const balance = (
    parseInt(accountInfo?.Balance ?? "") * XRP_FORMATER
  )?.toString();

  const reserve = ((accountInfo?.Sequence ?? 0) * XRP_FORMATER).toString();

  const tabs: tabI[] = [
    {
      name: "Transactions",
      path: "transactions",
      element: <Transacciones account={id} />,
    },
    {
      name: "Assets",
      path: "assets",
      element: (
        <Tabs
          tabType="Check_box"
          tabs={[
            {
              name: "Issued Tokens",
              path: "issued",
              element: <h3 style={{ color: "white" }}>issued</h3>,
            },
            {
              name: "Non-Fungible Tokens",
              path: "nft",
              element: <h3 style={{ color: "white" }}>nft</h3>,
            },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    getXRPAccountInfo(DEFAULT_ADDRESS).then((res) => {
      setAccountInfo(res?.result?.account_data);
      navigate(`/${DEFAULT_ADDRESS}`);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContainer>
      {id && !!accountInfo && (
        <>
          <AccountInfo id={id} balance={balance} reserve={reserve} />
          <Tabs tabType="Tab" tabs={tabs} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
