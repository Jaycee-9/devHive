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
  user: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
  },
  kudos: {
    type: String,
  },
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
  openDiscussion: {
    type: [
      {
        user: {
          type: String,
        },
        comment: {
          type: String,
        },
      },
    ],
    default: [],
  },
  createDate: { type: Date, default: Date.now },
});

const codePost = mongoose.model("codePost", codePostSchema);
export default codePost;
