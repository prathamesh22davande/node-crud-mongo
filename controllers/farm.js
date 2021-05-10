import Farm from "../models/Farm.js";

export const getFarm = (req, res) => {
  if (req.params.farmId == "true") {
    Farm.findOne({ uid: req.params.uid, isSelected: true })
      .then((farm) => {
        res.send(farm._id);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    Farm.findOne({ _id: req.params.farmId, uid: req.params.uid })
      .then((farm) => {
        res.send(farm);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

export const getUserFarms = (req, res) => {
  Farm.find({ uid: req.params.uid })
    .then((farm) => {
      res.send(farm);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const addFarm = (req, res) => {
  const newFarm = new Farm({
    uid: req.params.uid,
    farmName: req.body.farmName,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    area: req.body.area,
    date: req.body.date,
  });

  newFarm
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

export const deleteFarm = (req, res) => {
  Farm.deleteOne({ _id: req.params.farmId })
    .then(() => {
      res.send("Farm deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

///:uid/:farmId/:isSet

export const setIsSelected = (req, res) => {
  Farm.updateOne(
    { uid: req.params.uid, _id: req.params.farmId },
    { isSelected: req.params.isSet }
  )
    .then(() => {
      res.send("Farm isSelected Updated");
    })
    .catch(() => {
      res.send(err);
    });
};
