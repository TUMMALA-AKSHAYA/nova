import { Request, Response } from "express";
//import { ExecutiveBriefService } from "../ai/services/executiveBrief.service";
import { ExecutiveBriefService } from "../ai/executive/executiveBrief.service";
const service = new ExecutiveBriefService();

export async function executiveBriefController(
  req: Request,
  res: Response
) {

  const result = await service.generate();

  res.json(result);

}