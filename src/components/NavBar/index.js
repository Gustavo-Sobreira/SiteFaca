import { Logo } from "../Logo/index.js"
import { BackgroundNavbar } from "./style.js"
export const NavBar = (props) => {
    return(
        <BackgroundNavbar>
            <a href={props.funcao1}>{props.funcao1}</a>
            <Logo></Logo>
            <a href={props.funcao2}>{props.funcao2}</a>
        </BackgroundNavbar>
    )
}