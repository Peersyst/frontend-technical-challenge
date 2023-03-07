import styled from "styled-components";
import { Props } from "../../../../types";

export const NodesTab = styled.div`
	position: relative;
  min-height: 9.375rem;
`;

export const IssuedTab = styled.table`
	overflow: hidden;
	width: 100%;
	border-top: none;
	margin: auto;
	border-collapse: collapse;
	color: #fff;
	font-size: 0.75em;
	letter-spacing: 0px;
	text-align: left;
`
export const TabRow = styled.tr`
border-bottom: 1px solid #343437;	
`;

export const HeaderCell = styled.th<Props>`
	padding: 1.375rem 0.3125rem;
	color: #a2a2a4;
	text-transform: uppercase;
	text-align: ${props => props.right ? 'right' : 'left'}
`;

export const BodyCell = styled.td<Props>`
	padding: 0.9375rem 0.3125rem;
	text-align: ${props => props.right ? 'right' : 'left'}
`;

export const TokenIssuer = styled.span`
	color: #84f0b6;	
`;
