const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://nasa-api:5QRq4zTJnTa2D6sd@nasacluster.2h3dh.mongodb.net/nasaProject?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB ...');
});

mongoose.connection.on('error', err => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect
};
