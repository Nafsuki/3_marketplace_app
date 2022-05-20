import React, { useState, useEffect } from 'react';
import './Users.css';

const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsersData = async () => {
		const response = await fetch('http://localhost:8080/users');
		setUsers(await response.json());
		console.log(response);
	};

	useEffect(() => {
		fetchUsersData();
	}, []);

	if (!users) {
		return 'Loading...';
	}

	return (
		<div className='user-container'>
			{users.map((user) => (
				<div className='user-card' key={user.id}>
					<h1 className='user-name'>Name: {user.name}</h1>
				</div>
			))}
		</div>
	);
};

export default Users;
