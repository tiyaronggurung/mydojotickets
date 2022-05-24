import AuthContext from './store/auth-context';
import './App.css';
// import { Router } from "@reach/router";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTicket from './components/Tickets/AddTicket';
import EditTicket from './components/Tickets/EditTicket';
import TicketDetail from './components/Tickets/TicketDetail';
import Main from './components/Main';
// import Image from './components/Images/Image';

// import SignIn from './components/Auth/SignIn';
// import Home from './components/Home';

import Auth from './components/Auth/Auth';

function App() {
	return (
		<div>
			{/* <Home /> */}
			<BrowserRouter>
				<Routes>
					<Route path='/tickets/auth' element={<Auth/>} />
					{/* <Route path='/tickets/image' element={<Image/>} /> */}
					<Route exact path='/' element={<Main />} />
					<Route path='/tickets/new' element={<AddTicket />} />
					<Route path='/ticket/edit/:id' element={<EditTicket />} />
					<Route path='/ticket/details/:id' element={<TicketDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
