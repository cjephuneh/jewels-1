import { connectToDB } from "./utils";
const User = require('./models'); // Replace with your actual User model


// Function to fetch the total number of users
const fetchTotalUsers = async () => {
    try {
      await connectToDB(); // Connect to your database
      const count = await User.count(); // Get the total count of users
      return count;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch total users!");
    }
  };
  
  // Example usage:
  (async () => {
    try {
      const totalUsers = await fetchTotalUsers();
      console.log(`Total users: ${totalUsers}`);
    } catch (error) {
      console.error(error.message);
    }
  })();