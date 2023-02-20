import { StyledBadge } from "./Badge.styles";

export interface BadgeProps {
    borderColor?: string;
    textColor?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    maxWidth?: string;
    children?: React.ReactNode;
    backgroundColor?: string;
  }

const defaultProps: BadgeProps = {
    borderColor: "green",
    textColor: "white",
    padding: "2px 14px",
    border: "1px solid green",
    borderRadius: "100px",
    maxWidth: "100%",
};
  

const Badge: React.FC<BadgeProps> = ({
    borderColor,
    textColor,
    padding,
    border,
    borderRadius,
    maxWidth,
    children,
    backgroundColor
  }) => {
    return (
      <StyledBadge
        borderColor={borderColor}
        textColor={textColor}
        padding={padding}
        border={border}
        borderRadius={borderRadius}
        maxWidth={maxWidth}
        backgroundColor={backgroundColor}
      >
        {children}
      </StyledBadge>
    );
};
  
  Badge.defaultProps = defaultProps;
  
export default Badge;