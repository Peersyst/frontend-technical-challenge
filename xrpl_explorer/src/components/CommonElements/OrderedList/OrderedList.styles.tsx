import styled from "styled-components";

export const OlStyled = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
    ine-height: 24px;
    list-style: none;
    table-layout: fixed;
    width: 100%;
    color: white;
    a {
        color: #81ebb2;
      }

    p {
        color: #969697;
    }

`;

interface ListItemProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
}

export const ListItem = styled.li<ListItemProps>`
    justify-content: space-between;
    display: flex;
    padding: 16px;
    border-bottom: 1px solid #343437;
    font-size: ${(props) => props.fontSize ?? '12px'};
    font-weight: ${(props) => props.fontWeight ?? ''};
    color: ${(props) => props.color ?? 'white'};
`;
