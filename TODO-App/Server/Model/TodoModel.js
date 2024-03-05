const mongoose = require("mongoose");

const TodoModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    // required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

const TodoData = mongoose.model("TodoList", TodoModel);

module.exports = TodoData;
