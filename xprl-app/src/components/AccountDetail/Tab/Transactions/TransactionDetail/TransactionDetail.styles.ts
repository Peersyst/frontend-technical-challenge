/** @format */

import styled from "styled-components";

export const TransactionContainer = styled.div`
    position: relative;
    display: block;
    border-bottom: solid 1px #343437;
    line-height: 20px;
    @media (min-width: 600px) {
        flex-direction: row;
        padding: 0;
    }
`;
export const UpperTransaction = styled.div`
    display: flex;
    align-items: stretch;
    color: #fff;
    font-size: 14px;
    gap: 0 12px;
    padding: 12px 32px;
    :hover {
        background-color: #343437b3;
        cursor: pointer;
    }
`;

export const DetailsTransaction = styled.div`
    min-height: 30px;
    padding: 32px;
    background: rgba(52, 52, 55, 0.5);
    color: #a2a2a4;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 400;
`;
export const Column = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    letter-spacing: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const ColumnAccount = styled(Column)`
    flex: 3;
    @media (min-width: 600px) {
        display: inline-block;
    }
`;
export const ColumnType = styled(Column)`
    flex: 2;
    font-weight: 600;
    @media (min-width: 900px) {
        width: 230px;
    }
`;
export const PaymentContainer = styled.div`
    background: #145c35;
    display: inline-flex;
    max-width: 100%;
    align-items: center;
    padding: 2px 8px;
    border: 1px solid currentcolor;
    border-radius: 100px;
    font-size: 14px;
    line-height: 1;
    font-weight: 600;
    color: #32e685;
`;
export const PaymentLabel = styled.span`
    color: #fff;
    letter-spacing: 0;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const ColumnStatus = styled(Column)`
    font-weight: 400;
    @media (min-width: 900px) {
        width: auto;
        flex: 2 2;
    }
`;
export const StatusTransaction = styled.span`
    color: #32e685;
    padding-left: 4px;
`;
export const StatusContainer = styled.div`
    display: inline-flex;
    max-width: 100%;
    align-items: center;
`;

export const ColumnDate = styled(Column)`
    justify-content: right;
    font-weight: 500;
    @media (min-width: 900px) {
        width: 185px;
        flex: none;
    }
`;
export const PaymentTransaction = styled.div``;
export const SendLabel = styled.label`
    font-weight: 900;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 8px;
    font-size: 12px;
`;
export const CurrencyLabel = styled.label`
    font-weight: 400;
    margin-left: 2px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 8px;
    font-size: 12px;
`;
export const Amount = styled.span`
    font-weight: 400;
    display: inline-block;
    margin: 0;
    font-size: 12px;
`;
export const AccountTo = styled.span`
    font-size: 12px;
    text-transform: none;
    position: relative;
    z-index: 10;
    color: #84f0b6;
    text-decoration: none;
    cursor: pointer;
`;
