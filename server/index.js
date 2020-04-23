// POINT OF ENTRY
// This file contains the basic boilerplate code to get up and running on server side and connect to MongoDB

// Setup for server
const express = require('express');
const app = express();

// Setup base mount point for /api
const api = require('./routes/api.js');
app.use('/api', api);

// Database stuff
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const mongoDb = 'mongodb+srv://student:C0d3Cr3w@cluster0-mhpvz.gcp.mongodb.net/cs_database?retryWrites=true&w=majority';
console.log(`Connecting to Mongo @ ${mongoDb}...`);
mongoose.connect(mongoDb, {useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB crapped out'));

// START Listening on port
const portNumber = 5555; // Use whatever port number you choose
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
});

