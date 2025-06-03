'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// const Tiptap = () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: '<p>Welcome to Tiptap</p>',
//   })
//   return <EditorContent editor={editor} />
// }
// export default Tiptap

export function Tiptap({ onChange }: { onChange: (content: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  return <EditorContent editor={editor} />;
}
