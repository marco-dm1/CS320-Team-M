// P/N means programmer note
 
// Requiring dotenv for the .env file and mongoose for database interaction
// Assert is used for testing
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const assert = require('assert');

// P/N: Honestly I don't know what this does, but it probably initializes the package
dotenv.config();

// The 'uri' is our connection string to the cluster
// We are including 'clientOptions' to connect to a specific database
// Our string is of this format:
// mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.h2lnq.mongodb.net/?retryWrites=true&w=majority&appName=<CLUSTER>/<DATABASE>
// P/N: The .env file MUST be in the root directory to work
const uri = process.env.URI;
const clientOptions = { dbName: 'ticket_trader' };

// SCHEMA

// P/N: The schema can likely be moved out into a separate file
//   and imported to make them easier to parse

// A schema has the instructions for a collection/table
// 'versionKey' is false b/c otherwise we'd have an extra attribute '__v'
const userSchema = new mongoose.Schema({ 
    _id: {type: String, required: true},
    fname: { type: String, required: true }, 
    lname: { type: String, default: "" }, 
    balance: { type: Number, default: 0 }
}, {
  versionKey: false
});

const ticketSchema = new mongoose.Schema({
  sellerId: { type: String, required: true },
  eventName: { type: String, default: null }, 
  eventDate: { type: Date, default: null }
}, {
  versionKey: false
});

// P/N: Offers and bids have the same attributes and as such can use the same schema
const tradeSchema = new mongoose.Schema({ 
  ticketId: { type: mongoose.ObjectId, required: true }, 
  userId: { type: String, required: true }, 
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

// Create a variable of type 'userModel' which prepares data to be inserted into the collection
// In order for it to be fully added, you must use '.save()'
const createUser = async (_id, fname, lname = "", balance = 0) => {
  let user = new userModel({ 
    _id: _id,
    fname: fname,
    lname: lname, 
    balance: balance 
  });
  if (boolShowUserLogs) console.log("User has been created:\n  _id:", _id, "\n  fname:", user.fname, "\n  lname:", user.lname, "\n  balance:", balance);
  await user.save();
  if (boolShowUserLogs) console.log("User has been saved");
  return user;
};

const createTicket = async (sellerId, eventName = "", eventDate = null) => {
  let ticket = new ticketModel({ 
    sellerId: sellerId,
    eventName: eventName, 
    eventDate: eventDate 
  }); 
  if (boolShowTicketLogs) console.log("Ticket has been created:\n  sellerId:", sellerId, "\n  eventName:", eventName, "\n  eventDate:", eventDate);
  await ticket.save();
  if (boolShowTicketLogs) console.log("Ticket has been saved");
  return ticket;
};

const createOffer = async (ticketId, userId, price) => {
  let offer = new offerModel({ 
    ticketId: ticketId,
    userId: userId, 
    price: price
  }); 
  if (boolShowTradeLogs) console.log("Offer has been created:\n  ticketId:", ticketId, "\n  userId:", userId, "\n  price:", price);
  await offer.save();
  if (boolShowTradeLogs) console.log("Offer has been saved");
};

const createBid = async (ticketId, userId, price) => {
  let bid = new bidModel({ 
    ticketId: ticketId,
    userId: userId, 
    price: price
  }); 
  if (boolShowTradeLogs) console.log("Bid has been created:\n  ticketId:", ticketId, "\n  userId:", userId, "\n  price:", price);
  await bid.save();
  if (boolShowTradeLogs) console.log("Bid has been saved");
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

const clearUsers = async () => {
  await userModel.deleteMany({ });
}

const clearTickets = async () => {
  await ticketModel.deleteMany({ });
}

const clearOffers = async () => {
  await offerModel.deleteMany({ });
}

const clearBids = async () => {
  await bidModel.deleteMany({ });
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

const getUserData = async (_id) => {
  const userData = await userModel.findById(_id);
  return userData;
}

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
boolShowUserLogs = false
boolShowTicketLogs = false
boolShowTradeLogs = false

// These boolean variables change if different tests are run
boolTestAddUser = false
boolTestFetchUserInfo = false
boolTestAllQuick = false

const main = async () => {
  // We use try/finally so that we automatically disconnect once the promises are completed
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to database");

    // Runs any desired tests
    if (boolTestAddUser) await testAddUser();
    if (boolTestFetchUserInfo) await testFetchUserInfo();
    if (boolTestAllQuick) await testAllQuick();

  } finally {
    // Ensures that the client will close when you finish/error
    console.log("Client Closed")
    await mongoose.disconnect();
  }
}; 

// Tests for functions
const testAddUser = async () => {
  await clearAll();
  const u1 = await createUser(1, "Seth", "Brown", 150);
  const u2 = await createUser(2, "Tim", "", 30);
  const u3 = await createUser(3, "Tom");
  const u4 = await createUser(4, "Paul", "Smith", 100);
  const u5 = await createUser(5, "Mary", "Jane", 20);

  assert(u1._id == 1);
  assert(u2.fname == "Tim");
  assert(u3.lname == "");
  assert(u3.balance == 0);
  assert(u4.lname == "Smith");
  assert(u5.balance == 20);

  console.log('testAddUser passed');
  
};

const testFetchUserInfo = async () => {
  await clearAll();
  await createUser(1, "Seth", "Brown", 150);
  await createUser(2, "Tim", "", 30);
  await createUser(3, "Tom");
  await createUser(4, "Paul", "Smith", 100);
  await createUser(5, "Mary", "Jane", 20);

  const u1 = await getUserData(1);
  const u2 = await getUserData(2);
  const u3 = await getUserData(3);
  const u4 = await getUserData(4);
  const u5 = await getUserData(5);

  assert(u1._id == 1);
  assert(u2.fname == "Tim");
  assert(u3.lname == "");
  assert(u3.balance == 0);
  assert(u4.lname == "Smith");
  assert(u5.balance == 20);

  const u1_bal = await getUserBalance(1);
  const u4_bal = await getUserBalance(4);

  assert(u1_bal.balance == 150);
  assert(u4_bal.balance == 100);

  console.log('testFetchUserInfo passed');
  
};

const testAllQuick = async () => {
  const testUserOne = await createUser("045", "Franklin", "Roosevelt", 300);
  const testUserTwo = await createUser("038", "George", "Washington", 250);
  if (boolShowUserLogs) console.log("Test User One:", testUserOne, "\nTest User Two:", testUserTwo);
  const testTicket = await createTicket(testUserOne._id, "Patriotic Event");
  const testOffer = await createOffer(testTicket._id, testUserOne._id, 40);
  const testBid = await createBid(testTicket._id, testUserTwo._id, 20);
}

const clearAll = async () => {
  await clearUsers();
  await clearTickets();
  await clearOffers();
  await clearBids();
}

main();