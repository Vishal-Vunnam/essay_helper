"use client";
import Chatbox from "@/components/Chatbox";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";  
import Navbar from "@/components/Navbar";
import { useState } from "react";
import DetectFallacy from "@/components/DetectFallacy";
// import Tiptap from '../components/Tiptap'
// export default function Home() {
//   return <Tiptap />
// }


export default function Home() {
  const [editorContent, setEditorContent] = useState("");
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
      <Navbar />
      </div>
      <div className="container text-center h-screen flex items-center justify-center">
      <main className="grid grid-rows-[auto_1fr_auto] gap-4">
        <div className="flex gap-18">
        <div className="row">
          <div className="col flex items-center justify-center rounded-full border p-4">
          <SimpleEditor onChange = {setEditorContent} />
          </div>
          <div className="col flex items-center justify-center rounded-lg">
          <Chatbox editorContent = {editorContent}/>
          <DetectFallacy editorContent = {editorContent}/>
          </div>
        </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
