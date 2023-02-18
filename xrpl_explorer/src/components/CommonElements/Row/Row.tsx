import React, { FunctionComponent } from 'react';
import RowContainer from './Row.styles';

interface RowProps {
    children: React.ReactNode;
    className?: string;
}

const Row: FunctionComponent<RowProps> = ({ children, className }) => {
    return <RowContainer className={className}>{children}</RowContainer>;
};

export default Row;