import { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Alex. I help businesses figure out which processes are costing them the most time and money. What kind of business do you run?",
};

const TEAL = "hsl(186 100% 27%)";
const DARK = "hsl(222 47% 11%)";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Tooltip after 60s of no interaction
  useEffect(() => {
    if (hasInteracted || open) {
      setShowTooltip(false);
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
      return;
    }

    tooltipTimerRef.current = setTimeout(() => {
      if (!open && !hasInteracted) setShowTooltip(true);
    }, 60000);

    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    };
  }, [hasInteracted, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setHasInteracted(true);
    setShowTooltip(false);

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      const reply = data.reply || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. You can reach us directly at (281) 699-8318.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 z-50 flex flex-col overflow-hidden shadow-2xl rounded-2xl
                     w-[calc(100vw-2rem)] sm:w-[380px] h-[85vh] sm:h-[520px]"
          style={{ background: "white", border: `1px solid hsl(186 100% 27% / 0.2)` }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: DARK }}
          >
            <div className="flex items-center gap-2.5">
              {/* Avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: TEAL }}
              >
                A
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">
                  Alex · AI Advisor
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400 text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: "#f8fafc" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-2 mt-0.5"
                    style={{ background: TEAL }}
                  >
                    A
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "text-white rounded-tr-sm"
                      : "text-gray-800 rounded-tl-sm bg-white border border-gray-100"
                  }`}
                  style={msg.role === "user" ? { background: TEAL } : {}}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-2 mt-0.5"
                  style={{ background: TEAL }}
                >
                  A
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-4 py-3 flex-shrink-0 border-t border-gray-100"
            style={{ background: "white" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={loading}
              className="flex-1 text-sm rounded-xl px-4 py-2.5 outline-none border border-gray-200 focus:border-transparent transition-all disabled:opacity-50 bg-gray-50 focus:bg-white"
              style={{ boxShadow: `0 0 0 0px ${TEAL}` }}
              onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px hsl(186 100% 27% / 0.3)`)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 hover:opacity-90 active:scale-95"
              style={{ background: TEAL }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && !open && (
        <div
          className="fixed bottom-24 right-4 z-50 pointer-events-none"
        >
          <div
            className="bg-white text-gray-800 text-sm px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap animate-fade-in"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
          >
            👋 Got a process eating your team's time?
          </div>
          {/* Tooltip arrow */}
          <div className="flex justify-end pr-5">
            <div className="w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5 shadow-sm" />
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
            setShowTooltip(false);
            setHasInteracted(true);
          }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all hover:scale-105 active:scale-95 focus:outline-none"
          style={{ background: TEAL }}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {/* Pulse ring (only when closed) */}
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: TEAL }}
            />
          )}

          {/* Icon */}
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
