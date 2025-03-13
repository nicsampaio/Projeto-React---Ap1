import './App.css';
import Logo from "./componentes/logo/index"

const TOpcao = ['Texto 01', 'Texto 02', 'Texto 03']

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcao'>
          { TOpcao.map( (texto) => (
            <li className='opcoes'> <p>{texto}</p> </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
