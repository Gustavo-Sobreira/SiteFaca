import { NavBar } from "./components/NavBar";
import { ImagemTema } from "./components/ImagemTema"
import { Calculadora } from "./components/Calculadora";

function App() {
  return (
    <div>
      <NavBar 
      funcao1 = "Quem Somos"
      funcao2 = "Ajude-nos">
      </NavBar>
      <ImagemTema></ImagemTema>
      <Calculadora 
        banana={0.50}
        cachorroQ={2.00}
        agua={1.50}
      ></Calculadora>
    </div>
  );
}

export default App;
