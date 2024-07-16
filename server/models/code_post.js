import mongoose from "mongoose";

const codePostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  media: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
  },
  likes: [
    {
      userId: String,
      username: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  repo: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  deployedLinked: {
    type: String,
  },
  discussions: [
    {
      username: String,
      discussion: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createDate: { type: Date, default: Date.now },
});

const codePost = mongoose.model("codePost", codePostSchema);
export default codePost;
