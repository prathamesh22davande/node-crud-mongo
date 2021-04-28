import express from "express";

import { getStages, addStage, deleteStage } from "../controllers/stage.js";

const router = express.Router();

router.get("/", getStages);

router.post("/", addStage);

router.delete("/:id", deleteStage);

export default router;
