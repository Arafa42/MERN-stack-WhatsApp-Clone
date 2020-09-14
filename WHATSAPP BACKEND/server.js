// imports 
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config
const app = express()
const port = process.env.port || 9000

const pusher = new Pusher({
    appId: '1072781',
    key: 'e52d6791ecd39497868c',
    secret: '0a84efe1eab3a4dbb1ed',
    cluster: 'eu',
    encrypted: true
  });
  


// middleware
app.use(express.json());

//DB config
const connection_url = "mongodb+srv://admin:Cp8AeFmt7g8pEi4@cluster0.a7cud.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url,{

useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true

})

const db = mongoose.connection

db.once("open", () => {

console.log("Connected to database...");

const msgCollection = db.collection("messageContent");
const changeStream = msgCollection.watch();
console.log(changeStream);

changeStream.on("change", (change) =>{
console.log("A change occured", change);
})

})


//...

// API routes

app.get("/",(req,res) => res.status(200).send("Hello World !"));

//all messages route
app.get("/api/v1/messages/sync", (req, res) =>{
Messages.find((err, data) => {
if(err){res.status(500).send(err);}
else{res.status(200).send(data);}
})
})

//new message route
app.post("/api/v1/messages/new", (req, res) => {
const dbMessage = req.body;
Messages.create(dbMessage, (err,data) => {
if(err){res.status(500).send(err);}
else{res.status(201).send(`new message created: ${data}`);}    
})
})


//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));