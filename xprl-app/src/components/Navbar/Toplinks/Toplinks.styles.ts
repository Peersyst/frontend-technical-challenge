/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopLinksContainer = styled.div`
    text-decoration: none;
    display: none;
    margin-bottom: -1px;
    color: #a2a2a4;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 500;
    @media (min-width: 900px) {
        display: flex;
        flex-grow: inherit;
        align-content: center;
        justify-content: space-around;
    }
`;
export const MenuItem = styled.div`
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    margin-bottom: 8px;
`;
export const LinkItem = styled(Link)`
    display: block;
    padding: 26px 24px 12px;
    margin-bottom: -1px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
`;
