import express from "express";

import { getTasks, addTask, deleteTask } from "../controllers/taks.js";

const router = express.Router();

router.get("/:uid/:farmId", getTasks);

router.post("/:uid/:farmId", addTask);

router.delete("/:id", deleteTask);

export default router;
