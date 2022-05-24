//login and register user
const User = require('../models/user.model');

//register controller
exports.register = (req, res) => {
	User.create(req.body, (err, user) => {
		if (err) {
			res.send(err);
		}
		if (user) {
			res.json(user);
		} else {
			res.json({ message: 'User not found' });
		}
	});
};

//login controller
exports.login = (req, res) => {
	User.findOne(
		{ email: req.body.email, password: req.body.password },
		(err, user) => {
			if (err) {
				res.send(err);
			}
			if (user) {
				res.json(user);
			} else {
				res.json({ message: 'User not found' });
			}
		}
	);
};
