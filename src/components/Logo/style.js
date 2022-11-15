import styled from "styled-components"
import { Cores } from "../../cores"

export const LogoFaca = styled.div`
    /*Tamanhos*/
    width: 8.75rem;
    height: 8.75rem;

    /*Posições */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    
    /*Características */
    border-radius: 100%;
    background-color: ${Cores.cores.secundaria};
    
    div{
        align-self: center;

        h1{
        color: ${Cores.cores.texto_laranja};
        font-size: 2rem;
        }
        h2{
            color:  ${Cores.cores.texto_branco};
            font-size: 0.95rem;
        }

        h3{
            color: ${Cores.cores.texto_principal};
            font-size: 0.72rem;
        }
    }   
`