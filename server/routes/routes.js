import { Router } from "express";
import {
  userSignup,
  userLogin,
  followRequest,
  getUserDetails,
  getFollowingsPost,
} from "../controller/user-controller.js";
import {
  uploadCode,
  getAllCodes,
  getSingleCode,
  uploadDiscussion,
  uploadKudos,
  getUserPosts,
  getPostDetails,
} from "../controller/code-controller.js";
import { uploadFile } from "../controller/image-controller.js";
import { getImage } from "../controller/image-controller.js";

import upload from "../utils/upload.js";

const router = Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/add_code", uploadCode);
router.post("/upload", upload.single("file"), uploadFile);

router.patch("/upload_discussion", uploadDiscussion);
router.patch("/upload_kudos", uploadKudos);
router.patch("/follow", followRequest);

router.get("/file/:filename", getImage);
router.get("/codes", getAllCodes);
router.get("/code", getSingleCode);
router.get("/user_details", getUserDetails);
router.get("/user_posts", getUserPosts);
router.get("/post_details", getPostDetails);
router.get("/followings", getFollowingsPost);
export default router;
