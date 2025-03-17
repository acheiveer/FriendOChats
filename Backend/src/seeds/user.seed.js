import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
      email: "priyanka@gmail.com",
      fullName: "Priyanka Sharma",
      password: "Priyanka",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "snehal@gmail.com",
      fullName: "Snehal Patel",
      password: "Snehal",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "anjali@gmail.com",
      fullName: "Anjali Gupta",
      password: "Anjali",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "deepika@gmail.com",
      fullName: "Deepika Singh",
      password: "Deepika",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "poojita@gmail.com",
      fullName: "Poojita Kumar",
      password: "Poojita",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "shreya@gmail.com",
      fullName: "Shreya Khan",
      password: "Shreya",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "kavitha@gmail.com",
      fullName: "Kavitha Verma",
      password: "Kavitha",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "arpita@gmail.com",
      fullName: "Arpita Reddy",
      password: "Arpita",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    // Male Users
    {
      email: "vikash@gmail.com",
      fullName: "Vikash Sharma",
      password: "Vikash",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "pranav@gmail.com",
      fullName: "Pranav Patel",
      password: "Pranav",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "sanjay@gmail.com",
      fullName: "Sanjay Singh",
      password: "Sanjay",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      email: "ranjith@gmail.com",
      fullName: "Ranjith Mehta",
      password: "Ranjith",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      email: "krishna@gmail.com",
      fullName: "Krishna Kumar",
      password: "Krishna",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      email: "ramesh@gmail.com",
      fullName: "Ramesh Joshi",
      password: "Ramesh",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      email: "suresh@gmail.com",
      fullName: "Suresh Reddy",
      password: "Suresh",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();