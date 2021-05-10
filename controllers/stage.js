import Stage from "../models/Stage.js";
import Task from "../models/Task.js";

export const getStages = (req, res) => {
  Stage.find(
    { uid: req.params.uid, farmId: req.params.farmId }
    // function (err, stage) {
    //   res.send(stage);
    // }
  )
    .then((document) => {
      res.send(document);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const addStage = (req, res) => {
  const newStage = new Stage({
    uid: req.params.uid,
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

export const updateStage = (req, res) => {
  Stage.updateOne(
    {
      uid: req.params.uid,
      farmId: req.params.farmId,
      stageNo: req.params.stageNo,
    },
    { date: req.body.date }
  )
    .then(() => {
      res.send("Stage Updated");
    })
    .catch(() => {
      res.send(err);
    });
};

export const deleteStage = (req, res) => {
  Stage.deleteOne({
    uid: req.params.uid,
    farmId: req.params.farmId,
    stageNo: req.params.stageNo,
  })
    .then(() => {
      res.send("Stage deleted");
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};
