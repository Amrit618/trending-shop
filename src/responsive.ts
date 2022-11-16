import {css} from "styled-components"

export const mobile = ({props}:any|string) =>{
    return css`
@media only screen and (max-width: 400px){
    ${props}
}`;
}