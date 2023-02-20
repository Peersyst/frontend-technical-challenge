
import styled from 'styled-components';

/**
 * Row Styled component for Row
 * Can make it more generic by adding props for padding, margin, etc
 * in function of project scale
 */

interface RowContainerProps {
    backgroundColor?: string;
    fullWidth?: boolean;
    justifyContent?: string;
}

const RowContainer = styled.div<RowContainerProps>`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding: 16px;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    background-color: ${(props) => props.backgroundColor ?? 'transparent'};
    width: ${(props) => (props.fullWidth ? '100%' : '')};
    justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
`;

export default RowContainer;