/** @format */

import styled from "styled-components";

export const BalanceContainer = styled.div`
    min-height: 100px;
    padding-bottom: 20px;
`;
export const HeaderContainer = styled.div`
    @media (min-width: 600px) {
        width: calc(100% - 15px);
        margin: 0 auto;
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`;
export const FirstColumn = styled.div`
    display: inline-block;
    width: 100%;
    vertical-align: top;
    @media (min-width: 900px) {
        width: 450px;
    }
`;
export const SecondColumn = styled.div`
    display: inline-block;
    width: 100%;
    vertical-align: top;
    @media (min-width: 900px) {
        width: calc(100% - 450px);
        text-align: right;
    }
`;
export const SecondaryBalance = styled.div`
    padding: 0 8px;
    margin-bottom: 20px;
    color: #a2a2a4;
    font-size: 12px;
    font-weight: 700;
    border: none;
`;
export const BalanceTitle = styled.div`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
`;
export const BalanceValue = styled.div`
    overflow: hidden;
    margin: -4px 0 5px -0.1em;
    color: #fff;
    font-size: 40px;
    line-height: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
`;
export const InfoSecondary = styled.div`
    padding: 0 8px;
    margin-bottom: 20px;
    color: #a2a2a4;
    font-size: 12px;
    font-weight: 700;
    @media (min-width: 900px) {
        border: none;
    }
`;

export const AccountInfo = styled.div`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
`;
export const Reserve = styled.div`
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
`;
