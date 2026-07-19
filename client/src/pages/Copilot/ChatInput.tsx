import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text.trim());
    setText("");
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-lg">
      <div className="flex items-end gap-3">
        <textarea
          rows={1}
          className="max-h-40 min-h-[48px] flex-1 resize-none bg-transparent p-2 text-slate-100 outline-none placeholder:text-slate-500"
          placeholder="Ask NOVA anything about your business..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />

        <button
          onClick={send}
          disabled={!text.trim()}
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ↑
        </button>
      </div>

      <div className="mt-2 text-center text-xs text-slate-500">
        Press <b>Enter</b> to send • <b>Shift + Enter</b> for a new line
      </div>
    </div>
  );
}