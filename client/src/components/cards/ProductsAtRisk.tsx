import Card from "../ui/Card";
import Badge from "../ui/Badge";

const products = [
  {
    name: "Coffee Beans",
    daysLeft: 2,
    risk: "₹2,400",
    status: "Critical",
  },
  {
    name: "Milk",
    daysLeft: 5,
    risk: "₹850",
    status: "Medium",
  },
  {
    name: "Rice",
    daysLeft: 120,
    risk: "-",
    status: "Healthy",
  },
];

export default function ProductsAtRisk() {
  return (
    <Card>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Products At Risk
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Inventory requiring immediate attention.
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

            <div className="flex items-center gap-4">

              <Badge>
                {product.status}
              </Badge>

              <span className="font-semibold">
                {product.risk}
              </span>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}