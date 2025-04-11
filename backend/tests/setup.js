/**
 * database-setup.js
 * 
 * In-memory MongoDB setup for Jest tests using mongodb-memory-server.
 */

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Reference to our in-memory MongoDB server
let mongoServer;

// Sets up an in-memory MongoDB server and connects Mongoose before all tests.
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { dbName: "testDB" }); // Keep one test DB
});

// Disconnects Mongoose and stops the in-memory server after all tests finish.
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

// Empties all collections to ensure a clean state after each test.
afterEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});
