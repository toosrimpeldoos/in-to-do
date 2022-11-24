const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Task = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: "tasks",
  }
);

module.exports = mongoose.model("Task", Task);
