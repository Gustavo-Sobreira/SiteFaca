import { useState } from 'react'
import { AdicionarRemover, CalculadoraDoacoes, CorpoCalculadora, Painel } from './style'

export const Calculadora = (props) => {

    const [Valor, setValor] = useState(0)
    const Adicionar = () => {
        setValor(Valor + 1)
    }
    const Retirar = () => {
        if(Valor>= 1){
            setValor(Valor- 1)
        }
    }

    let doado = Valor
    const Quantidade = () =>{
        let kits = doado / (props.banana + props.cachorroQ + props.agua)
        return (kits.toFixed())
    }

    const Doacao = () => {
        window.location.href="https://api.whatsapp.com/send/?phone=5532988576809&text&type=phone_number&app_absent=0"
    }

    return(
        <CalculadoraDoacoes>
            <CorpoCalculadora>
                <h1>CALCULADORA SOLIDÁRIA</h1>
                <p>Quantos reais deseja doar?</p>

                <Painel>
                    <p>{Valor}</p>
                    <AdicionarRemover>
                        <button id="retirar" onClick={Retirar}>-</button>
                        <button id="adicionar" onClick={Adicionar}>+</button>
                    </AdicionarRemover>
                </Painel>                
                <p>
                    Doando {doado.toFixed(2)} reais você ajudará
                </p>
                <p>{Quantidade()} pessoas</p>
                <p>A terem uma alimentção melhor, hoje!</p>
                <button id="btnDoacao" onClick={Doacao}>Doe já</button>
                
            </CorpoCalculadora>
        </CalculadoraDoacoes>
    )
}