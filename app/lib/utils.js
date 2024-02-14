import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    await mongoose.connect('mongodb+srv://erickomee:erickomee254@cluster0.axyzbpk.mongodb.net/dashboard?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // Increase the timeout if necessary
    });

    connection.isConnected = true;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
