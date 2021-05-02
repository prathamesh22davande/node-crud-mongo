import express from "express";

import {
  getFarmData,
  addFarmData,
  getDatesData,
} from "../controllers/farmData.js";

const router = express.Router();

//get all data
router.get("/:uid", getFarmData);

//get particular date's data
router.get("/:uid/:date", getDatesData);

router.post("/:uid", addFarmData);

export default router;
