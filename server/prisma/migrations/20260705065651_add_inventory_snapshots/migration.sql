-- CreateTable
CREATE TABLE "InventorySnapshot" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "uploadedFileName" TEXT NOT NULL,
    "totalProducts" INTEGER NOT NULL,
    "businessHealth" DOUBLE PRECISION NOT NULL,
    "totalRevenueAtRisk" DOUBLE PRECISION NOT NULL,
    "totalProfitAtRisk" DOUBLE PRECISION NOT NULL,
    "totalBlockedCapital" DOUBLE PRECISION NOT NULL,
    "totalWorkingCapitalLocked" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventorySnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventorySnapshotItem" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "sku" TEXT,
    "productName" TEXT NOT NULL,
    "category" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,
    "averageDailySales" DOUBLE PRECISION NOT NULL,
    "reorderLevel" DOUBLE PRECISION NOT NULL,
    "leadTimeDays" INTEGER NOT NULL,
    "daysUntilStockout" DOUBLE PRECISION NOT NULL,
    "inventoryHealth" DOUBLE PRECISION NOT NULL,
    "businessHealthScore" DOUBLE PRECISION NOT NULL,
    "revenueRisk" DOUBLE PRECISION NOT NULL,
    "profitRisk" DOUBLE PRECISION NOT NULL,
    "blockedCapital" DOUBLE PRECISION NOT NULL,
    "workingCapitalLocked" DOUBLE PRECISION NOT NULL,
    "recommendedAction" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventorySnapshotItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InventorySnapshot_organizationId_idx" ON "InventorySnapshot"("organizationId");

-- CreateIndex
CREATE INDEX "InventorySnapshot_createdAt_idx" ON "InventorySnapshot"("createdAt");

-- CreateIndex
CREATE INDEX "InventorySnapshotItem_snapshotId_idx" ON "InventorySnapshotItem"("snapshotId");

-- CreateIndex
CREATE INDEX "InventorySnapshotItem_productName_idx" ON "InventorySnapshotItem"("productName");

-- AddForeignKey
ALTER TABLE "InventorySnapshot" ADD CONSTRAINT "InventorySnapshot_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventorySnapshotItem" ADD CONSTRAINT "InventorySnapshotItem_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "InventorySnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
