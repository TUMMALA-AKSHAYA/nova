import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-4xl gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-2xl px-5 py-4 shadow-lg ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-800 text-slate-100"
          }`}
        >
          {!isUser && (
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">
              NOVA AI
            </div>
          )}

          {isUser ? (
            <p className="whitespace-pre-wrap">
              {content}
            </p>
          ) : (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}