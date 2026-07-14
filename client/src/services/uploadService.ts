const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

export interface UploadResponse {
  success: boolean;
  message: string;
  totalProducts: number;
  mappedHeaders: Record<string, string>;
  preview: unknown[];
}

export async function uploadInventory(
  file: File
): Promise<UploadResponse> {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_BASE_URL}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload failed.");
  }

  return response.json();
}