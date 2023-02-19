import { FunctionComponent } from "react";
import { TabStyled } from "./Tabs.styles";

export interface TabProps {
    children: React.ReactNode;
    className?: string;
    active? : boolean;
    onClick?: () => void;
}

const Tab: FunctionComponent<TabProps> = ({children, className, active = false, onClick}) => {
    return (
        <TabStyled active={active} onClick={onClick} className={className}>
            {children}
        </TabStyled>
    )
}
    

export default Tab;