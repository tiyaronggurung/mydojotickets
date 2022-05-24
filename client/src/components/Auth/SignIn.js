import React from 'react';

const SignIn = () => {
	const submitHandler = (event) => {
		event.preventDefault();

		console.log('loggin in');
	};

	return (
		<div>
			<h1> Sign In </h1>
			<form onSubmit={submitHandler}>
				<input type='text' placeholder='Email' />
				<input type='email' placeholder='Password' />
				<button type='submit'>Sign In</button>
			</form>
		</div>
	);
};

export default SignIn;
