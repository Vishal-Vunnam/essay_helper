"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/tiptap-ui-primitive/button";
import { Spacer } from "@/components/tiptap-ui-primitive/spacer";

export default function Chatbox({ editorContent }: { editorContent: string }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendWithEditorContent, setSendWithEditorContent] = useState(true);

  const LoadingDots = () => {
    const [dots, setDots] = useState("");
    useEffect(() => {
      if (!loading) {
        setDots("");
        return;
      }
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () => clearInterval(interval);
    }, [loading]);
    return <span style={{ marginLeft: 5 }}>{dots}</span>;
  };

  const handleSubmit = async () => {
    if (message.trim().length === 0) return;
    setLoading(true);
    try {
      let full_message = message;
      if (sendWithEditorContent) {
        full_message =
          "This is the content of the editor: " +
          editorContent +
          " This is the question of my user. Please respond with helpful information: " +
          message;
      }
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: "", question: full_message, in_text: false }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.log("Error fetching chat response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDialogSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editorContent, question: "", in_text: true }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.log("Error fetching chat response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-4 rounded-md"
      style={{
        background: "linear-gradient(135deg, #001f3f 0%, #003366 50%, #004080 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h2 className="text-lg font-semibold mb-2">Ask a question</h2>
      <textarea
        className="w-full p-2 mb-3 rounded text-black"
        rows={4}
        placeholder="Type your question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center mb-4">
        <input
          id="sendWithEditorContent"
          type="checkbox"
          className="mr-2"
          checked={sendWithEditorContent}
          onChange={() => setSendWithEditorContent(!sendWithEditorContent)}
        />
        <label htmlFor="sendWithEditorContent">Send with Editor Content</label>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          data-style="primary"
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: "fit-content" }}
        >
          Send
          {loading && <LoadingDots />}
        </Button>
        <Button
          data-style="ghost"
          onClick={handleDialogSubmit}
          disabled={loading}
          style={{ width: "fit-content", border: "1px solid white", color: "white" }}
        >
          Send with Dialog
          {loading && <LoadingDots />}
        </Button>
      </div>
      <Spacer />
      <div className="mt-4">
        <strong className="text-white">Assistant:</strong>
        <div className="whitespace-pre-wrap mt-1">{response}</div>
      </div>
    </div>
  );
}
