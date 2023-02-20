import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding: 10px;
`;

const HeaderSection = styled.div`
    text-align: center;
    width: 100%;
`;

const HeaderLogo = styled.div`
    width: 104px;
`;

const SearchbarContainer = styled.div`
    justify-content: center;
    margin: 24px 0;
    text-align: right;
`;

const SearchbarInput = styled.input`
    border: none;
    border-radius: 100px;
    background-color: #232325;
    font-size: 10px;
    line-height: 15px;
    background-size: 12px;
    color: #fff;
    text-align: left;
    font-weight: 400;
    width: 272px;
    padding: 8px 25px;
    background-position-x: 235px;
`;

export { HeaderContainer, HeaderSection, HeaderLogo, SearchbarInput, SearchbarContainer };