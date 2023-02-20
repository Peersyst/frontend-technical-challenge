import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckboxInput = styled.input.attrs({ type: 'radio' })`
  height: 16px;
  accent-color: #32e685;
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
`;