import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	MenuTabsDiv,
	TabsMenuAndContent,
} from "../../pages/Explorer/Explorer.styles.d";
import ContentTabs from "./ContentTabs/ContentTabs";
import Tab from "./Tab/Tab";

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.text};
`;

export default function MenuTabs({ account }: { account: any }) {
	const dir = document.location.href;
	const [selected, setSelected] = useState(
		dir.includes("transactions") ? "Transactions" : "Assets"
	);

	const handleClick = (currentElement: string) => {
		setSelected(currentElement);
	};
	return (
		<TabsMenuAndContent>
			{account.Account && (
				<>
					<MenuTabsDiv>
						<LinkStyled
							to={`/accounts/${account.Account}/transactions`}
						>
							<Tab
								selected={selected}
								element={"Transactions"}
								handleClick={handleClick}
							/>
						</LinkStyled>
						<LinkStyled
							to={`/accounts/${account.Account}/assets/issued`}
						>
							<Tab
								selected={selected}
								element={"Assets"}
								handleClick={handleClick}
							/>
						</LinkStyled>
					</MenuTabsDiv>
					<ContentTabs account={account.Account} />
				</>
			)}
		</TabsMenuAndContent>
	);
}
