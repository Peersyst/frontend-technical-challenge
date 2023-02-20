/** @format */

import styled from "styled-components";

export const TransactionsContainer = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 12px;
    line-height: 24px;
    list-style: none;
    table-layout: fixed;
    @media (min-width: 900px) {
        font-size: 14px;
    }
`;

export const HeaderTable = styled.li`
    display: flex;
    padding: 0 16px 18px;
    font-size: 10px;
    gap: 0 12px;
    text-transform: uppercase;
    position: relative;
    border-bottom: solid 1px #343437;
    line-height: 20px;
    @media (min-width: 600px) {
        padding: 12px 32px;
    }
`;
export const ColumnAccount = styled.div`
    color: #838386;
    font-weight: 700;
    display: none;
    flex: 3;
    @media (min-width: 600px) {
        display: inline-block;
    }
`;
export const ColumnType = styled.div`
    color: #838386;
    flex: 2;
    font-weight: 600;
    @media (min-width: 900px) {
        width: 230px;
    }
`;
export const ColumnStatus = styled.div`
    color: #838386;
    font-weight: 700;
    width: auto;
    flex: 2 2;
    @media (min-width: 900px) {
        width: 230px;
    }
`;
export const ColumnDate = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    letter-spacing: 0;
    color: #838386;
    font-weight: 700;
    width: 185px;
    flex: none;
    justify-content: right;
    @media (min-width: 900px) {
        width: 230px;
    }
`;

export const NotFoundTd = styled.li`
    padding: 16px;
    color: #a2a2a4 !important;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid #343437;
`;

export const LoadMore = styled.div`
    display: block;
    padding: 10px 20px;
    width: 150px;
    border: 1px solid #a2a2a4;
    border-radius: 100px;
    margin: 10px auto;
    background: #000;
    color: #a2a2a4;
    cursor: pointer;
    font-size: 16px;
    outline: inherit;
    font-weight: 700;
`;
