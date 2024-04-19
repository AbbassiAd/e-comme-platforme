import express from "express";
const router = express.Router();
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddelwares.js";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
} from "../controller/categoryController.js";

router
  .route("/")
  .post(authenticate, authorizeAdmin, createCategory)
  .get(authenticate, authorizeAdmin, getAllCategories);

router
  .route("/:id")
  .put(authenticate, authorizeAdmin, updateCategory)
  .delete(authenticate, authorizeAdmin, deleteCategory)
  .get(authenticate, authorizeAdmin, getCategoryById);

export default router;
