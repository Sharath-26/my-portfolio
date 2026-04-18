import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const SUGGESTIONS = [
  "What's Sharath's experience?",
  "What tech stack does he use?",
  "Is he open to new roles?",
  "Tell me about his projects",
];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm Sharath's AI assistant. Ask me anything about his experience, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history }),
      });
      const data = await res.json();
      const reply = data.response || "Sorry, I couldn't get a response.";

      setHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: userText }] },
        { role: "model", parts: [{ text: reply }] },
      ]);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat_widget">
      {open && (
        <div className="chat_box">
          <div className="chat_header">
            <div className="chat_header_info">
              <span className="chat_status_dot"></span>
              <span>Ask about Sharath</span>
            </div>
            <button className="chat_close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chat_messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat_bubble chat_bubble--${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chat_bubble chat_bubble--model">
                <span className="chat_typing">
                  <span></span><span></span><span></span>
                </span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="chat_suggestions">
              {SUGGESTIONS.map((s, i) => (
                <button key={i} className="chat_suggestion" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="chat_input_row">
            <input
              ref={inputRef}
              className="chat_input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="chat_send"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button
        className={`chat_fab ${open ? "chat_fab--open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Chat with Sharath's AI assistant"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};
