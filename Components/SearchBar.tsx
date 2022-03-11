import React,{FC} from "react"
import styled from "styled-components";
const searchBar = styled.input`
width: 500px;
`;


export const SearchBar : FC = () =>{
    return(
    <form>
    <searchBar>
    <button>Search</button>
    </form>);
}