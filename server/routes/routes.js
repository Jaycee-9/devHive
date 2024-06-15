import { Router } from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import { uploadCode } from "../controller/code-controller.js";

const router = Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/add_code", uploadCode);

export default router;
