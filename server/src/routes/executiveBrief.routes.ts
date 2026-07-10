import { Router } from "express";
import { executiveBriefController } from "../controllers/executiveBrief.controller";

const router = Router();

router.get("/", executiveBriefController);

export default router;