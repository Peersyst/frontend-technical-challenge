/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

export const TokenContainer = styled.div`
    position: relative;
    min-height: 150px;
`;

export const TableToken = styled.table`
    overflow: hidden;
    width: 100%;
    border-top: none;
    margin: auto;
    border-collapse: collapse;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0px;
    text-align: left;
`;
export const TheadToken = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
`;
export const TdToken = styled.td`
    padding: 16px;
    color: #a2a2a4;
    font-size: 12px;
    display: table-cell;
    vertical-align: inherit;
`;
export const TdTokenAddress = styled.td`
    padding: 16px;
    color: #84f0b6;
    font-size: 12px;
    display: table-cell;
    vertical-align: inherit;
`;
export const TdNotFound = styled.td`
    padding: 16px;
    color: #a2a2a4;
    font-size: 16px;
    text-align: center;
    display: table-cell;
    vertical-align: inherit;
    width: 100%;
`;
export const TdAmount = styled.td`
    text-align: right;
    border-collapse: collapse;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0px;
`;

export const TrToken = styled.tr`
    border-bottom: 1px solid #343437;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`;
export const ThToken = styled.th`
    padding: 22px 5px;
    color: #a2a2a4;
    text-align: left;
    text-transform: uppercase;
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    padding-left: 15px;
`;
export const ThAmount = styled.th`
    padding: 22px 5px;
    color: #a2a2a4;
    text-align: right;
    text-transform: uppercase;
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    padding-left: 15px;
`;
export const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
`;
