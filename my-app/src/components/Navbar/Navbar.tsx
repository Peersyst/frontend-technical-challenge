import React, { useState } from "react";
import Logo from "../../images/Logo";
import Buttons from "./Buttons/Buttons";
import { NavbarFatherDiv, SearchNavigation } from "./Navbar.styles.d";

export default function Navbar() {
	const [searchText, setSearchText] = useState("");

	const handleChange = (e: any) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			document.location.href = `/accounts/${searchText}/transactions`;
		}
	};
	return (
		<NavbarFatherDiv>
			<Logo />

			<div>
				<SearchNavigation
					type="text"
					placeholder="Search by Address, Ledger or Txn"
					onChange={(e: any) => setSearchText(e.target.value)}
					onKeyDown={handleChange}
				/>
			</div>
			<Buttons />
		</NavbarFatherDiv>
	);
}
