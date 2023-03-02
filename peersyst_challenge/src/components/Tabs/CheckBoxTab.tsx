import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const CustomInput = styled.input`
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  border: 1px double #32e685;
  box-sizing: border-box;
  -webkit-appearance: none;
  &:checked {
    background-color: #32e685;
  }
`;

interface CheckBoxTabI extends LinkProps {
  isActive: boolean;
  onClick: () => void;
}
const CheckBoxTab = ({
  children,
  to,
  isActive,
  onClick,
  ...props
}: CheckBoxTabI) => {
  return (
    <CustomLink to={to} {...props} onClick={onClick}>
      <CustomInput type="checkbox" checked={isActive} onChange={(e) => {}} />
      {children}
    </CustomLink>
  );
};
export default CheckBoxTab;
