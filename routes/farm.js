import express from "express";

import {
  getFarm,
  addFarm,
  deleteFarm,
  getUserFarms,
  setIsSelected,
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

//Set iSselected
router.put("/:uid/:farmId/:isSet", setIsSelected);

export default router;
