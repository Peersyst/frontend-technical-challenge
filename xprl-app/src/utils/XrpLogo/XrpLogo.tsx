/** @format */
import XRP from "../../assets/xrpl.svg";

interface Props {
    width: number;
}

const XrpLogo: React.FC<Props> = ({ width }) => {
    return (
        <img
            src={XRP}
            style={{ width: width, marginLeft: "4px" }}
            alt="xrp-icon"
        />
    );
};
export default XrpLogo;
