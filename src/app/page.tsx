"use client";
import Chatbox from "@/components/Chatbox";
import { SimpleEditor } from "@/components/SimpleEditor";  
import Navbar from "@/components/Navbar";
import { useState } from "react";
import DetectFallacy from "@/components/DetectFallacy";
import IssuesSideBar from "@/components/IssuesSideBar";
// import Tiptap from '../components/Tiptap'
// export default function Home() {
//   return <Tiptap />
// }


export default function Home() {
  type InTextIssue = string;

  interface IssueResponse {
    in_text_issues: InTextIssue[];
  }
  const [issues, setIssues] = useState<{ issue: string }[]>([]);
  const [editorContent, setEditorContent] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>
      <div className="fixed top-0 left-0 w-full">
        <Navbar isChatboxOpen={isChatboxOpen} toggleChatbox={() => setIsChatboxOpen(!isChatboxOpen)} />
      </div>
      <div className="container text-center h-screen flex items-center justify-center">
        <main className="grid grid-rows-[auto_1fr_auto] gap-4">
          <div className="flex gap-18">
            <div className="row">
              <div className="col flex items-center justify-center rounded-full border p-4">
                <SimpleEditor onChange={setEditorContent} onIssues={setIssues} />
              </div>
              {issues.length > 0 && (
                <div className="col flex items-center justify-center rounded-full border p-4">
                  <IssuesSideBar editorContent={editorContent} data={issues} />
                </div>
              )}
              {isChatboxOpen && (
                <div className="col flex items-center justify-center rounded-full border p-4">
                  <Chatbox editorContent={editorContent} />
                </div>
              )}
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
