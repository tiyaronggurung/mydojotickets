import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import MainHeader from '../MainHeader';
import './Edit.css';

const EditTicket = (props) => {
	const [ticket, setTicket] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/tickets/${id}`)
			.then((res) => {
				console.log(res.data);
				setTicket(res.data);
			})
			.catch((err) => console.log(err));
	}, [id]);
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('i m here');
		const updateTicket = {
			name: ticket.name,
			date: ticket.date,
			imageUrl: ticket.imageUrl,
			city: ticket.city,
			state: ticket.state,
			venue: ticket.venue,
		};
		console.log('updateTicket', updateTicket);
		axios
			.put(`http://localhost:8000/api/tickets/${id}`, ticket)
			.then((res) => navigate('/'))
			.catch((err) => console.log(err));
	};
	const handleChange = (e) => {
		setTicket({ ...ticket, [e.target.name]: e.target.value });
	};
	console.log('ticket', ticket);
	return (
		<div>
			<div className="main-container">
				<MainHeader></MainHeader>
			</div>
			<div className='container'>
				<h3 className='create' >Edit an Event: {ticket.name}</h3>
				<form onSubmit={submitHandler}>
					<div className='add-box'>
						<div className='div1'>
							<div>
								<label htmlFor='name'>Event Name:</label>
								<input
									type='text'
									id='name'
									name='name'
									onChange={handleChange}
									value={ticket.name}
								/>
							</div>
							<div>
								<label htmlFor='date'>Date:</label>
								<input
									type='date'
									id='date'
									name='date'
									onChange={handleChange}
									value={ticket.date}
								/>
							</div>
							<div>
								<label htmlFor='imageUrl'>Upload</label>
								<input
									type='string'
									id='imageUrl'
									name='imageUrl'
									onChange={handleChange}
									value={ticket.imageUrl}
								/>
							</div>
						</div>
						<div className='div2'>
							{/* {ticket?.skills?.length > 0 && (
                				<> */}
							<div>
								<label htmlFor='city'>City:</label>
								{/* <p className='skill'><label htmlFor='city'>Skill 1:</label></p> */}
								<input
									type='text'
									id='city'
									name='city'
									onChange={handleChange}
									value={ticket.city}
								/>
							</div>
							<div>
								<label htmlFor='state'>State:</label>
								<input
									type='text'
									id='state'
									name='state'
									onChange={handleChange}
									value={ticket.state}
								/>
							</div>
							<div>
								<label htmlFor='venue'>Venue Name:</label>
								<input
									type='text'
									id='venue'
									name='venue'
									onChange={handleChange}
									value={ticket.venue}
								/>
							</div>
							{/* <div>
								<label htmlFor='venue_name'>Address:</label>
								<input
									type='text'
									id='address'
									name='address'
									onChange={handleChange}
									value={ticket.address}
								/>
							</div> */}

							{/* )} */}
						</div>
					</div>
					<button type='submit' className='btn'>
						Update ticket
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditTicket;
