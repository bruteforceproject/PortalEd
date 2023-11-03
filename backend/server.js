//testing purposes
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const yessir = require('twilio')("AC5d2f3bf0571fa3e3382f90f069d173a9", "xxxxxxxxxxxxxxxxxxxxxxxxxx");

//const textFlow = require("textflow.js");

//textFlow.useKey("6rcyalWx9EZg4OuURkmpT8kTOpZhteFdO8itwJC32ki1roGcqaCqp64frionxSvr");

const app = express();


let db;
const url = `mongodb+srv://Ramez:U75ZRvMsST1W5IK6@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority`;

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
    const counselorCollection = database.collection("Counselor");
    const classCollection = database.collection("Class");
    const attendanceCollection = database.collection("Attendance");

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
      console.log("request recieved for " + req.body.studentId);
      const student = await studentCollection.findOne({
        studentID: String(req.body.studentId),
      });
      res.status(200).json(student);
    });

    //end point to get class information
    app.post("/getClass", async (req, res) => {
      await client.connect();
      const classes = await classCollection.findOne({
        class_id: String(req.body.class_id),
      });
      res.status(200).json(classes);
    });

    //end point to get teacher information given teacher_id
    app.post("/getTeacher", async (req, res) => {
      await client.connect();
      const teachers = await teacherCollection.findOne({
        teacher_id: String(req.body.teacher_id),
      });
      res.status(200).json(teachers);
    });

    //end point to get attendance
    app.post("/getAttendance", async (req, res) => {
      try {
        const {studentID, class_id} = req.body;
        const attendanceData = await attendanceCollection.findOne({studentID, class_id});
        if(!attendanceData) {
          return res.status(404).json({message: "Attendance data not found"});
        }
        res.status(200).json(attendanceData);
      } catch(error) {
        console.error("Error fetching attendance data:", error);
        res.status(500).json({message: "Error fetching attendance data"});
      }
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
          if (password === parentUser.password) {
            // Authentication successful for a parent
            globalUserId = parentUser._id.toString();
            return res.status(200).json({
              message: "Login successful",
              userId: parentUser.parent_id,
              role: "parent",
            });
          }
        }

        // If user not found in parentCollection, check teacherCollection
        const teacherUser = await teacherCollection.findOne({ email });

        if (teacherUser) {
          // Check if the provided password matches the stored  password


          if (password === teacherUser.password) {
            // Authentication successful for a teacher
            globalUserId = teacherUser._id.toString();
            return res.status(200).json({
              message: "Login successful",
              userId: teacherUser._id,
              role: "teacher",
            });
          }
        }
        const counselorUser = await counselorCollection.findOne({ email });
        if (counselorUser) {
          // Check if the provided password matches the stored  password


          if (password === counselorUser.password) {
            // Authentication successful for a teacher
            globalUserId = counselorUser._id.toString();
            return res.status(200).json({
              message: "Login successful",
              userId: counselorUser._id,
              role: "counselor",
            });
          }
        }


        res.status(200).json({
          message: "Login successful",
          userId: user._id,
          role: user.role,
        }); // Include the user's _id
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Login failed" });
      }
    });



    // Create a new route to fetch the parent's name
    app.get("/users/:userId", async (req, res) => {
      try {
        const userId = req.params.userId;
        const user = await parentCollection.findOne({ parent_id: userId });

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
        const userId = req.params.userId;
        console.log("parentview id:", userId);
        // Retrieve students with matching parent_id from the student database
        const students = await studentCollection
          .find({ parent_id: userId })
          .toArray();

        if (students.length === 0) {
          return res.status(404).json({ message: "No children found" });
        }

        // Initialize an array to store student information
        const studentInfo = [];

        // Iterate through the students
        for (const student of students) {
          // Extract fname, lname, and alertCount from the student document
          const { fname, lname, alertCount } = student;
          studentInfo.push({ fname, lname, alertCount });
        }

        // Send the list of student information as a response
        res.status(200).json(studentInfo);
      } catch (error) {
        console.error("Error fetching children data:", error);
        res.status(500).json({ message: "Error fetching children data" });
      }
    });

    app.post("/api/verify", async (req, res) => {
      const { phone, email } = req.body;
      console.log(req.body);

      const user = await parentCollection.findOne({ phone });

      if (!user) {
        return res.status(404).json({ message: "Phone doesn't exist" });
      } else if (user.email != email) {
        res
          .status(404)
          .json({ message: "Phone number doesn't match associated account" });
      } else {
        res
          .status(200)
          .json({ message: "Phone number matches associated account" });
      }
    });

app.post("/api/start-verify", async (req, res)  => {
  
  const {phone, email} = req.body

  yessir.verify.v2.services('xxxxxxxxxxxxxxxxxxxxxxxxxx')
                .verifications
                .create({to: phone, channel: 'sms'})
                .then(verification => console.log(verification.status));
});

app.post("/api/start-check", async (req, res)  => {
  
  const { code, phone } = req.body

  console.log(code)

  yessir.verify.v2.services('xxxxxxxxxxxxxxxxxxxxxxxxxx')
  .verificationChecks
  .create({to: phone, code: code})
  .then(verification_check => console.log(verification_check.status));


});


    app.post("/api/email-verification", async (req, res) => {
      const { email } = req.body;

      const user = await parentCollection.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "Email doesn't exist" });
      } else {
        res.status(200).json({
          message: "Email exists",
          userPhone: user.phone,
          userEmail: user.email,
        });
      }
    });

    app.post("/api/get-email", async (req, res) => {
      const { fname, lname, phone } = req.body;

      const user = await parentCollection.findOne({ phone });

      if (!user) {
        return res.status(404).json({ message: "Email doesn't exist" });
      } else if (fname == user.fname && lname == user.lname) {
        res.status(200).json({ message: "Found email", email: user.email });
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
