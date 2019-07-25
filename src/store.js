import { createStore, applyMiddleware, combineReducers, compose } from 'redux' 
import  thunk  from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myQuotes from './reducers/myQuotes'
import signupForm from './reducers/signupForm'


const reducer = combineReducers({
	currentUser,
	loginForm,
	myQuotes,
	signupForm
	})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store