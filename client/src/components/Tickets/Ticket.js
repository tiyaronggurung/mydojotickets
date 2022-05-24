import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import './Ticket.css';
// const now = new Date();
const Ticket = ({ name, date, state, venue, id, city }) => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);

	const navigateToEdit = (e) => {
		e.preventDefault();

		if (!authCtx.isLoggedIn) {
			return;
		}

		navigate('/ticket/edit/' + id);
	};

	return (
		<div className='ticket'>
			<Link to={`/ticket/edit/${id}`} onClick={navigateToEdit} className='link'>
				<div className='ticket-row1'>
					<div>{date}</div>
					<div>
						{venue},{city}
					</div>
					<div>from</div>
				</div>
				<div className='ticket-row2'>
					<div>Fri</div>
					<div>{name}</div>
					<div>$ 180</div>
				</div>
			</Link>
		</div>
	);
};

export default Ticket;
