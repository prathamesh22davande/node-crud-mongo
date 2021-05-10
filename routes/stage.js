import express from "express";

import {
  getStages,
  addStage,
  deleteStage,
  updateStage,
} from "../controllers/stage.js";

const router = express.Router();

router.get("/:uid/:farmId", getStages);

router.post("/:uid", addStage);

router.patch("/:uid/:farmId/:stageNo", updateStage);

router.delete("/:uid/:farmId/:stageNo", deleteStage);

export default router;
