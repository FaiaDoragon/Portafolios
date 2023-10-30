import { Router } from "express";
import { projectsPage } from "../controllers/portafolios.js";

const router = Router();

router.get('/', projectsPage )

export default router;