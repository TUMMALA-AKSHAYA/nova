import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <div className="flex gap-3">
      <input
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4"
        placeholder="Ask NOVA anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <button
        onClick={send}
        className="rounded-xl bg-blue-600 px-6"
      >
        Send
      </button>
    </div>
  );
}