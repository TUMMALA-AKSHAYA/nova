interface Props {
  onPromptClick: (prompt: string) => void;
}

const prompts = [
  "📦 What should I reorder today?",
  "📈 Why is my Business Health low?",
  "💰 Where am I losing money?",
  "📊 Give me today's executive summary",
];

export default function WelcomeScreen({
  onPromptClick,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="text-6xl mb-6">🤖</div>

      <h2 className="text-4xl font-bold mb-4">
        NOVA AI
      </h2>

      <p className="text-slate-400 max-w-xl mb-8">
        Your AI Business Copilot.

        Analyze inventory, improve profitability,
        reduce stockouts and answer any business question.
      </p>

      <div className="grid gap-3 w-full max-w-xl">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onPromptClick(prompt)}
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-left hover:bg-slate-700 transition"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}