import express from "express";

import {
  getFarmDataNew,
  addFarmDataNew,
  getAllFarmDataNew,
  getDatesDataNew,
} from "../controllers/farmDataNew.js";

const router = express.Router();

//get all data
router.get("/:uid", getAllFarmDataNew);

router.get("/:uid/:farmId", getFarmDataNew);

//get particular date's data
router.get("/:uid/:farmId/:date", getDatesDataNew);

router.post("/:uid/:farmId", addFarmDataNew);

export default router;
