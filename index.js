import express from "express";
import bodyParser from "body-parser";

import usersRoute from "./routes/users.js";
import farmRoute from "./routes/farmData.js";
import tasksRoute from "./routes/task.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/users", usersRoute);
app.use("/farmData", farmRoute);
app.use("/tasks", tasksRoute);

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
