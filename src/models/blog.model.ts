import { Types, Schema, model } from "mongoose";

interface IBlog {
  title: string;
  content: string;
  author: string;
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
});

const Blog = model<IBlog>("blog", blogSchema);

export default Blog;
