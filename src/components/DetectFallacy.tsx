"use client";

import { useState } from "react";

export default function DetectFallacy({ editorContent }: { editorContent: string }) {
  const [fallacy, setFallacy] = useState("");

  const handleDetect = async() => {
    try {
        console.log("Editor Content:", editorContent);
      const response = await fetch("http://localhost:8000/api/fallacy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editorContent }) ,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFallacy(data.fallacy || "No fallacy detected");
    } catch (error) {
      console.error("Error detecting fallacy:", error);
      setFallacy("Error detecting fallacy");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Detect Fallacy</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleDetect}
      >
        Detect Fallacy
      </button>
      {fallacy && (
        <div className="mt-4 text-lg">
          Detected Fallacy: {fallacy}
        </div>
      )}
    </div>
  )

}