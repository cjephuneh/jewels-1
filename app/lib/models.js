import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    Name: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String, 
        unique: true,
      },
      PrimaryStreet: {
        type: String,
      },
      city: {
        type: String,
      },
      PrimaryState: {
        type: String,
      },
      img: {
        type: String,
      },
      account: {
        type: Number,
        min: 0, 
      },
      PrimaryZIPCode: {
        type: Number,
        min: 0, 
      },
    },
  { timestamps: true }
);

const donationSchema = new mongoose.Schema(
    {
      Name: {
          type: String,
          required: true,
          unique: true,
        },
        Date: {
          type: String, 
          unique: true,
        },
        Amount: {
          type: String,
        },
        Type: {
          type: String,
        },
        Fund: {
          type: String,
        },
        img: {
          type: String,
        },
        account: {
          type: Number,
          min: 0, 
        },
        Campaign: {
          type: String,
        
        },
      },
    { timestamps: true }
  );
  
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Donation = mongoose.models.Donation || mongoose.model("Donation", donationSchema);
