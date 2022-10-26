import Styled from "styled-components";

function SearchBarComponent() {
    return (
        <SearchBarContainer>
            <Icon className="fa-solid fa-magnifying-glass fa-xl"></Icon>
        </SearchBarContainer >
    );
};

const SearchBarContainer = Styled.div`
    width: 60vh; 
    height: 50px;
    border-radius: 15px;
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: #252525;
`

const Icon = Styled.i`
    margin-top: 25px;
    margin-left: 30px;
    color: #F45624;    
`


export default SearchBarComponent;