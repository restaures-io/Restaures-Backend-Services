import { Router } from "express";

const router = Router();

import auth from "./auth.restaurant.controller.js";
import menu from "./menu.restaurant.controller.js";
router.use(auth);
router.use(menu);

export default router;
