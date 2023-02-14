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

export default function NFTSTable({ elements }: { elements: any[] }) {
	return (
		<TableContainer>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Token ID</StyledTableCell>
						<StyledTableCell>Issuer</StyledTableCell>
						<StyledTableCell>Taxon</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{elements.map((e) => {
						return (
							<StyledTableRow key={e.currency}>
								<StyledTableCell component="th" scope="row">
									<GreenText smallText>
										{e.NFTokenID}
									</GreenText>
								</StyledTableCell>
								<StyledTableCell>
									<GreenText smallText>{e.Issuer}</GreenText>
								</StyledTableCell>
								<StyledTableCell>
									{e.NFTokenTaxon}
								</StyledTableCell>
							</StyledTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
