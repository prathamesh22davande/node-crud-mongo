import mongoose from "mongoose";
const schema = mongoose.Schema;

const farmDataSchemaNew = new schema({
  uid: { type: String, required: true },
  farmId: { type: String, required: true },
  soilTemperature: { type: String, required: true },
  soilMoisture1: { type: String, required: true },
  soilMoisture2: { type: String, required: true },
  airTemperature: { type: String, required: true },
  airHumidity: { type: String, required: true },
  leafWetness: { type: String, required: true },
  lightIntensity: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const FarmDataNew = mongoose.model("FarmDataNew", farmDataSchemaNew);

export default FarmDataNew;
