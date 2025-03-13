import logo from '../../imgs/logo-mercado-livre.png';
import "./estilo.css"

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} width={150} alt='logo' className='logo-img'></img>
        </div>
    )
}

export default Logo