const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

export interface UploadResponse {
  success: boolean;
  message: string;
  totalProducts: number;
  mappedHeaders: Record<string, string>;
  preview: unknown[];
}

interface UploadErrorResponse {
  error?: string;
  message?: string;
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
    let errorMessage = "Upload failed.";

    try {
      const payload =
        (await response.json()) as UploadErrorResponse;

      errorMessage =
        payload.error || payload.message || errorMessage;
    } catch {
      // Keep the default error when the server returns an empty response.
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
