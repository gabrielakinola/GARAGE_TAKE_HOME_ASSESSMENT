import { Request, Response } from "express";
import Blog from "../models/blog.model";
const createPost = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  try {
    const blog = new Blog({ title, content, author });
    if (blog) {
      await blog.save();
      res.status(201).json({ blog });
    }
  } catch (error: any) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ blogs });
  } catch (error: any) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const getPost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const blog = await Blog.findById(postId);
    console.log(blog);
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).json({ blog });
  } catch (error: any) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const updatePost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const { postId } = req.params;
  try {
    const blog = await Blog.findByIdAndUpdate(
      { _id: postId },
      {
        title,
        content,
      },
      { new: true }
    );
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).json({ blog });
  } catch (error: any) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const deletePost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete({ _id: postId });
    if (!blog) {
      return res.status(404).send();
    }
    res.status(204).send();
  } catch (error: any) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

export { createPost, getPosts, getPost, updatePost, deletePost };
