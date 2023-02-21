/** @format */

import { SearchbarContainer, SearchbarInput } from "./Searchbar.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Searchbar() {
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState("");

    const handleSearch = (e: any) => {
        navigate(`/accounts/${inputSearch}`);
    };
    return (
        <>
            <SearchbarContainer onSubmit={(e) => handleSearch(e)}>
                <SearchbarInput
                    type="text"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    placeholder="Search by Address, Ledger or Txn"
                />
            </SearchbarContainer>
        </>
    );
}
