import styled from "styled-components";
import { Cores } from "../../cores";

export const CalculadoraDoacoes = styled.div`
    /*Dimensões*/
    width: 90%;
    padding:5%;

    /*Cores e fontes*/
    background-color: ${Cores.cores.principal};

    #btnDoacao{
        border: none;
        border-radius: 0.5rem;
        margin-top: 5%;
        width: 20%;
        height: 1.875rem;
        font-weight: 700;
        font-size: 1.5rem;
        background-color: ${Cores.cores.texto_laranja};
        color: ${Cores.cores.texto_branco};
    }
`
export const CorpoCalculadora = styled.div`
    /*Dimensões*/
    width: 96%;
    border-radius: 0.5rem;
    padding: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;

    /*Cores e fontes*/
    
    h1{
        letter-spacing:5px;
        padding: 5%;
        font-weight: 1000;
        font-size: 2.5rem;
        color: ${Cores.cores.texto_laranja};
    }
    p{
        text-align: justify;
        margin-left:5%;
        margin-right:5%;
        font-size: 2rem;
        color: ${Cores.cores.texto_branco};
    }
`
export const Painel = styled.div`
    /*Dimensões*/
    width: 25%;
    height: 6.25rem;
    border-radius: 0.5rem;
    margin-top: 4%;
    margin-bottom: 4%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    /*Cores e fontes*/
    opacity: 0.8;

    p{
        font-size: 3rem;
        margin-top: 4%;
        margin-bottom: 4%;
    }

`
export const AdicionarRemover = styled.div`
    /*Dimensoes*/
    width: 100%;
    display: flex;
    flex-direction: row;
    button{
        width: 100%;
        margin: 3%;
        border: none;
        border-radius: 8px;
        color: white;
    }
    #adicionar{
        background-color: green;
    }
    #retirar{
        background-color: red;
    }
`