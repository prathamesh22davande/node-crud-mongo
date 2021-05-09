import express from "express";

import {
  getFarm,
  addFarm,
  deleteFarm,
  getUserFarms,
} from "../controllers/farm.js";

const router = express.Router();

//Get Farms for particular user
router.get("/:uid", getUserFarms);

//Get Particular Farm
router.get("/:uid/:farmId", getFarm);

//Add Farm to User
router.post("/:uid", addFarm);

//Delete the Farm
router.delete("/:farmId", deleteFarm);

export default router;
