import React from 'react';
import {
  BodyCell, HeaderCell, IssuedTab, NodesTab, TabRow, TokenIssuer,
} from './index.style';

function IssuedTokens() {
  return (
    <>
      <NodesTab>
        <IssuedTab>
          <thead>
            <TabRow>
              <HeaderCell>Currency Code</HeaderCell>
              <HeaderCell>Issuer</HeaderCell>
              <HeaderCell right>Amount</HeaderCell>
            </TabRow>
          </thead>
          <tbody>
            <TabRow>
              <BodyCell>SOLO</BodyCell>
              <BodyCell>
                <TokenIssuer title="rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz">rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz</TokenIssuer>
              </BodyCell>
              <BodyCell right>5,491,779.47186742 SOLO</BodyCell>
            </TabRow>
          </tbody>
        </IssuedTab>
      </NodesTab>
    </>
  );
}

export default IssuedTokens;
