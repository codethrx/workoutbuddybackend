//packages
const express = require("express");
const mongoose = require("mongoose");
// const { cannotHaveAUsernamePasswordPort } = require("whatwg-url");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
//initialize express
const app = express();
//middlewares
app.use((req, res, next) => {
  console.log(`Path-${req.path}`);
  console.log(`Method-${req.method}`);
  next(); //CRUCIAL!!!!!
});
//react to requests (routes)
app.use("/api/workouts", require("./routes/workouts"));
//Listen to requests and connecting to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connected to DB. Server listening to requests on port#${PORT}`
      );
    });
  })
  .catch((e) => {
    console.log(e);
  });
