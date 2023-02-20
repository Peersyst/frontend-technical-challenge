import React, { FunctionComponent } from 'react';
import RowContainer from './Row.styles';

interface RowProps {
    children: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    fullWidth?: boolean;
    justifyContent?: string;
}

const Row: FunctionComponent<RowProps> = ({ children, className, backgroundColor, fullWidth, justifyContent }) => {
    return <RowContainer justifyContent={justifyContent} fullWidth={fullWidth} backgroundColor={backgroundColor} className={className}>{children}</RowContainer>;
};

export default Row;