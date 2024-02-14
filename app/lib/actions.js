"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
// import { signIn } from '../auth';
import bcrypt from "bcrypt";
// import { AuthError } from 'next-auth';


export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");

  
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { name,  primaryemailaddress,  primarystreet,  primarycity,  accountnumber,} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      name,
      primaryemailaddress,
      primarystreet,
      primarycity,
      accountnumber,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id,  name,  primaryemailaddress,  primarystreet,  primarycity,  accountnumber,} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      name,
      primaryemailaddress,
      primarystreet,
      primarycity,
      accountnumber,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

// // Create a new authentication function
// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     // Find the user in the database
//     const user = await User.findOne({ username });

//     // Check if the user exists
//     if (!user) {
//       throw new Error("User not found");
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     // If passwords match, sign in the user
//     if (passwordMatch) {
//       await signIn('credentials', { username, password });
//     } else {
//       // If passwords don't match, throw an error
//       throw new Error("Incorrect password");
//     }
//   } catch (err) {
//     console.error("Authentication Error:", err);

//     // Customize error messages based on different scenarios
//     if (err.message.includes("User not found")) {
//       return "User not found";
//     } else if (err.message.includes("Incorrect password")) {
//       return "Incorrect password";
//     }

//     throw err; // Rethrow the error for unhandled scenarios
//   }
// };
