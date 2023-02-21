/** @format */

import { TabContainer, TabSelected, TabNormal } from "./Tab.styles";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
    tabState: string;
    setTabState: any;
    address: string;
}

export function Tab({ tabState, setTabState, address }: Props) {
    const url = document.location.href;
    const TabTransaction =
        tabState === "Transactions" ? TabSelected : TabNormal;
    const TabAssets = tabState !== "Transactions" ? TabSelected : TabNormal;

    useEffect(() => {
        if (url.includes("transactions")) {
            setTabState("Transactions");
        } else if (url.includes("assets")) {
            setTabState("Assets");
        }
    }, []);

    return (
        <TabContainer style={{ color: "#fff" }}>
            <Link to={`/accounts/${address}/transactions`}>
                <TabTransaction
                    onClick={() => {
                        setTabState("Transactions");
                    }}
                >
                    {" "}
                    Transactions
                </TabTransaction>
            </Link>
            <Link to={`/accounts/${address}/assets`}>
                <TabAssets
                    onClick={() => {
                        setTabState("Assets");
                    }}
                >
                    {" "}
                    Assets
                </TabAssets>
            </Link>
        </TabContainer>
    );
}
