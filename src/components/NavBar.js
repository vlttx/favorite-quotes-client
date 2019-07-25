import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
// import Login from './LoginForm'
import { NavLink } from 'react-router-dom'


const NavBar = ({currentUser, loggedIn}) => {
	return (
		<div className="nav">
		<NavLink exact className="activeClass" to="/">Home  </NavLink>
		<NavLink exact className="activeClass" to="/my-quotes">My Quotes  </NavLink>
		<NavLink exact className="activeClass" to="/my-quotes/new">New Quote  </NavLink>
		</div>
		)
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
	// <NavLink exact activeClass to="/logout">Log Out</NavLink>
