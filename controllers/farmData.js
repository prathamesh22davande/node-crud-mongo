import FarmData from "../models/FarmData.js";

export const getFarmData = (req, res) => {
  FarmData.find({}, function (err, farmData) {
    res.send(farmData);
  });
};

export const addFarmData = (req, res) => {
  const newFarmData = new FarmData({
    temperature: req.body.temperature,
    lightIntensity: req.body.lightIntensity,
    moisture: req.body.moisture,
    time: req.body.time,
  });

  newFarmData
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
