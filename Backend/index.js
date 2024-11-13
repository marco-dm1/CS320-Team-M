const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Here we're starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Middleware to parse JSON requests
app.use(express.json())

//------
// User Account routes
app.post('/api/user-account/create-account', (req, res) => {
  // Placeholder for create account functionality
  /*
  Input: Username, password, email

  Output: Returns True/False. If False then state the reason for failure. Reasons
  may include: empty fields, email already in use, username already in use, weak
  password, timed out error
  */
});

app.post('/api/user-account/log-in', (req, res) => {
  // Placeholder for login functionality
  /*
  Input: Username, password

  Output: Returns True/False. If false then state the reason for failure. Reasons may
  include: empty fields, username or password are incorrect, timed out error

  */

});

app.post('/api/user-account/log-out', (req, res) => {
  // Placeholder for logout functionality
  /*
  Input: Authentication token

  Output: Returns True/False. If False then state the reason for failure. Reasons
  may include: unknown log out error

  */


});

app.get('/api/user-account/get-account-data', (req, res) => {
  // Placeholder for get account data functionality

  /*
  Input: Authentication token
 
  Output: Returns account data in JSON format on success. Returns “error in
  retrieving account data” on failure.

  */
});


//------
// Ticket Data routes
app.post('/api/ticket-data/post-ticket-offer', (req, res) => {
  // Placeholder for post ticket offer functionality

  /*
   Input: Authentication token
 
   Output: Returns Ticket ID on success. Returns “error in posting offer” on failure.

  */
});

app.post('/api/ticket-data/post-ticket-bid', (req, res) => {
  // Placeholder for post ticket bid functionality

  /*
   Input: Authentication token

   Output: Returns True on success. Returns “error in posting bid” on failure

  */

});

app.get('/api/ticket-data/get-ticket-offer', (req, res) => {
  // Placeholder for get ticket offer functionality
  /*
  Input: Ticket ID

  Output: Returns ticket offer on success. Returns “error in retrieving offer” on
  failure

  */
});

app.get('/api/ticket-data/get-ticket-bid', (req, res) => {
  // Placeholder for get ticket bid functionality
  /*

  Input: Ticket ID
  
  Output: Returns ticket bid on success. Returns “error in retrieving bid” on failure.

  */
});



