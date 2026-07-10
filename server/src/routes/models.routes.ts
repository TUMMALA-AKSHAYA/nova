import { Router } from "express";
import { listModelsController } from "../controllers/models.controller";

const router = Router();

router.get("/", listModelsController);

export default router;