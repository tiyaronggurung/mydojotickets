import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../store/auth-context';
import './MainHeader.css';
const MainHeader = () => {
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();
	const newTicketHandler = (e) => {
		e.preventDefault();

		if (!authCtx.isLoggedIn) {
			navigate('/auth');
		} else {
			navigate('/tickets/new');
		}
	};

	const logoutHandler = (event) => {
		event.preventDefault();
		authCtx.logout();
		navigate('/tickets/auth');
	};
	// useEffect(() => {
	// 	console.log(authCtx.userID);
	// 	let userID = '';
	// 	if (authCtx.userID === null) {
	// 		userID = 'noUser';
	// 	} else {
	// 		userID = authCtx.userID;
	// 	}
	// 	axios
	// 		.get('http://localhost:8000/api/tickets', {
	// 			headers: {
	// 				userID: userID,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data.data);
	// 			setTickets(res.data.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, [setTickets]);
	// console.log('tickets', tickets);

	return (
		<div className='main-header'>
			<div className='flex-item'>
				<Link to={`/`} className='link'>
					<h1>Dojo Tickets</h1>
				</Link>
			</div>
			<div className='flex-item search-box'>
				<input type='text' placeholder='Search' />
			</div>
			<div className='flex-item'>
				<Link
					to={`/tickets/new`}
					onClick={newTicketHandler}
					className='top-link'
				>
					{' '}
					Concerts | Sports | Theater
				</Link>
			</div>
			<div className='flex-item'>
				{!authCtx.isLoggedIn && (
					<Link to={`/tickets/auth`} className='image'>
						{' '}
						Signin
					</Link>
				)}
			</div>

			<div className='flex-item'>
				{authCtx.isLoggedIn && (
					<Link to='/logout' onClick={logoutHandler}>
						Logout
					</Link>
				)}
			</div>
		</div>
	);
};

export default MainHeader;
