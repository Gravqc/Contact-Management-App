const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config()
const app = express()

const port = process.env.PORT || 5000;

connectDb();

app.use(express.json())//middleware used to parse incoming requests with json payloads
// basically will convert the request into a JSON object

app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)
app.listen(port, () =>{
    console.log(`server is listening ${port}`)
})