import './App.css';
import Logo from "./componentes/logo/index"
import login from "./imgs/login.png"

const navbarOpcoes = ['Crie a sua conta', 'Login', 'Planos de Assinatura', 'Catálago']
const navbarIcones = [login]

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
