import { Router } from "express";
import { upload } from "../middleware/upload";
import { uploadCSV } from "../controllers/upload.controller";

const router = Router();

router.post("/", upload.single("file"), uploadCSV);

export default router;