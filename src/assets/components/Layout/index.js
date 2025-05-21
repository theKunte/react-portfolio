import './index.scss'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
