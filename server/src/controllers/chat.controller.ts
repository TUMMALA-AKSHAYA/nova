import { Request, Response } from "express";
import { AIChatService } from "../ai/services/aiChat.service";

const aiChatService = new AIChatService();

export async function chatController(
  req: Request,
  res: Response
) {

  try {

    console.log("Body:", req.body);

    const message = req.body?.message;

    console.log("Message:", message);

    if (
      typeof message !== "string" ||
      message.trim() === ""
    ) {

      return res.status(400).json({

        success: false,

        message: "Message is required."

      });

    }

    const answer =
      await aiChatService.chat(message);

    return res.json({

      success: true,

      answer

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Failed to process chat."

    });

  }

}