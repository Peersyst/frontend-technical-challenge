import styled from "styled-components";

export const OlStyled = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
    ine-height: 24px;
    list-style: none;
    table-layout: fixed;
    width: 100%;
`;

export const ListItem = styled.li`
    display: flex;
    padding: 16px;
    border-bottom: 1px solid #343437;
    & > div {
        font-size: 10px;
        color: #a2a2a4;
    }
`;
