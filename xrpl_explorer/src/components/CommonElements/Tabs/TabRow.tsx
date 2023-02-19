import { FunctionComponent } from "react";
import { TabRowStyled } from "./Tabs.styles";

interface TabRowProps {
    children: React.ReactNode;
    className?: string;
}

const TabRow: FunctionComponent<TabRowProps> = ({children, className}) => {
    return (
        <TabRowStyled className={className}>
            {children}
        </TabRowStyled>
    )
}
    

export default TabRow;