import styled from "styled-components";
import { Cores } from "../../cores";

export const BackgroundNavbar = styled.div`
    /*Tamanhos*/
    width: 100%;
    height: 9.375rem;
    
    /*Posições */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /*Características */
    background-color: ${Cores.cores.principal};

    a{
        text-decoration: none;
        color: ${Cores.cores.texto_branco};
        font-size: 1.375rem;
    }
`