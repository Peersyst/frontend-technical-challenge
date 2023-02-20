/** @format */

import styled from "styled-components";

export const AccountInfoContainer = styled.div`
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
    @media (min-width: 600px) {
        width: calc(100% - 15px);
        margin: 0 auto;
    }
`;
export const AddressContainer = styled.div`
    margin-top: 106px;
    margin-bottom: 80px;
    text-align: left;
`;

export const Address = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    @media (min-width: 600px) {
        font-size: 24px;
    }
    @media (min-width: 900px) {
        font-size: 42px;
    }
`;
export const HeaderContainer = styled.div`
    margin-bottom: 16px;
`;
