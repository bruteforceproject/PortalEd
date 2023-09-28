const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

const uri = "mongodb+srv://PortalEd:pk0WFbP1wOyqKXYu@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.json());
app.use(cors());

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("test");
    const collection = database.collection("users");

    // Create a new user (registration route)
    app.post("/api/users", async (req, res) => {
      try {
        const { email, password } = req.body;

        // Check if the email already exists
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "email already exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
          email,
          password: hashedPassword,
          role: "teacher",
          period0: "",
          period1: "",
          period2: "",
          period3: "",
          period4: "",
          period5: "",
          period6: "",
          period7: "",
          // Add other user properties as needed
        };

        await collection.insertOne(newUser);

        res.status(201).json({ message: "User created successfully" });
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
      }
    });


    
    // User login route
    app.post("/api/login", async (req, res) => {
      try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await collection.findOne({ email });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Check if the provided password matches the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ message: "Incorrect password" });
        }

        // Authentication successful

        globalUserId = user._id.toString();

        res.status(200).json({ message: "Login successful", userId: user._id }); // Include the user's _id

      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Login failed" });
      }
    });

    // Start the Express server
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Call the startServer function to start the server
startServer();
