import express from "express";

import {
  getStages,
  addStage,
  deleteStage,
  updateStage,
} from "../controllers/stage.js";

const router = express.Router();

router.get("/", getStages);

router.post("/", addStage);

router.patch("/:stageNo", updateStage);

router.delete("/:stageNo", deleteStage);

export default router;
