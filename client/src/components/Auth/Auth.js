import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import './Auth.css';
const Auth = () => {
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();
	const [emailSignIn, setEmailSignIn] = useState('');
	const [passwordSignIn, setPasswordSignIn] = useState('');

	// sign up

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailSignUp, setEmailSignUp] = useState('');
	const [password1SignUp, setPassword1SignUp] = useState('');
	
	// const [errors, setErrors] = useState({});
	const [password2SignUp, setPassword2SignUp] = useState('');

	const signInHandler = async (e) => {
		e.preventDefault();

		const data = {
			email: emailSignIn,
			password: passwordSignIn,
		};

		const response = await fetch('http://localhost:8000/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();
		console.log(result);

		if (result.email) {
			authCtx.login(result._id);
			navigate('/tickets/new');
		}
	};

	const signUpHandler = async (e) => {
		e.preventDefault();

		if (password1SignUp !== password2SignUp) {
			alert('password must match');
		}

		const data = {
			firstName: firstName,
			lastName: lastName,
			email: emailSignUp,
			password: password1SignUp,
		};

		const response = await fetch('http://localhost:8000/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();

		if (result.email) {
			authCtx.login(result._id);
			navigate('/tickets/new');
		}
	};

	return (
		<div className='auth-container'>
			<div className='sign-in-container'>
				<div className='sign-in-content'>
					<h2>Sign In</h2>
					<form onSubmit={signInHandler}>
						<input
							type='email'
							placeholder='Email'
							value={emailSignIn}
							onChange={(e) => {
								setEmailSignIn(e.target.value);
							}}
						/>
						<input
							type='password'
							placeholder='Password'
							value={passwordSignIn}
							onChange={(e) => setPasswordSignIn(e.target.value)}
						/>
						{/* <input type='submit' value='Sign In' /> */}
						<button type='submit' className='btn1'>
							Sign In
						</button>
					</form>
				</div>
			</div>
			<div className='sign-up-container'>
				<div className='sign-up-content'>
					<h2>Sign Up</h2>
					<form onSubmit={signUpHandler}>
						<input
							type='text'
							placeholder='First Name'
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						/>
						<input
							type='text'
							placeholder='Last Name'
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>
						<input
							type='email'
							placeholder='Email Address'
							value={emailSignUp}
							onChange={(e) => setEmailSignUp(e.target.value)}
						/>
						<input
							type='password'
							placeholder='Password'
							value={password1SignUp}
							onChange={(e) => {
								setPassword1SignUp(e.target.value);
							}}
						/>
						<input
							type='password'
							placeholder='Confirm Password'
							value={password2SignUp}
							onChange={(e) => setPassword2SignUp(e.target.value)}
						/>
						{/* <button type='submit' value='Sign Up'/> */}
						<button type='submit' className='btn1'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
