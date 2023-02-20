import { FunctionComponent } from "react"
import { ReactSVG } from "react-svg"
import { HeaderContainer, HeaderLogo, HeaderSection } from "./Header.styles"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import logo from "../../../assets/images/logos/ledger-logo-white.svg"


const Header: FunctionComponent = () => {
    return (
        <HeaderContainer>
            <HeaderSection>
                <HeaderLogo>
                    <ReactSVG src={logo}/>
                </HeaderLogo>
            </HeaderSection>
            <HeaderSection>
                <Searchbar/>
            </HeaderSection>
            <HeaderSection>
                <Navbar/>
            </HeaderSection>
        </HeaderContainer>
    )
}

export default Header