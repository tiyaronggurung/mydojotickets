const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	firstName: {
		type: String,
		required: [true, 'First name must be atleast 3 letters!'],
	},
	lastName: {
		type: String,
		required: [true, 'Last name must be atleast 3 letters!'],
	},
	email: {
		type: String,
		required: [true, 'Email is required!'],
	},
	password: {
		type: String,
		required: [true, 'Password is required!'],
	},
});

userSchema.virtual('tickets', {
	ref: 'Ticket',
	localField: '_id',
	foreignField: 'user',
	justOne: false,
});
module.exports = model('User', userSchema);
