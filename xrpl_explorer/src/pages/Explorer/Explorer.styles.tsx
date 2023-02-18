import styled from "styled-components";

/**
 * Specific styles for the Explorer page focusing on the layout
 */

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const ExplorerContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AccountLabel = styled.div`
    margin-right: auto;
    font-size: 20px;
    margin-top: 106px;
    margin-bottom: 20px;
`;

const BottomRowTitle = styled.div`
    margin-right: 16px;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
`;

const InfoList = styled.ul`
    width: 100%;
    self-align: right;
    list-style: none;
    margin: 0;
    padding: 0;
`;

interface InfoListItemProps {
    size: string;
}

const InfoListItem = styled.li<InfoListItemProps>`
    text-align: right;
    font-weight: 500;
    font-size: ${({ size }) => size};
`;


export { AccountLabel, BottomRowTitle, InfoList, InfoListItem };