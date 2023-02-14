import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import theme from "../../../../utils/theme";
import { TransactionTypeDiv, StatusText } from "./TransactionTables.styles.d";
import { Payment } from "../../../../classes/Payment";
import { NFTMintingToken } from "../../../../classes/NFTMintingToken";
import Details from "./Details/Details";
import { getDateParsed } from "../../../../utils/dateParser";

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
	cursor: "pointer",
	"&:nth-of-type(odd)": {
		color: theme.text,
		backgroundColor: theme.background,
	},
	"&:hover": {
		backgroundColor: "#3D3635",
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

export default function TransactionTable({
	elements,
}: {
	elements: Payment[] | NFTMintingToken[];
}) {
	return (
		<TableContainer>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Account</StyledTableCell>
						<StyledTableCell>Transaction Type</StyledTableCell>
						<StyledTableCell>Status</StyledTableCell>
						<StyledTableCell>Date/Time (UTC)</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody sx={{ cursor: "pointer" }}>
					{elements.map((tx) => {
						return (
							<>
								<StyledTableRow key={tx.sender}>
									<StyledTableCell component="th" scope="row">
										{tx.sender}
									</StyledTableCell>
									<StyledTableCell>
										<TransactionTypeDiv>
											{tx.transactionType}
										</TransactionTypeDiv>
									</StyledTableCell>
									<StyledTableCell>
										<StatusText>
											{tx.status ? "Success" : "Rejected"}
										</StatusText>
									</StyledTableCell>
									<StyledTableCell>
										{getDateParsed(new Date(tx.dateTime))}
									</StyledTableCell>
								</StyledTableRow>
								<Details
									amount={
										tx instanceof Payment
											? tx.amount
											: undefined
									}
									receiver={tx.receiver}
								/>
							</>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
