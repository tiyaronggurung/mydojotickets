import React, { useState, useEffect } from 'react';
import DisplayAll from '../components/Tickets/DisplayAll';

import Tickets from './Tickets/Tickets';

const Main = () => {
	const [tickets, setTickets] = useState([]);
	const [allTickets, setAllTickets] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8000/api/tickets');
			const data = await res.json();

			setAllTickets(data);
		})();
	}, []);

	return (
		<div className="drawn">
			<DisplayAll tickets={tickets} setTickets={setTickets} />
			<Tickets tickets={allTickets} />
		</div>
	);
};
export default Main;
