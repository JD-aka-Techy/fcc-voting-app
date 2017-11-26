const express = require('express');
const app = express();
const path = require('path');

const mysql = require('mysql');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// serve front end
app.use(express.static(path.join(__dirname, 'app/build')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'votingapp'
});

connection.connect();


function queryDb(query) {
  return new Promise(function(resolve, reject) {
    
    connection.query(query, function (error, results, fields) {
      if(error) reject(error)
      resolve({ error, results, fields });
    });

  }

  );
}

const getAllPolls = () => queryDb('SELECT * FROM polls');
const getPoll = (pollId) => queryDb(`SELECT * FROM polls WHERE poll_id = ${pollId}`);
const deletePoll = (pollId) => queryDb(`DELETE polls WHERE poll_id = ${pollId}`);
const getUserFromUserName = username => queryDb(`SELECT * FROM users WHERE username = 'username'`);
const getUsersPolls = (username) => queryDb(`SELECT * FROM polls as p INNER JOIN users u ON u.user_id = p.user_id WHERE u.username = '${username}'`);


const createPoll = ({ name ='', description = '', result = '[]', endDate = 'Null' }) =>
  queryDb(`
    INSERT INTO votingapp.polls (name, description, result, created, endDate)
    VALUES ('${name}', '${description}', '${result}', CURRENT_TIMESTAMP, ${endDate})
  `);

/////////////////
// SINGLE POLL //
/////////////////

/* get poll by id */
app.get('/api/poll/:pollId', (req, res) => getPoll(req.params.pollId)
.then((pollsResponse) => res.send(pollsResponse.results))
.catch((error) => res.send(error)));

/* delete poll by id */
app.delete('/api/poll/:pollId', () => {
  // check poll belongs to user
  getUserFromUserName() // from jwt? 
  getPoll(req.params.pollId)
  // delete poll
  deletePoll();
});

/* create poll */
app.post('/api/poll', jsonParser, (req, res) => createPoll(req.body)
  .then((pollsResponse) => res.send(pollsResponse.results))
  .catch((error) => res.send(error)));

/* get all polls */
app.get('/api/allPolls', (req, res) => getAllPolls()
.then((pollsResponse) => res.send(pollsResponse.results))
.catch((error) => res.send(error)));

/* get all polls for user with :username */
app.get('/api/usersPolls/:username', (req, res) => getUsersPolls(req.params.username)
  .then((pollsResponse) => res.send(pollsResponse.results))
  .catch((error) => res.send(error)));



app.post('api/poll/addOption', jsonParser, (req, res) => {

  getPoll(req.params.pollId)
  .then(pollsResponse => {

    const item = pollsResponse.results;

  })
  

});




const server = app.listen(8080, function () {
  console.log('Listening :)');
  // server.close(function () { console.log('Doh :('); });
});