import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const DefaultTabWrapper = styled.div<{ isActive?: boolean }>`
  color: white;
  border-top: 1px solid
    ${({ isActive = false }) => (isActive ? "white" : "transparent")};
  font-weight: ${({ isActive = false }) => (isActive ? "700" : "300")};
  padding: 16px;
`;
const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

interface DefaultTabI extends LinkProps {
  isActive: boolean;
  onClick: () => void;
}
const DefaultTab = ({
  children,
  to,
  isActive,
  onClick,
  ...props
}: DefaultTabI) => {
  // const [isTabActive, setTabActive] = useState(isActive);
  // const resolved = useResolvedPath(to);
  // const location = useLocation();

  // useEffect(() => {
  //   setTabActive(isActive);
  // }, [isActive]);

  // useEffect(() => {
  //   //TODO set active when default is shown
  //   setTabActive(resolved.pathname === location.pathname);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  return (
    <CustomLink to={to} {...props} onClick={onClick}>
      <DefaultTabWrapper isActive={isActive}>{children}</DefaultTabWrapper>
    </CustomLink>
  );
};
export default DefaultTab;
