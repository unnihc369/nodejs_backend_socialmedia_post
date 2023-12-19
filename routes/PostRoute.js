import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
  addComment,
} from "../controllers/PostController.js";
import verifyToken from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", verifyToken, createPost);
router.get("/:id", getPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.put("/:id/like", verifyToken, likePost);
router.post("/:id/comment", verifyToken, addComment);

export default router;
