import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@mui/material";

type Props = {
  values: unknown;
  setFieldValue: (field: string, value: unknown) => void;
  touched: unknown;
  errors: unknown;
  activeStep: number;
};

export default function AboutMeEditor({
  values,
  setFieldValue,
  touched,
  errors,
  activeStep,
}: Props) {
  // ✅ Initialize editor only once
  const editor = useEditor({
    extensions: [StarterKit],
    content: values.aboutMe,
    onUpdate: ({ editor }) => {
      setFieldValue("aboutMe", editor.getHTML());
    },
  });

  if (activeStep !== 1) return null; // ✅ Render only at step 1

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex gap-2">
        <Button
          size="small"
          variant={editor?.isActive("bold") ? "contained" : "outlined"}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          B
        </Button>
        <Button
          size="small"
          variant={editor?.isActive("bulletList") ? "contained" : "outlined"}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          •
        </Button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="prose max-w-none border p-2 rounded min-h-[150px] bg-white"
      />

      {/* Validation */}
      {touched.aboutMe && errors.aboutMe && (
        <div className="text-red-500 text-sm">{errors.aboutMe}</div>
      )}
    </div>
  );
}
