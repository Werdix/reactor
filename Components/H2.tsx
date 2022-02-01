import styled, { ThemeConsumer } from "styled-components";
import {theme} from "./theme";
const a = "navy";

type Props = {
    type:'primary'|'secondary'
}
export const H2 = styled.h2<Props>`
    font-size: 50em;
    color : ${(props)=>props.type==='secondary'?theme.colors.secondary : theme.colors.primary};
    
`