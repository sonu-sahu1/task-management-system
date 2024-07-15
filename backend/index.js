const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./api/routes/user");
const taskRouter = require("./api/routes/task");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
mongoose
  .connect(
    "mongodb://localhost:27017/usernew"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server running on port No. 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
