import type { InventoryInsight } from "../../types/inventoryInsight";
import Badge from "../../components/ui/Badge";

interface Props {
  product: InventoryInsight | null;
  onClose: () => void;
}

export default function ProductDetailsDrawer({
  product,
  onClose,
}: Props) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">

      <div className="w-[520px] h-screen overflow-y-auto bg-slate-900 border-l border-slate-700 p-8">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">
              {product.productName}
            </h2>

            <p className="text-slate-400">
              {product.category}
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="mt-8 space-y-6">

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="font-semibold mb-4">
              Inventory
            </h3>

            <p>Quantity : {product.inventory.quantity}</p>

            <p>Daily Sales : {product.inventory.averageDailySales}</p>

            <p>Lead Time : {product.inventory.leadTimeDays} days</p>

            <p>Reorder Level : {product.inventory.reorderLevel}</p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="font-semibold mb-4">
              Health
            </h3>

            <Badge
              variant={
                product.health.status === "Critical"
                  ? "danger"
                  : "success"
              }
            >
              {product.health.status}
            </Badge>

            <p className="mt-4">
              Health Score : {product.health.healthScore}
            </p>

            <p>
              Days Until Stockout : {product.health.daysUntilStockout}
            </p>

            <p className="mt-2 text-slate-400">
              {product.health.recommendation}
            </p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="font-semibold mb-4">
              Financial Impact
            </h3>

            <p>
              Revenue Risk :
              ₹{product.financial.estimatedRevenueLoss}
            </p>

            <p>
              Profit Risk :
              ₹{product.financial.estimatedProfitLoss}
            </p>

            <p>
              Margin :
              ₹{product.financial.marginPerUnit}
            </p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="font-semibold mb-4">
              AI Decision
            </h3>

            <Badge
              variant={
                product.decision.action === "REORDER"
                  ? "danger"
                  : "default"
              }
            >
              {product.decision.action}
            </Badge>

            <p className="mt-4">
              Recommended Qty :
              {product.decision.recommendedOrderQuantity}
            </p>

            <p className="mt-2 text-slate-400">
              {product.decision.reason}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}