import styled from "styled-components";

const AppHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  color: white;
  height: 100px;
  background-color: black;
  width: 100%;
  top: 0;
  justify-content: center;
`;

const AppHeader = () => {
  return (
    <div>
      <AppHeaderContainer>App Header</AppHeaderContainer>
    </div>
  );
};

export default AppHeader;
