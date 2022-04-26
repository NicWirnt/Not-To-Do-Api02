import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 3,
  },
  hr: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Task", TaskSchema);
