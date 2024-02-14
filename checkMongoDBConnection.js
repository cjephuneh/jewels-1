const mongoose = require('mongoose');

async function checkConnection() {
  try {
    // MongoDB connection URI
    const mongoURI = 'mongodb+srv://erickomee:erickomee254@cluster0.axyzbpk.mongodb.net/dashboard?retryWrites=true&w=majority';

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // no longer needed
      useUnifiedTopology: true, // no longer needed
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

checkConnection();
