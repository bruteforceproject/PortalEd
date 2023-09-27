const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors"); // Add this line for CORS support

const app = express();

const uri = "mongodb+srv://PortalEd:pk0WFbP1wOyqKXYu@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority";

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors()); // Enable CORS

const userSchema = new mongoose.Schema({
  accountID: { type: String, unique: true }, // Change 'username' to 'accountID'
  password: String,
  // Add other user properties as needed
});

const User = mongoose.model("User", userSchema);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    const { accountID, password } = req.body; // Change 'username' to 'accountID'

    // Hash and salt the password (use bcrypt)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user document
    const newUser = new User({
      accountID, // Change 'username' to 'accountID'
      password: hashedPassword,
      // Add other user properties as needed
    });

    // Save the user document to MongoDB
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});
