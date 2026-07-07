import { Request, Response } from "express";
import { getDashboard } from "../services/dashboardService";

export function dashboardController(
  req: Request,
  res: Response
) {
  try {

    const dashboard = getDashboard();

    return res.status(200).json(dashboard);

  } catch (error) {

    console.error("\n========== DASHBOARD ERROR ==========\n");
    console.error(error);
    console.error("\n=====================================\n");

    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard.",
      error: error instanceof Error ? error.message : "Unknown Error",
    });

  }
}