import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { uploadInventory } from "../../services/uploadService";
import FileDropZone from "./FileDropZone";

type Status = {
  type: "error" | "success" | "info";
  text: string;
};

function validateInventoryFile(file: File | null): string | null {
  if (!file) {
    return "Please choose a CSV file before uploading.";
  }

  const isCsv =
    file.name.toLowerCase().endsWith(".csv") ||
    file.type === "text/csv" ||
    file.type === "application/vnd.ms-excel";

  if (!isCsv) {
    return "Invalid file type. Upload a CSV file exported from your inventory system.";
  }

  if (file.size === 0) {
    return "This CSV file is empty. Choose a file with inventory rows.";
  }

  return null;
}

export default function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);

  function handleFileSelect(nextFile: File | null) {
    const validationError = validateInventoryFile(nextFile);

    setFile(validationError ? null : nextFile);
    setStatus(
      validationError
        ? {
            type: "error",
            text: validationError,
          }
        : null
    );
  }

  async function handleUpload() {
    if (loading) return;

    const validationError = validateInventoryFile(file);

    if (validationError) {
      setStatus({
        type: "error",
        text: validationError,
      });
      return;
    }

    if (!file) return;

    try {
      setLoading(true);
      setStatus({
        type: "info",
        text: "Uploading and processing your inventory...",
      });

      const result = await uploadInventory(file);

      setStatus({
        type: "success",
        text: `Uploaded ${result.totalProducts} products successfully. Redirecting to dashboard...`,
      });
      setFile(null);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Upload failed. Please try again.",
      });
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

      <div className="mt-8">
        <FileDropZone
          file={file}
          disabled={loading}
          error={status?.type === "error" ? status.text : undefined}
          onFileSelect={handleFileSelect}
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="mt-6 inline-flex min-w-44 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-3">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing...
          </span>
        ) : (
          "Upload Inventory"
        )}
      </button>

      {status && (
        <div
          className={`mt-6 rounded-xl border px-4 py-3 text-sm leading-6 ${
            status.type === "success"
              ? "border-emerald-700 bg-emerald-950 text-emerald-200"
              : status.type === "error"
                ? "border-red-700 bg-red-950 text-red-200"
                : "border-blue-700 bg-blue-950 text-blue-200"
          }`}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.text}
        </div>
      )}

    </div>
  );
}
