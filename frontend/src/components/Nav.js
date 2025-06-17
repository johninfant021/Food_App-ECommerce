import { Link } from 'react-router-dom';
import './css/nav.css'
function Nav(){
    return(
        <>
          <div className="container">
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
        <Link to="/" className="nav-link">LogOut</Link>
      </li>
    </ul>
  </header>
</div>
        </>
    )
}

export default Nav;