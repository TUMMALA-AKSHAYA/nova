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
        className={`flex max-w-4xl items-start gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold shadow-sm ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-xl px-5 py-4 shadow-lg ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-800/90 text-slate-100"
          }`}
        >
          {!isUser && (
            <div className="mb-3 flex items-center gap-2 border-b border-slate-700/70 pb-3 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              NOVA AI
            </div>
          )}

          {isUser ? (
            <p className="whitespace-pre-wrap text-sm leading-6">
              {content}
            </p>
          ) : (
            <div className="max-w-none text-sm leading-7 text-slate-200">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="mt-6 first:mt-0 border-b border-slate-700 pb-2 text-base font-semibold text-white">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-300">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mt-3 first:mt-0 text-slate-200">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mt-3 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex gap-2 text-slate-300">
                      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{children}</span>
                    </li>
                  ),
                  hr: () => (
                    <hr className="my-5 border-slate-700/80" />
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-white">
                      {children}
                    </strong>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
