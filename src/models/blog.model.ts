import { Types, Schema, model } from "mongoose";

interface IBlog {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const Blog = model<IBlog>("blog", blogSchema);

export default Blog;
