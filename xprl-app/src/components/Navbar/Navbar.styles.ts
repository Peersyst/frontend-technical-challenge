/** @format */

import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 40px);
    margin: 0 20px;
    height: 79px;
    @media (min-width: 900px) {
        width: calc(100% - 80px);
        margin: 0 40px;
    }
`;

export const ImgLogo = styled.img`
    height: 25px;
`;
