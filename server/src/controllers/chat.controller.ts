import { Request, Response } from "express";
import { AIChatService } from "../ai/services/aiChat.service";

console.log("🔥 CHAT CONTROLLER LOADED");

const aiChatService = new AIChatService();

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    console.log("🔥 CHAT ENDPOINT HIT");
    console.log("Request Body:", req.body);

    const message = req.body?.message;

    if (typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const answer = await aiChatService.chat(message);

    return res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("==================================");
    console.error("CHAT ERROR");
    console.error(error);
    console.error("==================================");

    return res.status(500).json({
      success: false,
      message: "Failed to process chat.",
    });
  }
}