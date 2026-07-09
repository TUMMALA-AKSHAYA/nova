import { Request, Response } from "express";
import { AIChatService } from "../ai/services/aiChat.service";

const aiChatService = new AIChatService();

export async function chatController(
  req: Request,
  res: Response
) {
  console.log("STEP 1");

  const message = req.body?.message;

  console.log("STEP 2");

  const answer = await aiChatService.chat(message);

  console.log("STEP 3");

  return res.json({
    success: true,
    answer
  });
}