const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Event name must be at least 3 characters!'],
		},
		date: {
			type: String,
			required: [true, 'Event date is required!'],
		},

		imageUrl: { type: String, required: true },
		city: {
			type: String,
			required: [true, 'Event city must be at least 3 characters!'],
		},
		state: {
			type: String,
			required: [true, 'Event state is required!'],
		},
		venue: String,
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{ timestamps: true }
	// createdAt: { type: Date, default: Date.now },
	// updatedAt: { type: Date, default: Date.now },
);

module.exports = mongoose.model('Ticket', TicketSchema);
