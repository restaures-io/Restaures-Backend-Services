import { Router } from "express";

const router = Router();

import auth from "./auth.customer.controller.js";
import restaurant from "./restaurant.customer.controller.js";
import enquiry from "./enquiry.customer.controller.js";
router.use(restaurant);
router.use(auth);
router.use(enquiry);

export default router;
