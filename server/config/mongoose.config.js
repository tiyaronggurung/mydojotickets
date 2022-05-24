const mongoose = require('mongoose');

const dbName = 'mytickets';
const dbString = `mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// const dbString  =`mongodb+srv://Rochester1995t:12345@cluster0.nfmpd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
	.connect(dbString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Connected to ${dbName} database!`))
	.catch((err) => console.log(err));
