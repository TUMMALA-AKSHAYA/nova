interface Props {
  onSelect: (text: string) => void;
}

const prompts = [
  "Which products should I reorder?",
  "How can I improve profit?",
  "Show today's executive summary",
  "Which products are overstocked?",
];

export default function SuggestedPrompts({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="rounded-full border border-slate-700 px-4 py-2 hover:bg-slate-800 transition"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}