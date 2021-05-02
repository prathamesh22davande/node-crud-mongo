import FarmData from "../models/FarmData.js";

export const getDatesData = (req, res) => {
  const today = Date.parse(req.params.date.substr(0, 10));
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  FarmData.find(
    { uid: req.params.uid, time: { $gte: today, $lt: tomorrow } },
    function (err, farmData) {
      res.send(farmData);
    }
  );
};

export const getFarmData = (req, res) => {
  FarmData.find({ uid: req.params.uid }, function (err, farmData) {
    res.send(farmData);
  });
};

export const addFarmData = (req, res) => {
  const newFarmData = new FarmData({
    uid: req.params.uid,
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
