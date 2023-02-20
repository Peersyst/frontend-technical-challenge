import { FunctionComponent } from "react";
import { Oval } from "react-loader-spinner";
import Row from "../Row/Row";

interface SpinnerProps {
    width?: number;
    secondaryColor?: string;
}

const defaultSpinnerProps = {
    width: 40,
    secondaryColor: "gray"
}

/**
 * Spinner component in order to dont repeat innecesary code
 */

const Spinner: FunctionComponent<SpinnerProps> = ({width, secondaryColor}) => {
    return (
        <Row fullWidth justifyContent="center">
            <Oval secondaryColor={secondaryColor} width={width}/>
        </Row>
    )
}

Spinner.defaultProps = defaultSpinnerProps;

export default Spinner;