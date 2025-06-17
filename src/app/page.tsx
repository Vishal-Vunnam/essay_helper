"use client";
import Chatbox from "@/components/Chatbox";
import { SimpleEditor } from "@/components/SimpleEditor";  
import Navbar from "@/components/Navbar";
import { use, useState } from "react";
import { useEffect } from "react";
import DetectFallacy from "@/components/DetectFallacy";
import IssuesSideBar from "@/components/IssuesSideBar";
// import Tiptap from '../components/Tiptap'
// export default function Home() {
//   return <Tiptap />
// }


export default function Home() {
  const [issues, setIssues] = useState<string[]>([]);
  const [editorContent, setEditorContent] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [isIssueSidebarOpen, setIsIssueSidebarOpen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);


  // const closeIssueSidebar = () => {
  //   setIsIssueSidebarOpen(false);
  //   setIssues([]);
  // };
useEffect(() => {
  console.log("Sidebar visibility changed:", showSidebar);
}, [showSidebar]);


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
      <div className="container text-center h-screen flex items-center justify-center bg-blue">
        <main className="grid grid-rows-[auto_1fr_auto] gap-4">
          <div className="flex gap-18">
            <div className="row">
                <div className="col flex items-center justify-center rounded-full border p-4 rounded">
                <SimpleEditor 
                  onChange={setEditorContent} 
                  onIssues={issues => {
                    setIssues(issues);
                    setShowSidebar(true);
                    console.log("Issues detected:", issues);
                    console.log("showSidebar state:", showSidebar);
                  }} 
                />
                </div>
                {issues.length > 0 && showSidebar && (
                <div className="col flex items-center justify-center rounded-full border p-4">
                  <IssuesSideBar 
                  editorContent={editorContent} 
                  data={issues} 
                  onClose={() => setShowSidebar(false)}
                  />
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
