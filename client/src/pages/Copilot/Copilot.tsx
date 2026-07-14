import { useState } from "react";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

import { sendMessage } from "../../services/chatService";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Copilot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm NOVA AI COO. Ask me anything about your inventory or business.",
    },
  ]);

  async function handleSend(message: string) {
    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    try {
      const response = await sendMessage(message);

      const aiMessage = `
📋 Summary
${response.summary}

💰 Business Impact
${response.businessImpact}

✅ Recommendation
${response.recommendation}

📊 Confidence
${response.confidence}%

📌 Evidence
${response.evidence.map((item) => `• ${item}`).join("\n")}
`;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiMessage,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    }
  }

  return (
    <div className="flex h-[80vh] flex-col">

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          AI Copilot
        </h1>

        <p className="text-slate-400">
          Your AI Chief Operating Officer
        </p>
      </div>

      <div className="flex-1 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}

      </div>

      <div className="mt-4">
        <ChatInput onSend={handleSend} />
      </div>

    </div>
  );
}