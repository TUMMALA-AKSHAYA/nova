import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env";

const client = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

export async function listModelsController(
  req: Request,
  res: Response
) {
  try {
    const models = await client.models.list();

    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}