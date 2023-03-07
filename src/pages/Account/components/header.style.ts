import styled from 'styled-components';

export const AccountHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  
  h1 {
    margin-top: 6.625rem;
    margin-bottom: 5rem;
    font-size: 2.625em;
    text-align: left;
    font-style: normal;
    letter-spacing: .5px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 2.625em;
    }
  }
`;

export const AccountAddress = styled.h1`
  margin-top: 6.625rem;
  margin-bottom: 5rem;
  font-size: 2.625em;
  text-align: left;
  font-style: normal;
  letter-spacing: .5px;

  @media (min-width: 600px) {
    font-size: 1.5em;
  }

  @media (min-width: 900px) {
    font-size: 2.625em;
  }
`;

export const AccountInfoContainer = styled.div`
  display: flex;
  min-height: 100px;
  padding-bottom: 1.25rem;
  
  @media (min-width: 600px) {
    width: calc(100% - 15px);
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 75rem;
  }
`;

export const FirstInfoColumn = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;

  @media (min-width: 900px) {
    width: 28.125rem;
  }
`;

export const SecondaryBalance = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #a2a2a4;
  font-size: 0.75em;
  font-weight: 700;

  @media (min-width: 900px) {
    border: none;
  }
`;

export const SecondInfoColumn = styled.div`
  display: block;
  width: 100%;
  vertical-align: top;

  @media (min-width: 900px) {
    width: calc(100% - 450px);
    text-align: right;
  }
`;

export const Title = styled.label`
  color: #fff;
  font-size: 0.875em;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Value = styled.span`
  overflow: hidden;
  margin: -0.25rem 0 0.3125rem -0.1em;
  color: #fff;
  font-size: 1.625em;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 0.125rem;
  gap: 0.3125rem;

  @media (min-width: 900px) {
    font-size: 1.875em;
    line-height: 34px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListElement = styled.li`
  padding: 0.0625rem;
  vertical-align: top;
`;

export const ListLabel = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.75em;
  margin-right: 0.5rem;
`;

export const ListValue = styled.span`
  color: #fff;
  word-break: break-all;
  font-weight: 700;
  font-size: 0.75em;
`;
