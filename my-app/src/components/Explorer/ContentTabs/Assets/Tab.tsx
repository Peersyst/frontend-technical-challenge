import React from "react";
import { CheckboxStyled } from "./Assets.styles.d";

export default function Tab({
	title,
	setTabSelected,
	tabSelected,
}: {
	title: string;
	setTabSelected: Function;
	tabSelected: string;
}) {
	return (
		<>
			<CheckboxStyled
				onClick={() => setTabSelected(title)}
				selected={title === tabSelected}
			>
				{" "}
				<input type="radio" checked={title === tabSelected} />
				{title}{" "}
			</CheckboxStyled>
		</>
	);
}
