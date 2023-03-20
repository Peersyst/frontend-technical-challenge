import { SearchbarProps } from "./Searchbar.types";
import { useRef } from "react";
import "./Searchbar.css";
import { ReactComponent as SearchIcon } from "assets/search-icon.svg";

// TODO: Add search functionality
const Searchbar = ({ placeholder, className, style }: SearchbarProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <form
            onClick={handleClick}
            className={`searchbar ${className}`}
            style={style}
        >
            <input
                ref={inputRef}
                placeholder={placeholder}
                className="searchbar-input"
            />
            <SearchIcon />
        </form>
    );
};

export default Searchbar;
