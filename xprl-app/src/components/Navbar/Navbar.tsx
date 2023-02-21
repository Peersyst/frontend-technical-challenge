/** @format */

import { NavbarContainer, ImgLogo } from "./Navbar.styles";
import Logo from "../../assets/xrpl-logo.svg";
import { Toplinks } from "./Toplinks/Toplinks";
import { Searchbar } from "./Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { defaultAddress } from "../../utils/defaultAddress";

export function Navbar() {
    return (
        <>
            <div className="network mainnet">
                <div className="dropdown" role="menubar">
                    <div className="bg">
                        <div className="item selected" role="menuitem">
                            <span>live data</span>
                        </div>
                    </div>
                </div>
            </div>
            <NavbarContainer>
                <Link to={`/accounts/${defaultAddress}`}>
                    <ImgLogo src={Logo} alt="logo-xrpl" />
                </Link>
                <Searchbar />
                <Toplinks />
            </NavbarContainer>
        </>
    );
}
