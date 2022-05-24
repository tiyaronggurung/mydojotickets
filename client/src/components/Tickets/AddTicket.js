import { React, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MainHeader from '../MainHeader';

import './AddTicket.css';

import AuthContext from '../../store/auth-context';
// import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const AddTicket = (props) => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [venue_name, setVenue_name] = useState('');
	const [address, setAddress] = useState('');

	const [errors, setErrors] = useState({});

	const user = JSON.parse(localStorage.getItem('USER'));
	console.log(user);
	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		const newTicket = {
			name,
			date,
			imageUrl,
			city,
			state,
			venue: venue_name,
			// id: user.id
		};
		console.log('newTicket', newTicket);
		axios
			.post('http://localhost:8000/api/tickets', newTicket, {
				headers: {
					userID: authCtx.userID,
				},
			})
			.then((res) => navigate('/'))
			.catch((err) => {
				console.log(err);
				setErrors(err.response.data.errors);
			});
	};

	return (
		<div>
			<div className='main-container'>
				<MainHeader />
			</div>
			<div className='container'>
				<h3 className='create'>Create an Event</h3>
				<form onSubmit={submitHandler}>
					<div className='add-box'>
						<div className='div1'>
							<div className="">
								<label htmlFor='name'> Event Name:</label>
								<input
									type='text'
									id='name'
									name='name'
									onChange={(e) => setName(e.target.value)}
									value={name}
									required
									// minLength='3'
								/>
								{errors.name && (
									<div className=' warning'>{errors.name.message}</div>
								)}
							</div>
							<div>
								<label htmlFor='date'>Date:</label>
								<input
									type='date'
									id='date'
									name='date'
									onChange={(e) => setDate(e.target.value)}
									value={date}
								/>
								{errors.date && (
									<div className='alert warning'>{errors.date.message}</div>
								)}
							</div>
						</div>
						<div className='div2'>
							<div>
								<label htmlFor='imageUrl'>Upload</label>
								<input
									type='string'
									id='imageUrl'
									name='imageUrl'
									onChange={(e) => setImageUrl(e.target.value)}
									value={imageUrl}
									minLength='3'
								/>
								{errors.imageUrl && (
									<div className='alert warning'>{errors.imageUrl.message}</div>
								)}
							</div>
							<div>
								<label htmlFor='city'>City:</label>
								<input
									type='text'
									id='city'
									name='city'
									onChange={(e) => setCity(e.target.value)}
									value={city}
									minLength='3'
								/>
								{errors.city && (
									<div className='alert warning'>{errors.city.message}</div>
								)}
							</div>
							<div>
								<label htmlFor='state'>State:</label>
								<input
									type='text'
									id='state'
									name='state'
									onChange={(e) => setState(e.target.value)}
									value={state}
									maxLength='2'
								/>
								{errors.state && (
									<div className='alert warning'>{errors.state.message}</div>
								)}
							</div>

							<div>
								<label htmlFor='venue_name'>Venue Name:</label>
								<input
									type='text'
									id='venue_name'
									name='venue_name'
									onChange={(e) => setVenue_name(e.target.value)}
									value={venue_name}
									required
									// minLength='3'
								/>
								{errors.venue_name && (
									<div className=' warning'>{errors.venue_name.message}</div>
								)}
							</div>
						</div>
					</div>
					<button type='submit' className='btn'>
						Create Event
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddTicket;
