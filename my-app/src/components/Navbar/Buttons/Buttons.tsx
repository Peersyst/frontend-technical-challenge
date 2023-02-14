import React from "react";
import { ButtonDiv, ButtonA } from "../Navbar.styles.d";

export default function Buttons() {
	return (
		<ButtonDiv>
			<ButtonA href="/">Explorer</ButtonA>
			<ButtonA href="/accounts/7318347">Network</ButtonA>
			<ButtonA href="https://xrpl.org/" outPage>
				XRPL.org
			</ButtonA>
			<ButtonA href="https://github.com/ripple/explorer" github outPage>
				Github
			</ButtonA>
		</ButtonDiv>
	);
}
