import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { uploadInventory } from "../../services/uploadService";

export default function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload() {
    if (!file) {
      setMessage("Please choose a CSV file.");
      return;
    }

    try {
      setLoading(true);

      const result = await uploadInventory(file);

      setMessage(
        `✅ Uploaded ${result.totalProducts} products successfully.`
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl">

      <h1 className="text-3xl font-bold">
        Upload Inventory
      </h1>

      <p className="mt-2 text-slate-400">
        Upload a CSV file to refresh NOVA's intelligence.
      </p>

      <div className="mt-8 rounded-xl border-2 border-dashed border-slate-700 p-10">

        <input
          type="file"
          accept=".csv"
          onChange={(e) =>
            setFile(e.target.files?.[0] ?? null)
          }
        />

        {file && (
          <p className="mt-4 text-green-400">
            Selected: {file.name}
          </p>
        )}

      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Inventory"}
      </button>

      {message && (
        <p className="mt-6">
          {message}
        </p>
      )}

    </div>
  );
}