// import 
import express from "express";

// app config
const app = express()
const port = process.env.port || 9000

// middleware

//DB config

//...

// API routes
app.get("/",(req,res) => res.status(200).send("Hello World !"))

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));