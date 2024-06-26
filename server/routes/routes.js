import { Router } from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  uploadCode,
  getAllCodes,
  getSingleCode,
  uploadDiscussion,
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

router.get("/file/:filename", getImage);
router.get("/codes", getAllCodes);
router.get("/code", getSingleCode);
export default router;
