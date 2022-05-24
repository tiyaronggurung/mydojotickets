import React from 'react';

import { Link } from 'react-router-dom';

const Tickets = ({ tickets }) => {
	return (

		<div className='container'>
			
			<h3 className='link1'></h3>
			{tickets.length > 0 &&
				tickets.map((t) => {
					return (
						<Link
							style={{ marginLeft: '5px', dislay: 'inline-block' }}
							to={`/ticket/details/${t._id}`}
						>
							{t.name}
						</Link>
					);
				})}
		</div>
	);
};

export default Tickets;
