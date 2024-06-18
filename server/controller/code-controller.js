import CodePost from "../models/code_post.js";

export const uploadCode = async (req, res) => {
  try {
    const userCodePost = {
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
