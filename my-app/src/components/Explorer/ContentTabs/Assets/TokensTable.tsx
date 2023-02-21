import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import theme from "../../../../utils/theme";
import { GreenText } from "./Assets.styles.d";

import SpinnerLoading from "../../../SpinnerLoading";

const StyledTableCell = styled(TableCell)(() => ({
	borderColor: theme.gray.background,
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.background,
		color: theme.gray.text,
		textTransform: "uppercase",
		fontSize: 9,
		fontWeight: "800",
		paddingBottom: 10,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		color: theme.text,
	},
}));

const StyledTableRow = styled(TableRow)(() => ({
	backgroundColor: theme.background,
	"&:nth-of-type(odd)": {
		color: theme.text,
		backgroundColor: theme.background,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

export default function TokensTable({
	elements,
	issuer,
}: {
	elements: any[];
	issuer: string;
}) {
	return (
		<TableContainer>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Currency Code</StyledTableCell>
						<StyledTableCell>Issuer</StyledTableCell>
						<StyledTableCell>Amount</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{elements.length > 0 ? (
						elements.map((e) => {
							return (
								<StyledTableRow key={e.currency}>
									<StyledTableCell component="th" scope="row">
										{e.currency}
									</StyledTableCell>
									<StyledTableCell>
										<GreenText>{issuer}</GreenText>
									</StyledTableCell>
									<StyledTableCell>
										{parseFloat(e.value).toLocaleString(
											"en-US",
											{
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											}
										)}
									</StyledTableCell>
								</StyledTableRow>
							);
						})
					) : (
						<SpinnerLoading />
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
