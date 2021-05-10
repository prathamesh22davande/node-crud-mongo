import mongoose from "mongoose";

const schema = mongoose.Schema;

const stageSchema = new schema({
  uid: { type: String, required: true },
  farmId: { type: String, required: true },
  stageNo: { type: String, required: true },
  stageName: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Stage = mongoose.model("Stage", stageSchema);

export default Stage;
