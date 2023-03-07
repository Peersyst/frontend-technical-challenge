import React from "react";
import XRP from "../../assets/xrpl.svg";

const Logo = ({ width }: { width: string }) => (
	<img
		src={XRP}
		style={{ width }}
		alt="logo"
	/>
);

export default Logo;
