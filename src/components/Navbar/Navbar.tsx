import { ReactComponent as XrplLogo } from "assets/xrpl-logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "components/Searchbar/Searchbar";

const Navbar = () => (
    <nav className="navbar">
        <div>
            <Link to="/" className="navbar-logo">
                <XrplLogo />
            </Link>
        </div>
        <div>
            <Searchbar
                placeholder="Search by Address, Ledger or Txn"
                className="navbar-searchbar"
            />
        </div>
        <div />
    </nav>
);

export default Navbar;
