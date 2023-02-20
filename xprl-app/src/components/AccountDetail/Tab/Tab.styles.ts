/** @format */

import styled from "styled-components";

export const TabContainer = styled.div`
    border-top: 1px solid #343437;
    margin: 8px auto 40px;
    font-size: 14px;
`;
export const TabNormal = styled.div`
    display: inline-block;
    padding: 24px 24px 0;
    border-top: 2px solid transparent;
    color: #a2a2a4;
    cursor: pointer;
    text-align: center;
    width: 130px;
    user-select: none;

    :focus,
    :hover {
        color: #fff;
        font-weight: 700;
    }
`;

export const TabSelected = styled(TabNormal)`
    border-top: 2px solid #fff;
    color: #fff;
    font-weight: 700;
`;
