import { FunctionComponent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { isValidAddress } from "xrpl";
import { SearchbarContainer, SearchbarInput } from "./Header.styles"


const Searchbar: FunctionComponent = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const navigate = useNavigate();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate(`/${inputValue}`);
        }
      };

    return (
        <SearchbarContainer>
            <SearchbarInput type="text"  placeholder="Search by Address" onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress}/>
        </SearchbarContainer>          
    )
}

export default Searchbar