import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ({ login }) => {
	const history = useHistory();

	const navigateTo = (path) => {
		history.push(path);
	};

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={login}>Login Up</button>
			<button onClick={() => navigateTo('/register')}>Go Register Page</button>
		</div>
	);
};

export default LoginPage;
