import { PrismaClient } from "@prisma/client";
import { MappingResult } from "../../types/mapping";

const prisma = new PrismaClient();

export async function remember(
  originalHeader: string,
  mappedField: string,
  confidence: number
) {
  return prisma.headerMapping.create({
    data: {
      originalHeader,
      mappedField,
      confidence,
    },
  });
}

export async function recall(
  originalHeader: string
): Promise<MappingResult> {
  const mapping = await prisma.headerMapping.findFirst({
    where: {
      originalHeader,
    },
  });

  if (!mapping) {
    return {
      mappedField: null,
      confidence: 0,
      matchedBy: "learning-memory",
    };
  }

  return {
    mappedField: mapping.mappedField,
    confidence: mapping.confidence,
    matchedBy: "learning-memory",
  };
}