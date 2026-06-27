-- CreateTable
CREATE TABLE "HeaderMapping" (
    "id" TEXT NOT NULL,
    "originalHeader" TEXT NOT NULL,
    "mappedField" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HeaderMapping_pkey" PRIMARY KEY ("id")
);
