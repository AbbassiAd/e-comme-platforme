// ordreRoutes.js

import express from "express";
import { createOrdre, getOrdre } from "../controller/OrdreController.js";

const router = express.Router();


router.options("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/", createOrdre);
router.get("/", getOrdre);

export default router;
