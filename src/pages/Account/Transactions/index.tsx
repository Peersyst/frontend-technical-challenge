import React, { Suspense, lazy } from "react";
import {
	AccountCol, DateCol, StatusCol, TransactionsBody, TransactionsHeader, TransactionsTable, TypeCol,
} from "./index.style";
import Spinner from "../../../components/Spinner";

const Body = lazy(() =>
  import('../components/index')
    .then(({ BodyTab }: any) => ({ default: BodyTab })),
);

function TransactionsTab() {

	return (
		<TransactionsTable>
			<TransactionsHeader>
				<AccountCol>
					Account
				</AccountCol>
				<TypeCol>
					Type
				</TypeCol>
				<StatusCol>
					Status
				</StatusCol>
				<DateCol>
					Date
				</DateCol>
			</TransactionsHeader>
			<TransactionsBody>
				<Suspense fallback={<Spinner />}>
					<Body />
				</Suspense>
			</TransactionsBody>
		</TransactionsTable>
	);
}

export default TransactionsTab;
