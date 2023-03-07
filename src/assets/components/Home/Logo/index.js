import './index.scss';
import LogoJ from '../../../images/profile-j.png';


const Logo = () => {

    return (
        <div className='logo-container' >
            <img className='profilePic' src={LogoJ} alt="S"/>
        </div>
    )
}

export default Logo