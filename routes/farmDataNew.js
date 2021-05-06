import express from "express";

import {
  getFarmDataNew,
  addFarmDataNew,
  getDatesDataNew,
} from "../controllers/farmDataNew.js";

const router = express.Router();

//get all data
router.get("/:uid", getFarmDataNew);

//get particular date's data
router.get("/:uid/:date", getDatesDataNew);

router.post("/:uid", addFarmDataNew);

export default router;
