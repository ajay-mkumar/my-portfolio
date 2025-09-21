import { ErrorMessage, Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addWorkExperience } from "../../redux/workExperienceSlice";
import { addProject } from "../../redux/userSlicse";

interface projectFormProps {
  open: boolean;
  onClose: () => void;
}

function AddProject({ open, onClose }: projectFormProps) {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("companyName is required"),
    description: Yup.string().required("description is required"),
    techStacks: Yup.string().required("techStacks is required"),
    githubLink: Yup.string().required("githubLink is required"),
    appLink: Yup.string().required("appLink is required"),
  });

  const initialValues = {
    name: "",
    description: "",
    techStacks: "",
    githubLink: "",
    appLink: "",
    photo: "",
  };

  async function handleSubmit(values) {
    try {
      values.techStacks = JSON.stringify(values.techStacks.split(","));
      const formData = new FormData();
      formData.append("photo", values.photo);
      delete values.photo;
      formData.append(
        "project",
        new Blob([JSON.stringify(values)], {
          type: "application/json",
        })
      );
      dispatch(addProject(formData));
      //   navigate(`/${username}/projects`);
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormComponent open={open} onClose={onClose} title="Add Project Details">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          handleChange,
          values,
          handleBlur,
          setFieldValue,
          touched,
          errors,
        }) => (
          <Form>
            <DialogContent dividers>
              <TextField
                label="Project Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                sx={{ mb: 2 }}
              />
              <ErrorMessage component="div" name="name" />
              <TextField
                label="Description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="description" />
              <TextField
                label="Tech Stacks"
                name="techStacks"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.techStacks}
              />
              <ErrorMessage component="div" name="techStacks" />
              <TextField
                label="github Link"
                name="githubLink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.githubLink}
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="githubLink" />
              <TextField
                label="App Link"
                name="appLink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.appLink}
                sx={{ mt: 2 }}
              />
              <ErrorMessage component="div" name="appLink" />
              <Box display="flex" gap={2} mt={2}>
                <Typography>Profile Picture</Typography>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  + Upload File
                  <input
                    type="file"
                    hidden
                    onChange={(event) =>
                      setFieldValue(
                        "photo",
                        event.currentTarget.files?.[0] || null
                      )
                    }
                  />
                </Button>

                {touched.photo && errors.photo && (
                  <div style={{ color: "red" }}>{errors.photo}</div>
                )}
              </Box>
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
        )}
      </Formik>
    </FormComponent>
  );
}

export default AddProject;
