const express = require("express")
const mongoose = require("mongoose")
const app = express()

const uri = 
"mongodb+srv://PortalEd:2bUqtZYprxI5Ujr3@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(error){
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
})

/* 
app.get('/api/resource', (req, res) => {
    // Fetch all resources from the database.
    // Send the list of resources as a response.
});

app.get('/api/resource/:id', (req, res) => {
    const resourceId = req.params.id;
    // Fetch the resource with the specified ID from the database.
    // Send the resource as a response.
});

app.put('/api/resource/:id', (req, res) => {
    const resourceId = req.params.id;
    // Update the resource with the specified ID in the database.
    // Use req.body to access the updated data.
    // Send a response indicating success or failure.
});

app.delete('/api/resource/:id', (req, res) => {
    const resourceId = req.params.id;
    // Delete the resource with the specified ID from the database.
    // Send a response indicating success or failure.
});


*/
