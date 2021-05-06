import FarmDataNew from "../models/FarmDataNew.js";

export const getDatesDataNew = (req, res) => {
  const today = Date.parse(req.params.date.substr(0, 10));
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  FarmDataNew.find(
    { uid: req.params.uid, time: { $gte: today, $lt: tomorrow } },
    function (err, farmData) {
      res.send(farmData);
    }
  );
};

export const getFarmDataNew = (req, res) => {
  FarmDataNew.find({ uid: req.params.uid }, function (err, farmData) {
    res.send(farmData);
  });
};

export const addFarmDataNew = (req, res) => {
  const newFarmDataNew = new FarmDataNew({
    uid: req.params.uid,
    soilTemperature: req.body.soilTemperature,
    soilMoisture1: req.body.soilMoisture1,
    soilMoisture2: req.body.soilMoisture2,
    airTemperature: req.body.airTemperature,
    airHumidity: req.body.airHumidity,
    leafWetness: req.body.leafWetness,
    lightIntensity: req.body.lightIntensity,
    time: req.body.time,
  });

  newFarmDataNew
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
