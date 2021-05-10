import Farm from "../models/Farm.js";
import Stage from "../models/Stage.js";

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
      console.log(document);
      const arr = [
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "1",
          stageName: "Foundation Pruning",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "2",
          stageName: "Breaking Bud",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "3",
          stageName: "Shoot Development",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "4",
          stageName: "Subcane",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "5",
          stageName: "Cane Maturity",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "6",
          stageName: "Fruit Pruning",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "7",
          stageName: "Breaking Bud",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "8",
          stageName: "Shoot Development",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "9",
          stageName: "Begining of Bloom",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "10",
          stageName: "Fruit Set",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "11",
          stageName: "Berry Development",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "12",
          stageName: "Begining Verasion",
          date: "2000-03-02T17:30:00.000Z",
        },
        {
          uid: document.uid,
          farmId: document._id,
          stageNo: "13",
          stageName: "Harvest",
          date: "2000-03-02T17:30:00.000Z",
        },
      ];
      //Add Stages with default date
      Stage.insertMany(arr)
        .then((res) => {})
        .catch((err) => {
          res.send(err);
          return;
        });

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
