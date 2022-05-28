const mongoose = require('mongoose');

const dbName = 'mytickets';
const dbString = `mongodb://localhost/${dbName}`;

mongoose
	.connect(dbString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Connected to ${dbName} database!`))
	.catch((err) => console.log(err));
