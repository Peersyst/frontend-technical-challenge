import React, { Fragment } from "react";
import Assets from "./Assets";
import Transactions from "./Transactions";
import { Route, Routes } from "react-router-dom";

// transactions account = rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe
// assets account = r3RaNVLvWjqqtFAawC6jbRhgKyFH7HvRS8

export default function ContentTabs({ account }: { account: string }) {
	return (
		<div>
			<Routes>
				<Fragment>
					<Route
						path="/transactions"
						element={<Transactions account={account} />}
					/>
					<Route
						path="/assets/*"
						element={<Assets account={account} />}
					/>
				</Fragment>
			</Routes>
		</div>
	);
}
