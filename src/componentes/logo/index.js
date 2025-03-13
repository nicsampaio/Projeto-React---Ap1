import logo from '../../imgs/mercadolivre-logo.png';
import "./estilo.css"

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} width={150} alt='logo' className='logo-img'></img>
            <p> Mercado Livre </p>
        </div>
    )
}

export default Logo