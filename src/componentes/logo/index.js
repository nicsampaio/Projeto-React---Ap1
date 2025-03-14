import logo from '../../imgs/logo-da-netflix.jpg';
import "./estilo.css"

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} width={180} alt='logo' className='logo-img'></img>
        </div>
    )
}

export default Logo