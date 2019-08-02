import React from 'react';
// import Login from './LoginForm'
// import Signup from './SignUp'
// import Logout from './Logout'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../App.css';
// import SearchQuotes from './SearchQuotes'
import RandomQuote from "./RandomQuote"
import Button from 'react-bootstrap/Button';


const Home = ({currentUser, loggedIn}) => {
	return (<>

		{ currentUser ?
		<><h1 style={{"fontFamily": "'Homemade Apple', cursive"}}><b> Welcome, {currentUser.name}! </b></h1><RandomQuote /></> :
		<><b><h1 style={{"fontFamily": "'Homemade Apple', cursive"}}> Welcome, stranger! Please <Button variant="primary" size="lg" style={{"fontFamily": 'sans-serif'}}><Link to="/signup" className="button-link">SIGN UP</Link></Button> or <Button variant="success" size="lg" style={{"fontFamily": 'sans-serif'}}><Link to="/login" className="button-link">LOG IN</Link></Button>!</h1></b></>
		}
	
</>)}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Home)


// <div>
// 	<br/>
// 	<br/>
// 	<h1> Welcome, {currentUser.name}! </h1>
// 	<RandomQuote />


	
		
// 	</div>