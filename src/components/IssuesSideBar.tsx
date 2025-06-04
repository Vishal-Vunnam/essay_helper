'use client'
import React, { useEffect, useState } from 'react';

interface Issue {
  issue: string;
}

export default function IssuesSideBar({
  editorContent,
  data,
}: {
  editorContent: string;
  data: Issue[];
}) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setIssues(data);
      setVisible(true);
    } else {
      setIssues([]);
      setVisible(false);
    }
  }, [data, editorContent]); // React when either data or text changes

  if (!visible || issues.length === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center p-4 border-l border-gray-300 bg-gray-50 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Detected Issues</h1>
      <ul className="text-lg list-disc pl-5">
        {issues.map((item, index) => (
          <li key={index}>{item.issue}</li>
        ))}
      </ul>
    </div>
  );
}
