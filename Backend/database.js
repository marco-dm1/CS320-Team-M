// P/N means programmer note

const mongoose = require('mongoose');

// The 'uri' is our connection string to the cluster
// We are including 'clientOptions' to connect to a specific database
// Our string is of this format:
// mongodb+srv://<USERNAME>:<PASSWORD>@teammcluster.h2lnq.mongodb.net/?retryWrites=true&w=majority&appName=TeamMCluster/<DATABASE>
const uri = "mongodb+srv://admin:fullaccess@teammcluster.h2lnq.mongodb.net/?retryWrites=true&w=majority&appName=TeamMCluster/ticket_trader";
const clientOptions = { dbName: 'ticket_trader' };

// SCHEMA

// P/N: The schema can likely be moved out into a separate file
//   and imported to make them easier to parse

// A schema has the instructions for a collection/table
// 'versionKey' is false b/c otherwise we'd have an extra attribute '__v'
const userSchema = new mongoose.Schema({ 
    fname: { type: String, required: true }, 
    lname: { type: String, default: "" }, 
    balance: { type: Number, default: 0 }
}, {
  versionKey: false
});

const ticketSchema = new mongoose.Schema({
  sellerId: { type: mongoose.ObjectId, required: true },
  eventName: { type: String, default: null }, 
  eventDate: { type: Date, default: null }
}, {
  versionKey: false
});

// P/N: Offers and bids have the same attributes and as such can use the same schema
const tradeSchema = new mongoose.Schema({ 
  ticketId: { type: mongoose.ObjectId, required: true }, 
  userId: { type: mongoose.ObjectId, required: true }, 
  price: { type: Number, required: true }
}, {
  versionKey: false
});

// MODEL

// A model uses a created schema to define a collection/table
// Note that the name of the model is singular, but is plural in MongoDB Atlas
const userModel = mongoose.model("user", userSchema);
const ticketModel = mongoose.model("ticket", ticketSchema);
const offerModel = mongoose.model("offer", tradeSchema);
const bidModel = mongoose.model("bid", tradeSchema);

// INSERT

// Create a variable of type 'userModel' prepares data to be inserted into the collection
// In order for it to be fully added, you must use '.save()'
const createUser = async (fname, lname = "", balance = 0) => {
  let user = new userModel({ 
      fname: fname,
      lname: lname, 
      balance: balance 
  });
  if (boolShowUserLogs) console.log(user.fname, user.lname, "has been created");
  await user.save();
  if (boolShowUserLogs) console.log(user.fname, user.lname, "has been saved");
  return user._id;
};

const createTicket = async (sellerId, eventName = "", eventDate = null) => {
  let ticket = new ticketModel({ 
      sellerId: sellerId,
      eventName: eventName, 
      eventDate: eventDate 
  }); 
  if (boolShowTicketLogs) console.log("Ticket has been created");
  await ticket.save();
  if (boolShowTicketLogs) console.log("Ticket has been saved");
  return ticket._id;
};

const createOffer = async (ticketId, userId, price) => {
  let offer = new offerModel({ 
      ticketId: ticketId,
      userId: userId, 
      price: price
  }); 
  await offer.save();
};

const createBid = async (ticketId, userId, price) => {
  let bid = new bidModel({ 
      ticketId: ticketId,
      userId: userId, 
      price: price
  }); 
  await bid.save();
};

// DELETE

const deleteUser = async (_id) => {
  await userModel.deleteOne({ _id: _id });
}

const deleteTicket = async (_id) => {
  await ticketModel.deleteOne({ _id: _id });
}

const deleteOffer = async (_id) => {
  await offerModel.deleteOne({ _id: _id });
}

const deleteBid = async (_id) => {
  await bidModel.deleteOne({ _id: _id });
}

// UPDATE

const incrementUserBalance = async (_id, inc) => {
  await userModel.updateOne({ _id: _id }, { balance: balance + inc });
}

const decrementUserBalance = async (_id, dec) => {
  await userModel.updateOne({ _id: _id }, { balance: balance - dec });
}

const setUserBalance = async (_id, newBalance) => {
  await userModel.updateOne({ _id: _id }, { balance: newBalance });
}

const resetUserBalance = async (_id) => {
  await setUserBalance(_id, 0);
}

const updateTicketEventName = async (_id, newEventName) => {
  await ticketModel.updateOne({ _id: _id }, { eventName: eventName });
}

const updateTicketEventDate = async (_id, newEventDate) => {
  await ticketModel.updateOne({ _id: _id }, { eventDate: eventDate });
}

// GET DATA

const getUserBalance = async (_id) => {
  const userBalance = await userModel.findById(_id, 'balance');
  return userBalance;
}

const getUserTickets = async (_id) => {
  const userTickets = await ticketModel.find({ sellerId: _id }, 'ticketId');
  return userTickets;
}

const getTicketOffers = async (_id) => {
  const ticketOffers = await offerModel.find({ ticketId: _id }, 'userId price');
  return ticketOffers;
}

const getTicketBids = async (_id) => {
  const ticketBids = await bidsModel.find({ ticketId: _id }, 'userId price');
  return ticketBids;
}

// MAIN CODE

// Determines if console.logs run for insertions
boolShowUserLogs = true
boolShowTicketLogs = true

// These boolean variables change if different tests are run
boolTestAllQuick = true
boolTestUser = false

const main = async () => {
  // We use try/finally so that we automatically disconnect once the promises are completed
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to database");

    // Runs any desired tests
    if (boolTestAllQuick) await testAllQuick();
    if (boolTestUser) await testAddUser();

  } finally {
    // Ensures that the client will close when you finish/error
    console.log("Client Closed")
    await mongoose.disconnect();
  }
}; 

const testAllQuick = async () => {
  const testUserOne = await createUser("Franklin", "Roosevelt", 300);
  const testUserTwo = await createUser("George", "Washington", 250);
  const testTicket = await createTicket(testUserOne._id, "Patriotic Event");
  const testOffer = await createOffer(testTicket._id, testUserOne._id, 40);
  const testBid = await createBid(testTicket._id, testUserTwo._id, 20);
}

// Example test for functions
const testAddUser = async () => {
  await createUser("Seth", "Brown", "150");
  await createUser("Tim", undefined, 30);
  await createUser("Tom");
  await createUser("Paul", "Smith", 100);
  await createUser("Mary", "Jane", 20);
};

main(); 