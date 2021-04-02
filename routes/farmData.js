import express from "express";

import { getFarmData, addFarmData } from "../controllers/farmData.js";

const router = express.Router();

router.get("/", getFarmData);

router.post("/", addFarmData);

export default router;
