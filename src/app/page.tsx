import Tiptap from "@/components/Tiptap";
import Chatbox from "@/components/Chatbox";
import Image from "next/image";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";  

// import Tiptap from '../components/Tiptap'
// export default function Home() {
//   return <Tiptap />
// }


export default function Home() {
  return (
    <div className="container text-center h-screen flex items-center justify-center">
      <main className="flex gap-18">
        <div className="row">
          <div className="col">
            <SimpleEditor />
          </div>
          <div className="col">
            <Chatbox />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
