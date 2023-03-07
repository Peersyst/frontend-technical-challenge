import React from "react";
import { BodyCell, HeaderCell, IssuedTab, NodesTab, TabRow, TokenIssuer } from "./index.style";

function NFTokens() {

	return (
		<>
			<NodesTab>
				<IssuedTab>
					<thead>
						<TabRow>
							<HeaderCell>TOKEN ID</HeaderCell>
							<HeaderCell>ISSUER</HeaderCell>
							<HeaderCell>TAXON</HeaderCell>
						</TabRow>
					</thead>
					<tbody>
						<TabRow>
							<BodyCell>
								<TokenIssuer>
									00081388CDD9FC9BB83293FCD98FA700388BC18A0119AA3E1DB7034A000000A9
								</TokenIssuer>
								</BodyCell>
							<BodyCell>
								<TokenIssuer title="rKmSCJzc4pbQuAxyZDskozn2mkrNNppZJE">rKmSCJzc4pbQuAxyZDskozn2mkrNNppZJE</TokenIssuer>
							</BodyCell>
							<BodyCell>14</BodyCell>
						</TabRow>
					</tbody>
				</IssuedTab>	
			</NodesTab>
		</>
	);
}

export default NFTokens;

