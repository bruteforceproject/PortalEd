//testing purposes
const express = require("express");
const { MongoClient, ServerApiVersion ,ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");
const textFlow = require("textflow.js")

textFlow.useKey("6rcyalWx9EZg4OuURkmpT8kTOpZhteFdO8itwJC32ki1roGcqaCqp64frionxSvr")

const app = express();

let db;
const url = `mongodb+srv://Ramez:GHipRjutHHid5CG7@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


app.use(express.json());
app.use(cors());

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("test");
    const collection = database.collection("users");



    // This is an end point to receive post requests on /addUser
app.post("/addTeacher", async (req, res) => {
  const userCollection = db.collection("Student");
  userCollection.insertOne(req.body, (err, result) => {
    if (err) res.status(500).send(err);
    res.send(result.ops[0]);
  });
});

async function dbget(id) {
  try {
    console.log("In dbget");
    await client.connect();
    console.log("Connected!");
    const collection = await client
      .db("PortedEd")
      .collection("Student")
      .findOne({ studentID: String(id) });
    console.log(collection);
    return collection;
  } finally {
    client.close();
  }
}

// this is an end point to get all the users from /getStudents
app.post("/getStudents", async (req, res) => {
  console.log(req.body);
  const userCollection = await dbget(req.body.studentId);
  res.send(userCollection);
});

app.get("/", (req, res) => {
  res.json("req.body.name");
});








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

    app.post("/api/verify", async(req, res) => {
      const { phoneNumber } = req.body

      var result = await textFlow.sendVerificationSMS(phoneNumber)
      if (result.ok)
        return res.status(200).json({ success: true });

    })

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