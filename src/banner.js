import logo from './assets/logo.png'
import "./banner.css"
function Banner (){
    return (
        <div className='banner-container'>
            <img className='logo' src={logo} alt='logo page' />
            <h1 className='title'>La maison jungle</h1>
        </div>
    );
}

export default Banner;