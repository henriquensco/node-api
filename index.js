require('dotenv').config();

const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	// ssl: {
	//	ca: fs.readFileSync('../key.pem')
	// }
});

client.connect((err) => {
	if (err) {
		console.log(err);
		return false;
	};

	console.log('Connected!');
	return true;
});
