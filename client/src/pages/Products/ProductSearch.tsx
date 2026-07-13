interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          focus:border-blue-500
          focus:outline-none
        "
      />
    </div>
  );
}