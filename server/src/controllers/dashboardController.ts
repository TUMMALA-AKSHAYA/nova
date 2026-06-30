import { Request, Response } from "express";

import { getDashboard } from "../services/dashboardService";

export function dashboardController(
  req: Request,
  res: Response
) {

  try {

    const dashboard = getDashboard();

    res.status(200).json(dashboard);

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Failed to load dashboard."

    });

  }

}