import styled from "styled-components";
import { TabProps } from "./Tab";

export const TabRowStyled = styled.div`
    border-top: 1px solid #343437;
    margin: 8px auto 40px;
    font-size: 14px;
    justify-content: start;
    width: 100%;
`;

export const TabStyled = styled.a <TabProps>`
    display: inline-block;
    padding: 24px 24px 0;
    border-top: ${({ active }) => active ? '2px solid white' : 'none'};
    color: ${({ active }) => active ? 'white' : '#a2a2a4'};
    cursor: pointer;
    text-align: center;
`;