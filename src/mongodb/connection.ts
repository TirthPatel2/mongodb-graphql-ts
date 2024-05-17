const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((error: Error) => {
    console.log("Could not connect MongoDB!!!");
    console.log(error);
  });
