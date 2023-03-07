/* eslint-disable import/extensions */
import styled from 'styled-components';
import { ITypeCategory } from '../../../types';

const categoryColor: { [key: string]: string } = {
  Payment: '#32e685',
};

const categoryBackground: { [key: string]: string } = {
  Payment: '#145c35',
};

export const TypeCategory = styled.div<ITypeCategory>`
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border: 1px solid currentcolor;
  border-radius: 100px;
  font-size: 0.875em;
  line-height: 1;
  font-weight: 600;
  color: ${(props) => categoryColor[props.category]};
  background: ${(props) => categoryBackground[props.category]};
`;

export const CategoryLabel = styled.span`
  color: #ffffff;
`;

export const Status = styled.span`
  display: flex;
  gap: 5px;
  font-weight: 400;
  align-items:center;
  color: #32e685;
`;

export const SendDetails = styled.span`
  font-weight: 700;
  color: #a2a2a4;
  font-size: 0.8em;
  line-height: 12px;
  text-transform: uppercase;
  margin-right: 0.3125rem;
`;

export const AmountDetails = styled.span`
  display: inline-block;
  margin-right: 0.3125rem;
  color: #a2a2a4;
  font-size: 0.8em;
  line-height: 12px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const TransactionDetails = styled.span`
  color: #84f0b6;
  font-size: 0.8em;
  line-height: 12px;
  font-weight: 400;
  text-decoration: none;
  text-transform: none;
`;

export const TransactionError = styled.span`
  padding: 1rem;
  color: #a2a2a4;
  font-size: 1em;
  text-align: center;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
`;
