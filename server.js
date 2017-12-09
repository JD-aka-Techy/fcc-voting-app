
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const axios = require('axios');

const app = express();
const jsonParser = bodyParser.json();

const jwt = require('jsonwebtoken');

// serve front end
app.use(express.static(path.join(__dirname, 'app/build')));




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'votingapp'
});

connection.connect();


const clientId = '969491308716-m9bj7gn6sjgc46o596o01ck6asedktle.apps.googleusercontent.com';
const secret = '_wznYPqWY7D36UmLaghRWXrv';
const googleAuthEndPoint = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
const jwtSecret = 'mysecretjwttokenythingy'


// auth
app.post('/api/auth/register', jsonParser, (req, res) => {

  const accessToken = req.body.accessToken;
  const url = `${googleAuthEndPoint}${accessToken}`;
  axios.get(url)
  .then((response) => {
    // token is valid
    const { email, expires_in, user_id } = response.data;
    const user = {
      email,
      expires: expires_in,
      googleId: user_id
    };
    const token = jwt.sign(user, jwtSecret);
    res.send(token);
  })
  .catch((error) => {
    // no not a real token
    res.send(error)
  })

});






function queryDb(query) {
  return new Promise(function (resolve, reject) {

    connection.query(query, function (error, results, fields) {
      if (error) reject(error)
      resolve({ error, results, fields });
    });
  }

  );
}

const getAllPolls = () => queryDb('SELECT * FROM polls');
const getPoll = (pollId) => queryDb(`SELECT * FROM polls WHERE poll_id = ${pollId}`);
const deletePoll = (pollId) => queryDb(`DELETE polls WHERE poll_id = ${pollId}`);
const getUserFromUserName = username => queryDb(`SELECT * FROM users WHERE username = 'username'`);
const getUsersPolls = (username) => queryDb(`SELECT * FROM polls WHERE username = '${username}'`);


const createPoll = ({ name = '', description = '', result = '[]', endDate = 'Null' }) =>
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






const PORT = 8080;
const server = app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`);
  // server.close(function () { console.log('Doh :('); });
});



