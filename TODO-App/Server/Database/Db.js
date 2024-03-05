const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/TodoApp")
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => console.error(`Database Connection Error : ${error}`));
};

module.exports = { connectToDatabase };
