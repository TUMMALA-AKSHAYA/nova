import { Request, Response } from "express";
import { getProducts } from "../services/products.service";

export function getProductsController(
  req: Request,
  res: Response
) {
  try {
    const products = getProducts();

    return res.json(products);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to load products.",
    });
  }
}