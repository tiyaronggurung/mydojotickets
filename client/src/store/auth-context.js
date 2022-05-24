import React, { useState } from 'react';

const AuthContext = React.createContext({
	// email: '',
	userID: '',
	isLoggedIn: false,
	login: (email) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	//const savedEmail = localStorage.getItem('email');
	const savedUserID = localStorage.getItem('userID');
	//const [email, setEmail] = useState(savedEmail);
	const [userID, setUserID] = useState(savedUserID);

	let userIsLoggedIn = false;
	// if (email) {
	// 	userIsLoggedIn = true;
	// } else {
	// 	userIsLoggedIn = false;
	// }

	if (userID) {
		userIsLoggedIn = true;
	} else {
		userIsLoggedIn = false;
	}
	const loginHandler = (userID) => {
		//localStorage.setItem('email', email);
		localStorage.setItem('userID', userID);
		//setEmail(email);
		setUserID(userID);
	};

	const logoutHandler = () => {
		//setEmail(null);
		setUserID('');
		//localStorage.removeItem('email');
		localStorage.removeItem('userID');
	};

	const contextValue = {
		// email: email,
		userID: userID,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
