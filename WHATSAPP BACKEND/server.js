// imports 
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";


// app config
const app = express()
const port = process.env.port || 9000

// middleware
app.use(express.json());

//DB config
const connection_url = "mongodb+srv://admin:Cp8AeFmt7g8pEi4@cluster0.a7cud.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url,{

useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true

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