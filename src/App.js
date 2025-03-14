import './App.css';
import Logo from "./componentes/logo/index"
import sacola from "./imgs/sacola.png"

const navbarOpcoes = ['Crie a sua conta', 'Entrar', 'Compras', 'Ofertas', 'Cupons', 'Supermercado', 'Moda', 'Mercado Play', 'Vender', 'Contato']
const navbarIcones = [sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          { navbarOpcoes.map( (texto) => (
            <li className='opcao'> <p>{texto}</p> </li>
          ))}
        </ul>

        <ul className='icones'>
          {navbarIcones.map((icone) => (
            <li className='icone'><img src={icone} width="20" height="20"></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
