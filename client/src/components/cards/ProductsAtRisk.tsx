import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface ProductAtRisk {
  name: string;
  status: string;
  daysLeft: number;
  revenueRisk: number;
}

interface ProductsAtRiskProps {
  products: ProductAtRisk[];
}

export default function ProductsAtRisk({
  products,
}: ProductsAtRiskProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Products At Risk
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Inventory that requires attention.
        </p>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 p-4"
          >
            <div>
              <h3 className="font-medium">
                {product.name}
              </h3>

              <p className="text-sm text-slate-500">
                {product.daysLeft} days remaining
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Badge>{product.status}</Badge>

              <span className="font-semibold">
                ₹{product.revenueRisk}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}