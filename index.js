const express = require('express');
const app = express();
const userRouter = require("./routes/user.route")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose")

const port = process.env.PORT || 5150 


app.use(express.urlencoded({ extended: true, limit: "100mb" }))
app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
require("dotenv").config()
const URI = process.env.uri || undefined
mongoose.connect(URI)


  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  })



app.get('/signup', (req, res) => {
  res.send('Hello from signup route!')
})

app.get('/signin', (req, res) => {
  res.send('Hello from signin route!')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });