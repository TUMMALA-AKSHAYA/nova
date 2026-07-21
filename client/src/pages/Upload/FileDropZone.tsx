interface FileDropZoneProps {
  file: File | null;
  disabled?: boolean;
  error?: string;
  onFileSelect: (file: File | null) => void;
}

export default function FileDropZone({
  file,
  disabled = false,
  error,
  onFileSelect,
}: FileDropZoneProps) {
  const inputId = "inventory-upload";

  function handleFiles(files: FileList | null) {
    if (disabled) return;

    onFileSelect(files?.[0] ?? null);
  }

  return (
    <label
      htmlFor={inputId}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        event.preventDefault();
        handleFiles(event.dataTransfer.files);
      }}
      className={`block rounded-2xl border-2 border-dashed p-8 transition ${
        disabled
          ? "cursor-not-allowed border-slate-800 bg-slate-900/60 opacity-70"
          : "cursor-pointer border-slate-700 bg-slate-900 hover:border-blue-500 hover:bg-slate-900/80"
      } ${error ? "border-red-500/70" : ""}`}
    >
      <input
        id={inputId}
        type="file"
        accept=".csv,text/csv"
        disabled={disabled}
        className="sr-only"
        onChange={(event) => {
          handleFiles(event.target.files);
          event.target.value = "";
        }}
      />

      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-2xl text-blue-300">
          ↑
        </div>

        <div className="mt-4 text-lg font-semibold text-slate-100">
          {file ? file.name : "Choose a CSV file"}
        </div>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
          Drag and drop your inventory CSV here, or click to browse.
        </p>

        {file && (
          <p className="mt-3 rounded-full bg-emerald-950 px-3 py-1 text-sm text-emerald-300">
            {(file.size / 1024).toFixed(1)} KB selected
          </p>
        )}
      </div>
    </label>
  );
}
