import express from "express";

import { getFarmData, addFarmData } from "../controllers/farmData.js";

const router = express.Router();

router.get("/:uid", getFarmData);

router.post("/:uid", addFarmData);

export default router;
