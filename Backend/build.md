**This document provides detailed instructions for setting up, running, and testing the Ticket Trading Platform locally.**

**Ensure you have the following installed on your system:**

Node.js (version 18.0 or higher)
Download: https://nodejs.org/

npm (version 8.0 or higher)
Installed with Node.js.

Git
Download: https://git-scm.com/

Installation Steps
1) Clone the Repository
git clone https://github.com/marco-dm1/CS320-Team-M.git
cd CS320-Team-M

2) Setup Backend\
cd Backend\
npm install\
node index.js

The application should now be accessible at http://localhost:3000.

3) Add a .env file in the root directory so that the backend has the correct connection string\
The should only have one line in this format:\
URI = "mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.h2lnq.mongodb.net/?retryWrites=true&w=majority&appName=<CLUSTER>/<DATABASE>"

mongodb

4) Testing the Application\
Backend Tests\
To run the backend unit tests:

cd backend
npm test

Notes: 
Make sure all dependencies are up-to-date using npm update.
