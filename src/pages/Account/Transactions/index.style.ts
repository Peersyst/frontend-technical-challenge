import styled from 'styled-components';

export const TransactionsTable = styled.ol`
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 0.75em;
  line-height: 24px;
  list-style: none;
  table-layout: fixed;

  @media (min-width: 900px) {
    font-size: 1em;
  }
`;

export const TransactionsHeader = styled.li`
  display: flex;
  font-size: 0.625em;
  gap: 0 0.75rem;
  text-transform: uppercase;
  position: relative;
  border-bottom: solid 1px #343437;
  line-height: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 0.75rem 2rem;
  }
`;

export const AccountCol = styled.div`
  color: #838386;
  display: none;
  flex: 3;
  align-items: center;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;

  @media (min-width: 600px) {
    display: inline-block;
  }
`;

export const TypeCol = styled.div`
  color: #838386;
  flex: 2;
  display: flex;
  align-items: center;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;

  @media (min-width: 900px) {
    width: 14.375rem;
  }
`;

export const StatusCol = styled.div`
  color: #838386;
  font-weight: 700;
  width: 3.125rem;
  display: flex;
  flex: 1;
  align-items: center;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 900px) {
    width: auto;
    flex: 2 2;
  }
`;

export const DateCol = styled.div`
  color: #838386;
  font-weight: 700;
  flex: 3;
  justify-content: right;
  display: flex;
  flex: 1;
  align-items: center;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 900px) {
    width: 11.5625rem;
    flex: none;
  }
`;
export const Upper = styled.div`
  @media (min-width: 600px) {
    padding: 0.75rem 2rem;
  }

  display: flex;
  align-items: stretch;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 0.875em;
  gap: 0 12px;
`;

export const ListElement = styled.li`
  &:hover ${Upper} {
    background-color: #343437b3;
  }
`;

export const TransactionsBody = styled.div`
  @media (min-width: 600px) {
      flex-direction: row;
      padding: 0;
  }

  position: relative;
  display: block;
  border-bottom: solid 1px #343437;
  line-height: 20px;
`;
export const Details = styled.div`
  @media (min-width: 600px) {
    font-size: 1em;
  }

  min-height: 1.875rem;
  padding: 2rem;
  background: rgba(52,52,55,.5);
  color: #a2a2a4;
  font-size: 0.625em;
  line-height: 12px;
  text-transform: uppercase;
  font-weight: 400;
`;
