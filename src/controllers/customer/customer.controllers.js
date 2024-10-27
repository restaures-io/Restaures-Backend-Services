import { Router } from "express";

const router = Router();

import auth from "./auth.customer.controller.js";
router.use(auth);

export default router;
