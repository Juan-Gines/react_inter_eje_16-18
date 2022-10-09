import React from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
	const history = useHistory();

	const navigateTo = (path) => {
		history.push(path);
	};

	const registerUp = () => {
		alert('Register ok. Redirect to login ...');
		history.push('/login');
	};

	return (
		<div>
			<h1>Register Page</h1>
			<button onClick={registerUp}>Register Up</button>
			<button onClick={() => navigateTo('/login')}>Go Login Page</button>
		</div>
	);
};

export default RegisterPage;
