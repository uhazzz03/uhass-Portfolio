import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { suggestedQuestions, getChatResponse } from "../data/chatResponses";

function FloatingChatbot({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I am Trae, a portfolio assistant. Ask me anything :)",
    },
  ]);

  function sendMessage(customMessage) {
    const messageToSend = customMessage || input;

    if (!messageToSend.trim()) return;

    const userMessage = {
      sender: "user",
      text: messageToSend,
    };

    const response = getChatResponse(messageToSend);

    if (response.tab) {
        setActiveTab(response.tab);
    }

    const botMessage = {
        sender: "bot",
        text: response.text,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      botMessage,
    ]);

    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex h-130 w-87.5 flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div>
              <h3 className="font-bold text-white">Portfolio Assistant</h3>
              <p className="text-xs text-slate-400">Rule-based chatbot</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-300 transition hover:bg-white/20 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-white/10 text-slate-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.slice(0, 3).map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
              />

              <button
                type="submit"
                className="rounded-full bg-cyan-400 p-3 text-slate-950 transition hover:bg-cyan-300"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-2xl transition hover:scale-105 hover:bg-cyan-300"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

export default FloatingChatbot;