import React from 'react';
import { useParams } from 'react-router-dom';

const TaskPage = ({ login }) => {
	return (
		<div>
			<h1>Task Page</h1>
			<button onClick={login}>Logout</button>
		</div>
	);
};

export default TaskPage;
