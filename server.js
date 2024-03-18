import mysql from 'mysql2/promise';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000; // You can change this to any port you prefer

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// POST: Create a new task
app.post('/contact', (req, res) => {
  const { gmail, message } = req.body;
  console.log(`gmail received : ${gmail}`);
  console.log(`message received : ${message}`);
  database(gmail, message);
  res.status(200).json({id: 1, s: 'jds'});
});


async function database(gmail, message) {
  
// create a new MySQL connection
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'demo'
});

const userData = [gmail, message];
let sql = `INSERT INTO contact (gmail, message) VALUES ( ?, ? );`;

connection.query(sql, userData)

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection: ' + err.stack);
    return;
  }
  console.log('Connection closed');
});

}
