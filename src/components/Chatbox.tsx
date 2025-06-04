"use client";

import { useState } from "react";

export default function Chatbox({ editorContent }: { editorContent: string }) {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [sendWithEditorContent, setSendWithEditorContent] = useState<boolean>(true);

  const handleSubmit = async () => {
    if (message.length === 0) return;
    console.log("Sending message:", message);

    try {
      var full_message = message; 
      if (sendWithEditorContent) {full_message = "This is the content of the editor:" + editorContent + "This is the question of my user please respond with helpful information:" + message;}
      console.log("Full message:", full_message);
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: "", question: full_message, in_text: false }),
      });
      const data = await res.json();
      console.log(data);
      setResponse(data.response) 
    } catch (error) {
      console.log("Error fetching chat response:");
    }
  };

  const handleDialogSubmit = async () => {
    try {
      console.log("Sending editor content:", editorContent);
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editorContent, question:  '', in_text: true }),
      });
      const data = await res.json();
      setResponse(data.response) 
    } catch (error) {
      console.log("Error fetching chat response:");
    };
  }
    


  return (
    <div className="p-3 border rounded bg-light">
      <textarea
        className="form-control mb-2"
        rows={3}
        placeholder="Type your question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="sendWithEditorContent"
          checked={sendWithEditorContent}
          onChange={() => setSendWithEditorContent(!sendWithEditorContent)}
        />
        <label className="form-check-label" htmlFor="sendWithEditorContent">
          Send with Editor Content
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="btn btn-primary mb-3"
      >
        Send
      </button>
      <button 
        className="btn btn-secondary mb-3"
        onClick={handleDialogSubmit}
      >
        Send with Dialog
      </button>
      <div className="mt-3 text-dark">
        <strong>Assistant:</strong>
        <div>{response}</div>
      </div>
    </div>
  );
}
