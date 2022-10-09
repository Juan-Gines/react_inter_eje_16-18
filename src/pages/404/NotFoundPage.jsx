import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
	const history = useHistory();

	const navigateTo = (path) => {
		history.push(path);
	};

	return (
		<div>
			<h1>Error 404 - Not Found Page</h1>
			<button onClick={() => navigateTo('/')}>Return</button>
		</div>
	);
};

export default NotFoundPage;
