import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Ticket from './Ticket';

import AuthContext from '../../store/auth-context';

import './Main.css';

const DisplayAll = ({ tickets, setTickets }) => {
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
	useEffect(() => {
		console.log(authCtx.userID);
		let userID = '';
		if (authCtx.userID === null) {
			userID = 'noUser';
		} else {
			userID = authCtx.userID;
		}
		axios
			.get('http://localhost:8000/api/tickets', {
				headers: {
					userID: userID,
				},
			})
			.then((res) => {
				console.log(res.data.data);
				setTickets(res.data.data);
			})
			.catch((err) => console.log(err));
	}, [setTickets]);
	console.log('tickets', tickets);
	return (
		<div>
			<div className='container'>
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
				{/* <p>These pets are looking for a good home</p> */}
				{/* Big Image Here */}
			</div>
			<div>
				{/* <Link
					to={`/tickets/new`}
					onClick={newTicketHandler}
					className='top-link'
				>
					{' '}
					Concerts | Sports | Theater | Signin
				</Link> */}
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						{tickets.length > 0 &&
							tickets.map((ticket) => {
								return (
									<>
										<Ticket
											name={ticket.name}
											city={ticket.city}
											id={ticket._id}
											venue={ticket.venue}
											date={ticket.date}
											key={ticket._id}
										/>
									</>
								);
							})}
					</div>
				</div>
				<div className='container1'>
					<h3 className='link1'>Concerts</h3>
					{tickets.length > 0 &&
						tickets.map((t) => {
							return (
								<Link
									style={{ marginLeft: '8px', dislay: 'inline-block' }}
									to={`/ticket/details/${t._id}`}
								>
									{t.name}
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
};
export default DisplayAll;
