import express from "express";
import { createOrdreItem, getOrdreItems } from "../controller/Ordre_itemsController.js";
// ordres_Items Routes 
const router = new express.Router();
router.post("/",createOrdreItem);
router.get("/",getOrdreItems);
export default router;