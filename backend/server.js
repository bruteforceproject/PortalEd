//testing purposes
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

let db;
const url = `mongodb+srv://Ramez:Q61yjN9a41HIZSIy@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
