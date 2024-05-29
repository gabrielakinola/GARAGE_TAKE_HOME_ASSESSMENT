import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/blog.controller";

const router = Router();

router.post("/", createPost);

router.get("/", getPosts);

router.get("/:postId", getPost);

router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

export default router;
