const express = require('express')
const app = express()
const port = 3000

const {
  createUser,
  createTicket,
  createOffer,
  createBid,
  deleteUser,
  deleteTicket,
  deleteOffer,
  deleteBid,
  clearUsers,
  clearTickets,
  clearOffers,
  clearBids,
  incrementUserBalance,
  decrementUserBalance,
  setUserBalance,
  resetUserBalance,
  updateTicketEventName,
  updateTicketEventDate,
  getUserBalance,
  getUserTickets,
  getTicketOffers,
  getTicketBids,
} = require('./database'); //  `database.js` is in same backend folder
const { authenticateToken } = require('./auth/auth');



// Middleware to parse JSON requests
app.use(express.json())

//-----------------------------------------------------


//Helper methods 
//Create Data 
async function createData(UID){
  const user = await createUser(UID);
  return user;

}
//--------------------------------------------------------
//-------------- User Account routes



app.get('/api/user-account/get-account-data', async (req, res) => {
  // Placeholder for get account data functionality

  /*
  Input: Authentication token, userID 
 
  Output: Returns account data in JSON format on success. Returns “error in
  retrieving account data” on failure.

  */
 

  try {
    // Retrieve authentication token from headers
    
    const authToken = req.headers.authorization;
    const userID = authenticateToken(authToken); //It will return a boolean
    //const {fname, lname} = req.body  //takes in first name and last name 
    
    // Check if the token is valid
    if (userID == false ) {
      return res.status(400).json({ error: 'Authentication token is required' });
    }
  
    // Fetch user account data from the database using _id
    const user = await getUserBalance(userID);
    if (user == null) {
      user = createData(userID)   //If user not made, we make account with default values
    }

    // Respond with user data in JSON format
    res.json({
      id: user._id,
      firstName: user.fname,
      lastName: user.lname,
      balance: user.balance
    });
  } catch (err) {
    console.error('Error retrieving account data:', err);
    res.status(500).json({ error: 'Error in retrieving account data' });
  }
  
});



app.put('/api/user-account/modify-account-data', async (req, res) => {    
  /**
   * This endpoint is for changing the balance, the balance can be both +ve or -ve for now => so we are only incrementing
   */
  const { balanceChange } = req.body;  //balance change is a number(+ve or -ve)
  
  const authToken = req.headers.authorization;
  const userID = authenticateToken(authToken);
  
  // Input validation
   if (userID == false) {
     return res.status(400).json({ message: 'Wrong User ID' });
   }
   incrementUserBalance(userID,balanceChange)  //Calling database function to change balance

 
     // Return the success response
     res.status(200).json({ message: 'Changed balance successfully' });
 

  })


  app.put('/api/user-account/reset-account-data', async (req, res) => {    
    /**
     * This endpoint resets the balance to zero for a user 
     */
    const authToken = req.headers.authorization;
    const userID = authenticateToken(authToken);
    
    // Input validation
     if (userID == false) {
       return res.status(400).json({ message: 'Wrong User ID' });
     }
     resetUserBalance(userID)  //Calling database function to change balance
  
   
       
       res.status(200).json({ message : 'Reset balance successfully to 0' });
   
  
    })

  app.get('/api/user-account/get-user-tickets', async (req, res) => {  
    
   /**
    * This endpoint returns a collection of all the tickets under the sellerID/userID
    */
 
      // Retrieve authentication token from headers
      
      const authToken = req.headers.authorization;
      const userID = authenticateToken(authToken);
      
      // Check if the token is valid
      if (userID == false ) {
        return res.status(400).json({ error: 'Authentication token is required' });
      }
  
      // Fetch user account data from the database using _id
      const user = await getUserTickets(userID);
      if (!user) {
        return res.json({error:'You have no tickets'})
      }
      
      const tickets = getUserTickets(userID)   
      // Respond with user data in JSON format
      return tickets 
    
      
    
  });

  app.get('/api/user-account/get-user-offers', async (req, res) => {

    /**
    * This endpoint returns a collection of all the offers made by the user (the sellerID/userID) 
    */
    
   
 
    // Retrieve authentication token from headers
    
    const authToken = req.headers.authorization;
    const userID = authenticateToken(authToken);
    
    // Check if the token is valid
    if (userID == false ) {
      return res.status(400).json({ error: 'Authentication token is required' });
    }

    // Fetch user account data from the database using _id
    const user = await getUserOffers(userID);
    if (!user) {
      return res.json({error:'You have no tickets'})
    }
    
    const offers = getUserOffers(userID)
    // Respond with user data in JSON format
    return offers
  
    
  
});


app.get('/api/user-account/get-user-bids', async (req, res) => {  
    /**
    * This endpoint returns a collection of all the bids made by the user (the sellerID/userID), tickets don't matter
    */
   
 
  // Retrieve authentication token from headers
  //I'm not sure how I will retrieve the token right now, but I'm treating it as a String
  const authToken = req.headers.authorization;
  const userID = authenticateToken(authToken);
  
  // Check if the token is valid
  if (userID == false ) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Fetch user account data from the database using _id
  const bids = await getUserBids(userID);
  if (!bids) {
    return res.json({error:'You have no bids'})
  }
  
  
  return bids

  

});

app.delete('/api/user-account/delete-account-data', async (req, res) => {    
  /*
  delete a user
  */
  const authToken = req.headers.authorization;
  const userID = authenticateToken(authToken);
  
  // Input validation
   if (userID == false) {
     return res.status(400).json({ message: 'Wrong User ID' });
   }
   deleteUser(userID)  //Calling database function to change balance

 
     //Return the success response
     res.status(200).json({ message : 'User deleted' });
 

  })
  




