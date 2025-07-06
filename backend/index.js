require("dotenv").config();
const express = require("express");
const helmet= require('helmet')
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
var morgan = require('morgan')




app.use(morgan('tiny'))
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors())
app.use('/api/auth', authRouter);





app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});


mongoose.connect(process.env.DB_URL).then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log("error:",err)
})
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});