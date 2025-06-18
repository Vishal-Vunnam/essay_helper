'use client';
import React, { useEffect, useState } from 'react';

export default function IssuesSideBar({
  editorContent,
  data,
  onClose,
}: {
  editorContent: string;
  data: string[];
  onClose?: () => void;
}) {
  const [issues, setIssues] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data && data.length) {
      setIssues(data);
      setVisible(true);
    } else {
      setIssues([]);
    }
  }, [data]);

  if (!visible || issues.length === 0) return null;

  return (
    <div
      className="card shadow-sm border-10 text-white w-100"
      style={{ maxWidth: '400px', backgroundColor: '#001f3f' }} // Custom dark blue
    >
      <div className="card-header d-flex justify-content-between align-items-center border-0" style={{ backgroundColor: '#001737' }}>
        <h5 className="mb-0 text-white">PenPal Detected Issues</h5>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => {
            setVisible(false);
            setIssues([]);
            if (onClose) onClose();
          }}
        >
          Close
        </button>
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {issues.map((item, index) => (
            <li
                key={index}
                className="bg-white text-black rounded p-3 mb-3 d-flex justify-content-between align-items-center"
              >
                <span className="flex-grow-1 me-3" style={{ fontSize: '0.875rem' }}><i>{item}</i></span>
                <button
                  className="btn btn-sm btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    padding: 0,
                    fontSize: '16px',
                    lineHeight: '1',
                    textAlign: 'center',
                    flexShrink: 0,   // Prevent button from shrinking on smaller widths
                  }}
                  onClick={() => {
                    const updatedIssues = issues.filter((_, i) => i !== index);
                    setIssues(updatedIssues);
                    if (onClose && updatedIssues.length === 0) {
                      onClose();
                    }
                  }}
                >
                  ×
                </button>
              </li>

          ))}
        </ul>
      </div>
    </div>
  );
}
