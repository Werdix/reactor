import React,{FC} from "react"
import styled from "styled-components";
const Search = styled.button`
width: 65px;
height: 25px;
`;


export const SearchBar : FC = () =>{
    return(
    <form>
    <input className="search" type='search' placeholder="ex.: Planet-fitness" name="sbar"></input>
    <Search>Search!</Search>
    </form>
    );
}