import { useEffect, useState } from "react";

import Badge from "../../components/ui/Badge";
import ProductSearch from "./ProductSearch";
import ProductDetailsDrawer from "./ProductDetailsDrawer";

import { getProducts } from "../../services/productService";
import type { InventoryInsight } from "../../types/inventoryInsight";

export default function Products() {
  const [products, setProducts] = useState<InventoryInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<InventoryInsight | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        console.log("Products:", data);
        setProducts(data);
      } catch (err) {
        console.error("Products Error:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();

    return (
      product.productName.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <div className="p-10 text-slate-500">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-slate-500">
          Inventory Intelligence
        </p>
      </div>

      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      <div className="overflow-hidden rounded-xl border border-slate-700">

        <table className="w-full">

          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Health</th>
              <th className="p-4 text-left">Days Left</th>
              <th className="p-4 text-left">Revenue Risk</th>
              <th className="p-4 text-left">Decision</th>
            </tr>
          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.productName}
                onClick={() => setSelectedProduct(product)}
                className="border-t cursor-pointer hover:bg-slate-800 transition"
              >

                <td className="p-4 font-medium">
                  {product.productName}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  {product.inventory.quantity} units
                </td>

                <td className="p-4">
                  <Badge
                    variant={
                      product.health.status === "Critical"
                        ? "danger"
                        : product.health.status === "Healthy"
                        ? "success"
                        : "warning"
                    }
                  >
                    {product.health.status}
                  </Badge>
                </td>

                <td className="p-4">
                  {product.health.daysUntilStockout}
                </td>

                <td className="p-4 font-semibold">
                  ₹{product.financial.estimatedRevenueLoss.toLocaleString()}
                </td>

                <td className="p-4">
                  <Badge
                    variant={
                      product.decision.action === "REORDER"
                        ? "danger"
                        : "default"
                    }
                  >
                    {product.decision.action.replace("_", " ")}
                  </Badge>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <ProductDetailsDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}