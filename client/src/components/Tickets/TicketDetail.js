import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Main.css';
// import { Component } from "react";
// import {Map, GoogleApiWrapper } from 'google-maps-react';
import MainHeader from '../MainHeader';
const TicketDetail = (props) => {
	const [ticket, setTicket] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/tickets/${id}`)
			.then((res) => setTicket(res.data))
			.catch((err) => console.log(err));
	}, [id]);
	const handledelete = () => {
		axios
			.delete(`http://localhost:8000/api/tickets/${id}`)
			.then((res) => navigate('/'))
			.catch((err) => console.log(err));
	};

	// const handleupdate = () => {
	//   axios
	//     .delete(`http://localhost:8000/api/tickets/${id}`)
	//     .then((res) => navigate("/"))
	//     .catch((err) => console.log(err));
	// };
	// console.log("ticket", ticket);

	return (
		<div>
			<div>
				<div className='main-header'>
					{/* <Link to={`/`} className='link'><h1> Dojo Tickets</h1></Link> 
					<Link to={`/tickets/new`} className='top-link'>
						{' '}
						Concerts | Sports | Theater 
					</Link> */}
				<div className='main-container'>
						<MainHeader />
				</div>
				</div>
				<div className='detail-box'>
					
					
					<div className='detail-ticket'>
						<p>{ticket.name}</p>
						<div className='detail-top'>
							<p>{ticket.date}</p>
							<p>{ticket.name}</p>
							<p>from</p>
						</div>
						<div className='detail-top'>
							<p>{ticket.venue}</p>
							<p>
								{ticket.city}, {ticket.state}
							</p>
							<p>$180</p>
						</div>
						<button className='adopt-btn' onClick={handledelete}>
							Delete this Event
						</button>
					</div>

					
				</div>
			</div>
		</div>
	);
};

export default TicketDetail;
