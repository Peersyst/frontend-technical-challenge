import React from "react";
import { TabDiv } from "../../../pages/Explorer/Explorer.styles.d";

export default function Tab({
	selected,
	handleClick,
	element,
}: {
	element: string;
	handleClick: Function;
	selected: string;
}) {
	return (
		<TabDiv
			selected={selected === element}
			onClick={() => handleClick(element)}
		>
			{element}
		</TabDiv>
	);
}
