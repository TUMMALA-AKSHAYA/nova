import { useEffect, useRef, useState } from "react";
import BusinessSnapshot from "./BusinessSnapshot";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import WelcomeScreen from "./WelcomeScreen";
import ThinkingIndicator from "./ThinkingIndicator";

import { sendMessage } from "../../services/chatService";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function Copilot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  const hasConversation = messages.some(
    (message) => message.role === "user"
  );

  async function handleSend(message: string) {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsThinking(true);

    try {
      const response = await sendMessage(message);

      const aiContent = `
# 📋 Summary

${response.summary}

---

# 📊 Analysis

${response.analysis}

---

# 🔍 Reasoning

${response.reasoning}

---

# 📌 Evidence

${response.evidence.map((item) => `- ${item}`).join("\n")}

---

# ✅ Recommended Actions

${response.actions.map((item) => `- ${item}`).join("\n")}

---

# ⚠️ Risks

${response.risks.map((item) => `- ${item}`).join("\n")}

---

# 💡 Additional Insights

${response.insights.map((item) => `- ${item}`).join("\n")}

---

**Confidence:** ${response.confidence}%
`;

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: aiContent,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "❌ Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <div className="flex h-[80vh] flex-col">
      {/* Header */}

      <div className="mb-6">
        <h1 className="text-4xl font-bold">
          🤖 NOVA AI
        </h1>

        <p className="mt-2 text-slate-400">
          Your AI Business Copilot
        </p>

        <div className="mt-4 flex gap-3 text-sm">
          <div className="rounded-full bg-emerald-900 px-4 py-2 text-emerald-300">
            Inventory Connected
          </div>

          <div className="rounded-full bg-blue-900 px-4 py-2 text-blue-300">
            AI Ready
          </div>
        </div>
      </div>

      {/* Chat */}

      //<div className="flex-1 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div className="flex flex-1 gap-6">

    <div className="flex-1 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-6">

        {/* Existing chat code stays exactly the same */}

    </div>

    <div className="w-80">

        <BusinessSnapshot />

    </div>

</div>
        {!hasConversation ? (
          <WelcomeScreen
            onPromptClick={handleSend}
          />
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}

            {isThinking && <ThinkingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}

      <div className="mt-4">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}