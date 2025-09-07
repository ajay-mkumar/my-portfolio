import { Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UpdateUserDetails } from "../../redux/userSlicse";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface WorkDetailsFormProps {
  open: boolean;
  onClose: () => void;
  aboutMe?: string;
}

function AboutMeForm({ open, onClose, aboutMe }: WorkDetailsFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);

  const validationSchema = Yup.object({
    aboutMe: Yup.string().required("About Me is required"),
  });

  const initialValues = {
    aboutMe: aboutMe || "",
  };

  async function handleSubmit(values: typeof initialValues) {
    try {
      await dispatch(
        UpdateUserDetails({ field: "aboutMe", value: values.aboutMe })
      );
      navigate(`/${username}/about`);
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormComponent open={open} onClose={onClose} title="Add About Me">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ setFieldValue, values, handleBlur, errors, touched }) => {
          const editor = useEditor({
            extensions: [StarterKit],
            content: values.aboutMe,
            onUpdate: ({ editor }) => {
              setFieldValue("aboutMe", editor.getHTML());
            },
          });

          return (
            <Form>
              <DialogContent dividers>
                <Button
                  size="small"
                  variant={editor.isActive("bold") ? "contained" : "outlined"}
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  B
                </Button>
                <Button
                  size="small"
                  variant={
                    editor.isActive("bulletList") ? "contained" : "outlined"
                  }
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  •
                </Button>
                <EditorContent
                  editor={editor}
                  onBlur={() => handleBlur({ target: { name: "aboutMe" } })}
                  className="prose max-w-none border p-2 rounded min-h-[150px]"
                />
                {touched.aboutMe && errors.aboutMe && (
                  <div style={{ color: "red" }}>{errors.aboutMe}</div>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose} color="secondary" variant="outlined">
                  Cancel
                </Button>
                <Button type="submit" color="primary" variant="contained">
                  Submit
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </FormComponent>
  );
}

export default AboutMeForm;
