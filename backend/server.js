//testing purposes
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
 const yessir = require('twilio')("ACb72962ff113b71a5549964fb3514d15d", "0b06ec43b9762ecaffdeeea5e4e0ae7e");

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
    const academicsCollection = database.collection("Academics");
    const behaviorCollection = database.collection("Behavior");

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

    //end point to get academics
    app.post("/getAcademics", async (req, res) => {
      try {
        const {studentID, class_id} = req.body;
        const academicsData = await academicsCollection.findOne({studentID, class_id});
        if(!academicsData) {
          return res.status(404).json({message: "Academics data not found"});
        }
        res.status(200).json(academicsData);
      } catch(error) {
        console.error("Error fetching academics data:", error);
        res.status(500).json({message: "Error fetching academics data"});
      }
    });

    //end point to get behavior
    app.post("/getBehavior", async (req, res) => {
      try {
        const {studentID, class_id} = req.body;
        const behaviorData = await behaviorCollection.findOne({studentID, class_id});
        if(!behaviorData) {
          return res.status(404).json({message: "Behavior data not found"});
        }
        res.status(200).json(behaviorData);
      } catch(error) {
        console.error("Error fetching behavior data:", error);
        res.status(500).json({message: "Error fetching behavior data"});
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
              teacher_id: teacherUser.teacher_id,
              period0: teacherUser.period0,
              period1: teacherUser.period1,
              period2: teacherUser.period2,
              period3: teacherUser.period3,
              period4: teacherUser.period4,
              period5: teacherUser.period5,
              period6: teacherUser.period6,
              period7: teacherUser.period7,

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

      const parent = await parentCollection.findOne({ phone });

  if (parent) {
    // If found in the parentCollection, check if the email matches
    if (parent.email === email) {
      return res.status(200).json({ message: "Phone number matches associated account" });
    } else {
      return res.status(404).json({ message: "Phone number doesn't match associated account" });
    }
  } else {
    // If not found in the parentCollection, try to find in the teacherCollection
    const teacher = await teacherCollection.findOne({ phone });

    if (teacher) {
      // If found in the teacherCollection, check if the email matches
      if (teacher.email === email) {
        return res.status(200).json({ message: "Phone number matches associated account" });
      } else {
        return res.status(404).json({ message: "Phone number doesn't match associated account" });
      }
    } else {
      // If not found in both collections, return a 404 response
      return res.status(404).json({ message: "Phone doesn't exist" });
    }
  }
});


app.post("/api/start-verify", async (req, res)  => {
  
  const {phone, email} = req.body

  yessir.verify.v2.services('VA8da325843da227fc94d159b2f1f13a72')
    .verifications
    .create({to: "+1"+ phone, channel: 'sms'})
    .then(verification => console.log(verification.status));
});

app.post("/api/start-check", async (req, res)  => {
  
  const { code, phone } = req.body

  console.log(code)

  yessir.verify.v2.services('VA8da325843da227fc94d159b2f1f13a72')
  .verificationChecks
  .create({to: "+1" + phone, code: code})
  .then(verification_check => {
    if (verification_check.status === 'approved'){
      return res.status(200).json();
    }
  });
});


    app.post("/api/email-verification", async (req, res) => {
      const { email } = req.body;

        // Attempt to find the email in the teacherCollection
  const teacher = await teacherCollection.findOne({ email });

  if (teacher) {
    // If found in the teacherCollection, return the result
    return res.status(200).json({
      message: "Email exists",
      userPhone: teacher.phone,
      userEmail: teacher.email,
      userType: "teacher", // You can include a userType field to indicate it's a teacher
    });
  } else {
    // If not found in the teacherCollection, try the parentCollection
    const parent = await parentCollection.findOne({ email });

    if (parent) {
      // If found in the parentCollection, return the result
      return res.status(200).json({
        message: "Email exists",
        userPhone: parent.phone,
        userEmail: parent.email,
        userType: "parent", // You can include a userType field to indicate it's a parent
      });
    } else {
      // If not found in both collections, return a 404 response
      return res.status(404).json({ message: "Email doesn't exist" });
    }
  }
});

    app.post("/api/get-email", async (req, res) => {
      const { fname, lname, phone } = req.body;
      console.log("testphone"+phone);
      const user = await parentCollection.findOne({ phone });

      if (!user) {
        return res.status(404).json({ message: "Email doesn't exist" });
      } else if (fname == user.fname && lname == user.lname) {
        res.status(200).json({ message: "Found email", email: user.email });
      }
    });

    app.post("/api/reset-password", async(req, res) => {
      const { email, password } = req.body;

      const query = { "name": email };
      const update = {
          "$set": {
            "password": password
          }
        };

      const options = { returnNewDocument: true };
      //console.log("email:"+email);
      //console.log("passwordNew:"+JSON.stringify(update)+"testing"+JSON.stringify(options));
      parentCollection.findOneAndUpdate({email}, update, options)
        .then(updatedDocument => {
          if(updatedDocument) {
            console.log(`Successfully updated document: ${updatedDocument}.`)
            return res.status(200).json();
          } else {
            // If not found in parentCollection, try teacherCollection
        teacherCollection.findOneAndUpdate({ email }, update, options)
        .then(updatedTeacherDocument => {
          if (updatedTeacherDocument) {
            console.log(`Successfully updated document in teacherCollection: ${updatedTeacherDocument}.`);
            return res.status(200).json();
          } else {
            console.log("No document matches the provided query in both collections.");
            return res.status(404).json({ message: "Email not found in both collections" });
          }
        })
        .catch(err => console.error(`Failed to find and update document in teacherCollection: ${err}`));
    }
  })
  .catch(err => console.error(`Failed to find and update document in parentCollection: ${err}`));
});

    app.post("/getStudentsByPeriod", async (req, res) => {
      try {
        const { period0, period1, period2, period3, period4, period5, period6, period7 } = req.body;
        console.log("testperiod0: " ,period0);
        console.log("testperiod1: " ,period1);
        console.log("testperiod2: " ,period2);
        // Query the student collection to find documents with period_0 matching the provided value
        const students0 = await studentCollection.find({ period0 }).toArray();
        const students1 = await studentCollection.find({ period1 }).toArray();
        const students2 = await studentCollection.find({ period2 }).toArray();
        const students3 = await studentCollection.find({ period3 }).toArray();
        const students4 = await studentCollection.find({ period4 }).toArray();
        const students5 = await studentCollection.find({ period5 }).toArray();
        const students6 = await studentCollection.find({ period6 }).toArray();
        const students7 = await studentCollection.find({ period7 }).toArray();
        // Extract first names from the matching documents and store them in a list
        const studentData0 = students0.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData1 = students1.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData2 = students2.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData3 = students3.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData4 = students4.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData5 = students5.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData6 = students6.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        const studentData7 = students7.map((student) => ({
          fname: student.fname,
          studentID: student.studentID,
        }));
        
        // Combine the two arrays into one
        //const studentData = [...studentData0, ...studentData1];

        // Return the list of first names as a JSON response
        res.status(200).json({studentData0, studentData1, studentData2, studentData3, studentData4, studentData4, studentData5, studentData6, studentData7});
      } catch (error) {
        console.error("Error fetching students by period:", error);
        res.status(500).json({ message: "Error fetching students by period" });
      }
    });

// Define a route to handle creating a new attendance document
app.post('/createAttendance', async (req, res) => {
  try {
    // Extract data from the request body
    const { studentID, class_id, color, date, acknowledged } = req.body;


    // Access the "Attendance" collection
    //const attendanceCollection = db.collection('Attendance');

    // Create a new attendance document
    const newAttendanceDocument = {
      studentID,
      class_id,
      color,
      date,
      acknowledged,
    };

    // Insert the new document into the collection
    const result = await attendanceCollection.insertOne(newAttendanceDocument);


    res.status(201).json({ message: 'Attendance document created successfully', documentId: result.insertedId });
  } catch (error) {
    console.error('Error creating attendance document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Define a route to handle creating a new academic document
app.post('/createAcademics', async (req, res) => {
  try {
    // Extract data from the request body
    const { studentID, class_id, color, date, acknowledged } = req.body;


    // Access the "Attendance" collection
    //const attendanceCollection = db.collection('Attendance');

    // Create a new attendance document
    const newAcademicsDocument = {
      studentID,
      class_id,
      color,
      date,
      acknowledged,
    };

    // Insert the new document into the collection
    const result = await academicsCollection.insertOne(newAcademicsDocument);


    res.status(201).json({ message: 'Academics document created successfully', documentId: result.insertedId });
  } catch (error) {
    console.error('Error creating academics document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Define a route to handle creating a new Behavior document
app.post('/createBehavior', async (req, res) => {
  try {
    // Extract data from the request body
    const { studentID, class_id, color, date, acknowledged } = req.body;


    // Access the "Attendance" collection
    //const attendanceCollection = db.collection('Attendance');

    // Create a new attendance document
    const newBehaviorDocument = {
      studentID,
      class_id,
      color,
      date,
      acknowledged,
    };

    // Insert the new document into the collection
    const result = await behaviorCollection.insertOne(newBehaviorDocument);


    res.status(201).json({ message: 'Behavior document created successfully', documentId: result.insertedId });
  } catch (error) {
    console.error('Error creating Behavior document:', error);
    res.status(500).json({ error: 'Internal server error' });
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
