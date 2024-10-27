import { Router } from "express";
import { uploadFile } from "../../handlers/common/upload.file.handler.js";
import auth from "../../middlewares/auth.js";
const router = Router();

router.route("/upload-file").post(auth, uploadFile); //done

export default router;
