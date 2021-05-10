import mongoose from "mongoose";

const schema = mongoose.Schema;

const taskSchema = new schema({
  uid: { type: String, required: true },
  farmId: { type: String, required: true },
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
