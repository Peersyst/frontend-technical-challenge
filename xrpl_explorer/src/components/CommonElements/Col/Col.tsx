import { FunctionComponent } from "react";
import { ColStyled } from "./Col.styles";

interface ColProps {
    children: React.ReactNode;
    className?: string;
}

const Col: FunctionComponent<ColProps> = ({children, className}) => {
    return (
        <ColStyled className={className}> {children} </ColStyled>
    )
}

export default Col;