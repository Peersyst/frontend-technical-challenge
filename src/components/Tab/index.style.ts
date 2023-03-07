import styled from 'styled-components';

export const TabsComponent = styled.div`  
	[role="tablist"] {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-top: 1px solid #343437;
    font-size: 0.875em;
    font-weight: 700;
		margin-bottom: 2rem;

    button {
      border: none;
      display: block;
      cursor: pointer;
      color: white;
      margin: 0 0.0625rem;
      outline: none;
      background-color: black;
      padding: 1.5rem 1.5rem 0;
      border-top: 2px solid transparent;

      &.active,
      &:focus,
      &:hover {
        color: #fff;
        font-weight: 700;
      }

      &.active {
        border-top: 2px solid #fff;
        color: #fff;
        font-weight: 700;
      }
    }
  }
`;
