import Stage from "../models/Stage.js";

export const getStages = (req, res) => {
  Stage.find({}, function (err, stage) {
    res.send(stage);
  });
};

export const addStage = (req, res) => {
  const newStage = new Stage({
    stageNo: req.body.stageNo,
    stageName: req.body.stageName,
    date: req.body.date,
  });

  newStage
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

export const deleteStage = (req, res) => {
  Task.deleteOne({ _id: req.params.stageNo })
    .then(() => {
      res.send("Stage deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};
