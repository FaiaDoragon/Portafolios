import { Router } from "express";
import { homePage } from "../controllers/portafolios.js";

const router = Router();

router.get('/', homePage )

export default router;
