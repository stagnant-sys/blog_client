import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  if (localStorage.role !== 'admin') {
    return null;
  }
  return (
    <Link to='https://scientized-admin.netlify.app/'>
      <strong style={{color: '#40916d', textDecoration: 'underline'}}>Admin dashboard</strong>
    </Link>
  )
}

const UserContainer = () => {
  const navigateTo = useNavigate();

  const logout = async () => {
    if (window.confirm('Do you really want to log out ?')) {
      localStorage.clear();
      navigateTo('/');
    } else {
      return;
    }
  }

  if (!localStorage.logged_in) {
    return (
      <div className="header_user-container">
        <button className="button_primary"><Link to="/user/login">Log in</Link></button>
      </div>
    )
  }
  return (
    <div className="header_user-container">
      <div>connected as <strong>{localStorage.username}</strong></div>
      <AdminDashboard />
      <button onClick={logout} className="button_secondary">Logout</button>
    </div>
  )
}



const Header = () => {
  return (
    <header className="main-header">
      <div className="header_logo"><Link to='/'>Scientized</Link></div>
      <UserContainer />
    </header>
  )
}

export default Header;