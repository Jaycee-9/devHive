import CodePost from "../models/code_post.js";
import User from "../models/user.js";
export const uploadCode = async (req, res) => {
  try {
    const userCodePost = {
      userId: req.body.id,
      title: req.body.title,
      caption: req.body.caption,
      media: req.body.media,
      user: req.body.user,
      userImage: req.body.userImage,
      kudos: req.body.kudos,
      repo: req.body.repo,
      tags: req.body.tags,
      deployedLink: req.body.deployedLinked,
      openDiscussion: req.body.openDiscussion,
      createDate: req.body.createDate,
    };

    const newCodePost = new CodePost(userCodePost);
    await newCodePost.save();
    return res.status(200).json({ msg: "Code upload successfully" });
  } catch (error) {
    res.status(500).json({ msg: "error while saving the post" });
  }
};

export const getAllCodes = async (req, res) => {
  try {
    const posts = await CodePost.find({});
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: "error while fetching posts" });
  }
};

export const getSingleCode = async (req, res) => {
  try {
    const codeId = req.query.id;
    const codeDetails = await CodePost.findById({ _id: codeId });
    res.status(200).json(codeDetails);
  } catch (error) {
    res.status(500).json({ msg: "error while fetching code details" });
  }
};

export const uploadDiscussion = async (req, res) => {
  const userId = req.body._id;
  const codeId = req.body.codeId;

  const user = await User.findOne({ _id: userId });
  const code = await CodePost.findOne({ _id: codeId });

  if (!user) {
    return res.status(409).json({ msg: "User not found." });
  }

  if (!code) {
    return res.status(409).json({ msg: "CodePost not found." });
  }

  const discussion = {
    username: user.username,
    userImage: user.userImage,
    discussion: req.body.comment,
  };

  try {
    await CodePost.updateOne(
      { _id: codeId },
      { $push: { discussions: discussion } }
    );

    return res.status(200).json({ msg: "Discussion added successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error." });
  }
};
