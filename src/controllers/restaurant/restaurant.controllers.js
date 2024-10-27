import { Router } from "express";

const router = Router();

import auth from "./auth.restaurant.controller.js";
router.use(auth);

export default router;
