import './index.scss'
import ProfileJ from '../../../images/profile-j.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="profilePic" src={ProfileJ} alt="Profile" />
    </div>
  )
}

export default Logo
