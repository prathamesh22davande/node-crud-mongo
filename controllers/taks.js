import Task from "../models/Task.js";

export const getTasks = (req, res) => {
  Task.find({ uid: req.params.uid }, function (err, task) {
    res.send(task);
  });
};

export const addTask = (req, res) => {
  const newTask = new Task({
    uid: req.params.uid,
    taskName: req.body.taskName,
    taskDescription: req.body.taskDescription,
    date: req.body.date,
  });

  newTask
    .save()
    .then((document) => {
      console.log("data inserted");
      res.json({
        state: true,
        msg: "data inserted successully",
        document: document,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

export const deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("Task deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};