//-------------------------------------------------------------
// --------------------Ticket Data routes

app.post('/api/ticket-data/post-ticket-offer', async (req, res) => {
  // Placeholder for post ticket offer functionality

  /*
   Input: Authentication token, offerprice

 
   Output: Returns Ticket ID on success. Returns “error in posting offer” on failure.

  */
   const token = req.headers.authorization;
   const userId = authenticateToken(token);
   const { ticketId, price } = req.body;  //Take input from req.body
   // Input validation
   if (typeof(token) !== string || !price || !ticketId) {
     return res.status(400).json({ message: "can't find ticket" });
   }
 
  

 
     // If the ticket exists
     const ticketExists = await getTicketOffers(ticketId);  // Assume you have a function that fetches ticket by ID
     if (!ticketExists) {
       return res.status(404).json({ message: 'Ticket not found' });
     }
     
     //Create an offer in the database for that ticket 
      

     await createOffer(ticketId, userId, price);

 
     // Step 4: Return the success response with ticketId
     res.status(200).json({ message: 'Offer posted successfully for', ticketId: ticketId });
 
  
   

});

app.post('/api/ticket-data/post-ticket-bid', async (req, res) => {
  // Placeholder for post ticket bid functionality

  /*
   Input: Authentication token

   Output: Returns True on success. Returns “error in posting bid” on failure

  */
   const token = req.headers.authorization;
   const userId = authenticateToken(token);
   const { ticketId, price } = req.body;  // Input the request body
   // Input validation
   if (typeof(token) !== string || !price || !ticketId) {
     return res.status(400).json({ message: "can't find ticket" });
   }
 
  

 
     // If the ticket exists
     const ticketExists = await getTicketBids(ticketId);  
     if (!ticketExists) {
       return res.status(404).json({ message: 'Ticket not found' });
     }
     
     // Create a Bid in the database for that ticket 
      

     await createBid(ticketId, userId, price);

 
     // Step 4: Return the success response with ticketId
     res.status(200).json({ message: 'Bid posted successfully for', ticketId: ticketId });
 
  
   
 


});

app.delete('/api/ticket-data/delete-offer', async (req, res) => {    //NEW ENDPOINT
  /*
  This deletes an offer of a certain ticket ID mde by a particular user/sellerID
  */
 //Verify user ID FIRST
  const authToken = req.headers.authorization;
  const userID = authenticateToken(authToken);
  //GET THE TICKET ID TO DELETE
  const ticketId = req.body;
  
  // Input validation
   if (userID == false) {
     return res.status(400).json({ message: 'Wrong User ID' });
   }
   deleteOffer(ticketId)  //Deleting offer

 
     // Return the success response
     res.status(200).json({ message : 'Offer deleted' });
 

  })

  app.delete('/api/ticket-data/delete-bid', async (req, res) => {    //NEW ENDPOINT
    //This is to delete a bid made a user for a certain ticket id 
    const authToken = req.headers.authorization;
    const userID = authenticateToken(authToken);
    const {ticketId} = req.body;
    
    // Input validation
     if (userID == false) {
       return res.status(400).json({ message: 'Wrong User ID' });
     }
     deleteBid(ticketId)  //Deleting offer
  
   
       // Return the success response
       res.status(200).json({ message : 'Offer deleted' });
   
  
    })




    app.post('/api/ticket-data/create-ticket', async (req, res) => {
      
    
      //This is to create a ticket as long as the userID is correct
      

       const authToken = req.headers.authorization;
       const userID = authenticateToken(authToken);
       if (userID == false) {
        return res.status(400).json({ message: 'Wrong User ID' });
      }
      //User ID is the seller ID here

      const {eventName, eventDate } = req.body;  // Input  

     await createTicket(userID, eventName, eventDate);

 
     // Step 4: Return the success response with ticketId
     res.status(200).json({ message: 'Ticket created successfully' });
    
    });

    app.delete('/api/ticket-data/delete-ticket', async (req, res) => {    //NEW ENDPOINT
      

      //This is to delete a ticket when a ticket ID is inputted and we retrieve the user ID


      const authToken = req.headers.authorization;
      const userID = authenticateToken(authToken);
      const {ticketId} = req.body;
      
      // Input validation
       if (userID == false) { //verify user ID 
         return res.status(400).json({ message: 'Wrong User ID' });
       }

       if (typeof(ticketId) != number) {  //verify ticket ID
        return res.status(400).json({ message: 'Wrong ticket ID' });
      }
       deleteTicket(ticketId)  //Deleting ticket if it exists
       // Return the success response
      res.status(200).json({ message : 'Ticket deleted' });
     
    
      })

      

      app.put('/api/ticket-data/update-ticket', async (req, res) => {
      
    
        /*
         Input: Authentication token
      
         It updates a certain ticket ID that we get and both fields are changed eventName and EventDate
      
        */
         const authToken = req.headers.authorization;
         const userID = authenticateToken(authToken);
         if (userID == false) {
          return res.status(400).json({ message: 'Wrong User ID' });
        }
        //take in ticket id now 
        const {ticketId} = req.body;

  
        const {eventName, eventDate } = req.body;  // Input  
  
       if(typeof(eventName) == string || typeof(eventDate) == string){
        updateTicketEventName(ticketId,eventName)
        updateTicketEventDate(ticketId,eventDate)
        // Step 4: Return the success response with ticketId
       res.status(200).json({ message: 'Ticket created successfully' });
       }
       res.status(400).json({message:"Invalid Input or ticketID, pls check both"})
  
   
       
      
      });



  











