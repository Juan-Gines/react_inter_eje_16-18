import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TaskPage from './pages/tasks/TaskPage';
function App() {
	const [logged, setLogged] = useState(false);

	const login = () => {
		alert('You are been logged in. Redirect to Task ...');
		setLogged(!logged);
	};

	const logout = () => {
		alert('You are been logged out. Redirect to Login ...');
		setLogged(!logged);
	};

	return (
		<Router>
			<Switch>
				{/* Redirectio to protect our routes */}
				<Route exact path="/">
					{logged ? <Redirect from="/" to="/task" /> : <Redirect from="/" to="/login" />}
				</Route>
				<Route exact path="/login">
					{logged ? <Redirect from="/login" to="/task" /> : <LoginPage login={login} />}
				</Route>
				<Route path="/register" component={RegisterPage} />
				<Route exact path="/task">
					{logged ? <TaskPage login={logout} /> : <Redirect from="/task" to="/login" />}
				</Route>
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default App;

