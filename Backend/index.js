const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')
require('dotenv/config');
const mongooseUri=process.env.DB_CONNECTION;
const port = 5000;


//routes
app.use(cors())
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/hosp",require("./routes/hospital"));

//mongoose connect
mongoose.connect(mongooseUri, () => {
  console.log("connected to mongo db!!");
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
