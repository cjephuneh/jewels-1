import { Product, User, Donation, Latest } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Product.find({ name: { $regex: regex } }).count();
    const products = await Product.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchDonations = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Donation.find({ Name: { $regex: regex } }).count();
    const donations = await Donation.find({ Name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, donations };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch donations!");
  }
};

export const fetchLatest = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Latest.find({ Name: { $regex: regex } }).count();
    const donations = await Latest.find({ Name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, donations };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch latest!");
  }
};

export const fetchTotalUsers = async () => {
  try {
    connectToDB();
    const count = await User.count();
    return count;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch total users!");
  }
};

export const fetchTotalDonations = async () => {
  try {
    connectToDB();
    const total = await Donation.aggregate([
      { $group: { _id: null, totalAmount: { $sum: "$Amount" } } },
    ]);
    return total[0]?.totalAmount || 0;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch total donations!");
  }
};

export const fetchTotalProducts = async () => {
  try {
    connectToDB();
    const count = await User.count({ type: "products" }); // Adjust the query as needed
    return count;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch total constituents!");
  }
};