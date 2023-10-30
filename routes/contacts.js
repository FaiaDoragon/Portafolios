import { Router } from "express";
import { conctactsPage } from "../controllers/portafolios.js";

const router = Router();

router.get('/', conctactsPage )

export default router;