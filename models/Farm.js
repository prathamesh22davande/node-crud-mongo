import mongoose from "mongoose";

const schema = mongoose.Schema;

const farmSchema = new schema({
  uid: { type: String, required: true },
  isSelected: { type: Boolean, default: false },
  farmName: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
  area: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
