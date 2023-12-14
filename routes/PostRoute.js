import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
  addComment,
} from "../controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.post("/:id/comment", addComment);

export default router;
