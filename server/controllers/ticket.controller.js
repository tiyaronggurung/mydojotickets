const Ticket = require('../models/ticket.model');

const createTicket = (req, res) => {
	const userID = req.headers['userid'];

	req.body['user'] = userID;

	Ticket.create(req.body)
		.then((ticket) => {
			res.json(ticket);
		})
		.catch((err) => res.status(400).json(err));
};

const getTickets = async (req, res) => {
	const userID = req.headers['userid'];
	console.log('userid here', userID);

	if (userID == 'noUser') {
		const tickets = await Ticket.find();

		res.status(200).json({
			success: true,
			data: tickets,
		});
	} else {
		const tickets = await Ticket.find({
			user: req.headers['userid'],
		});

		console.log(tickets);
		if (!tickets) {
			res.status(400).json({
				success: false,
				message: 'error finding tickets',
			});
		}

		res.status(200).json({
			success: true,
			data: tickets,
			count: tickets.length,
		});
	}

	// Ticket.find()
	// 	.then((allTickets) => {
	// 		res.json(allTickets);
	// 	})
	// 	.catch((err) => res.status(400).json(err));
};

const deleteTicket = (req, res) => {
	Ticket.deleteOne({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((err) => err.status(400).json(err));
};
const updateTicket = (req, res) => {
	Ticket.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedTicket) => {
			res.json(updatedTicket);
		})
		.catch((err) => res.status(400).json(err));
};

const index = ({ req, res }) => {
	res.json({
		message: 'Ticket Controller',
	});
};

const getTicket = (req, res) => {
	Ticket.findById(req.params.id, (err, ticket) => {
		if (err) {
			res.send(err);
		}
		res.json(ticket);
	});
};

const getTicketByType = (req, res) => {
	Ticket.find({ type: req.params.type }, (err, ticket) => {
		if (err) {
			res.send(err);
		}
		res.json(ticket);
	});
};

module.exports = {
	createTicket,
	getTicket,
	getTickets,
	deleteTicket,
	updateTicket,
	index,
	getTicketByType,
};
