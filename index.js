import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import farmRoute from "./routes/farm.js";
import stageRoute from "./routes/stage.js";
import usersRoute from "./routes/users.js";
import farmDataRoute from "./routes/farmData.js";
import farmRouteNew from "./routes/farmDataNew.js";
import tasksRoute from "./routes/task.js";
import reportRoute from "./routes/report.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/users", usersRoute);
app.use("/farmData", farmDataRoute);
app.use("/farmDataNew", farmRouteNew);
app.use("/tasks", tasksRoute);
app.use("/stage", stageRoute);
app.use("/report", reportRoute);
app.use("/farm", farmRoute);

app.get("/", (req, res) => {
  res.send("Farm Monitoring System");
});

try {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connection established");
} catch (e) {
  console.log(e);
}
// if (connection) {
//   console.log("database connected");
// } else {
//   console.log("database connection error");
// }

app.listen(PORT, () => console.log(`Server is listening on PORT : ${PORT}`));
