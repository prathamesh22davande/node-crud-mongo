import express from "express";

import {
  getStages,
  addStage,
  deleteStage,
  updateStage,
} from "../controllers/stage.js";

const router = express.Router();

router.get("/:uid", getStages);

router.post("/:uid", addStage);

router.patch("/:uid/:stageNo", updateStage);

router.delete("/:uid/:stageNo", deleteStage);

export default router;
