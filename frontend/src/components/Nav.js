import { Link, useNavigate } from 'react-router-dom';
import './css/nav.css'
function Nav(){
  const navigate=useNavigate()

  const logOut=()=>{
    const isconfirmed=window.confirm('Are you sure you want to logout ?')
    if(isconfirmed){
      navigate('/')
    }
  }
    return(
  <header className="nav-cont">
  <h2>Sakthi Restaurant</h2>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/cart" className="nav-link">Cart</Link>
      </li>
      <li className="nav-item">
        {/* <Link to="/" className="nav-link">LogOut</Link> */}
        <span className='nav-link' onClick={logOut}>LogOut</span>
      </li>
    </ul>
  </header>
    )
}

export default Nav;