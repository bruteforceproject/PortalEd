//testing purposes
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
//const textFlow = require("textflow.js");

//textFlow.useKey("6rcyalWx9EZg4OuURkmpT8kTOpZhteFdO8itwJC32ki1roGcqaCqp64frionxSvr");

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
  //testing here
  //const data = await mongoClient.db().collection('Student').find({}).toArray();
  //console.log('!!!', data);

  try {
    await client.connect();
    
    console.log("Connected to MongoDB");

    const database = client.db("PortedEd");
    const studentCollection = database.collection("Student");
    const parentCollection = database.collection("Parent");
    const teacherCollection = database.collection("Teacher");



    // This is an end point to receive post requests on /addUser
    app.post("/addTeacher", async (req, res) => {
      const userCollection = db.collection("Student");
      userCollection.insertOne(req.body, (err, result) => {
        if (err) res.status(500).send(err);
        res.send(result.ops[0]);
      });
    });

    // this is an end point to get all the users from /getStudents
    app.post("/getStudents", async (req, res) => {
      await client.connect();
      const student = await studentCollection.findOne({
        studentID: String(req.body.studentId),
      });
      res.status(200).json(student);
    });


    // User login route
    app.post("/login", async (req, res) => {
      try {
        await client.connect();
        const { email, password } = req.body;
        // Log the email for debugging
        console.log("Email:", email);
        console.log("password:", password);
        // Find the user by email
        const parentUser = await parentCollection.findOne({ email });

        if (parentUser) {
          // Check if the provided password matches the stored hashed password
          //const passwordMatch = await bcrypt.compare(password, parentUser.password);
    
          if (password === parentUser.password) {
            // Authentication successful for a parent
            globalUserId = parentUser._id.toString();
            return res.status(200).json({
              message: "Login successful",
              userId: parentUser._id,
              role: parentUser.role,
            });
          }
        }
    
        // If user not found in parentCollection, check teacherCollection
        const teacherUser = await teacherCollection.findOne({ email });
    
        if (teacherUser) {
          // Check if the provided password matches the stored hashed password
          //const passwordMatch = await bcrypt.compare(password, teacherUser.password);
    
          if (password === teacherUser.password) {
            // Authentication successful for a teacher
            globalUserId = teacherUser._id.toString();
            return res.status(200).json({
              message: "Login successful",
              userId: teacherUser._id,
              role: teacherUser.role,
            });
          }
        }

        res.status(200).json({ message: "Login successful", userId: user._id, role:user.role}); // Include the user's _id
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Login failed" });
      }
    });

    // Create a new route to fetch the parent's name
app.get("/users/:userId", async (req, res) => {
  try {
    const { ObjectId } = require("mongodb");
    const userId = req.params.userId;
    const user = await parentCollection.findOne({ _id: new ObjectId(userId) });

    if (user) {
      const { fname, lname } = user;
      res.status(200).json({ fname, lname });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Error fetching user data" });
  }
});

app.get("/users/:userId/children", async (req, res) => {
  try {
    const { ObjectId } = require("mongodb");
    const userId = req.params.userId;
    
    // Find the parent document by _id
    const parent = await parentCollection.findOne({ _id: new ObjectId(userId) });

    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }

    const children = parent.children; // Assuming children is an array of student ObjectIds

    // Initialize an array to store student information
    const studentInfo = [];

    // Iterate through the children array
    for (const studentId of children) {
      // Query the Student collection to retrieve student's document by _id
      const student = await studentCollection.findOne({ _id: studentId });

      if (student) {
        // Extract fname and lname from the student document
        const { fname, lname, alertCount } = student;
        studentInfo.push({ fname, lname, alertCount });
      }
    }

    if (studentInfo.length === 0) {
      return res.status(404).json({ message: "No children found" });
    }

    // Send the list of student information as a response
    res.status(200).json(studentInfo);
  } catch (error) {
    console.error("Error fetching children data:", error);
    res.status(500).json({ message: "Error fetching children data" });
  }
});





    app.post("/api/verify", async (req, res) => {
      const { phoneNumber } = req.body;

      var result = await textFlow.sendVerificationSMS(phoneNumber);
      if (result.ok) return res.status(200).json({ success: true });
    });

    app.post("/api/email-verification", async (req, res) => {
      const { email } = req.body;

      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "Email doesn't exist" });
      } else {
        res.status(200).json({ message: "Email exists", userId: user._id });
      }
    });

    app.post("/api/get-email", async (req, res) => {
      const { firstName, lastName, phoneNumber } = req.body;

      const user = await collection.findOne({ phoneNumber });

      if (!user) {
        return res.status(404).json({ message: "Phone number doesn't exist" });
      } else {
        console.log("Phone Number exists");

        if (
          (await bcrypt.compare(firstName, user.firstName)) &&
          (await bcrypt.compare(lastName, user.lastName))
        ) {
          res.status(200).json({ message: "Email exists", userId: user._id });
        }
      }
    });

    // Start the Express server
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    //await client.close();
  }
}
// Call the startServer function to start the server
startServer();
