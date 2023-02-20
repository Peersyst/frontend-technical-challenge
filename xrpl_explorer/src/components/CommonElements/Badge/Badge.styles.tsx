import styled from 'styled-components';
import { BadgeProps } from './Badge';

export const StyledBadge = styled.span<BadgeProps>`
  display: inline-block;
  max-width: ${(props) => props.maxWidth};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
`;
