import mongoose from "mongoose";
const schema = mongoose.Schema;

const farmDataSchema = new schema({
  temperature: { type: String, required: true },
  lightIntensity: { type: String, required: true },
  moisture: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const FarmData = mongoose.model("FarmData", farmDataSchema);

export default FarmData;
