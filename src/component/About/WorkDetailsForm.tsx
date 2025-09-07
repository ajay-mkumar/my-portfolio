import { ErrorMessage, Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import type { workDetails } from "../../redux/type/UserType";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UpdateUserDetails } from "../../redux/userSlicse";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface WorkDetailsFormProps {
  open: boolean;
  onClose: () => void;
  workDetails?: workDetails;
}

function WorkDetailsForm({ open, onClose, workDetails }: WorkDetailsFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company Name is required"),
    designation: Yup.string().required("Designation is required"),
    duration: Yup.string().required("Duration is required"),
    techStack: Yup.string().required("Tech Stack is required"),
  });

  const initialValues = {
    companyName: workDetails?.companyName || "",
    designation: workDetails?.designation || "",
    duration: workDetails?.duration || "",
    techStack: workDetails?.techStack || "",
  };
  async function handleSubmit(values: typeof initialValues) {
    try {
      await dispatch(
        UpdateUserDetails({
          field: "workExperience",
          value: JSON.stringify(values),
        })
      );
      navigate(`/${username}/about`);
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormComponent open={open} onClose={onClose} title="Add Work Details">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, values, handleBlur }) => (
          <Form>
            <DialogContent dividers>
              <TextField
                label="name"
                name="companyName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.companyName}
                sx={{ mb: 2 }}
              />
              <ErrorMessage component="div" name="companyName" />
              <TextField
                label="designation"
                name="designation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.designation}
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="designation" />
              <TextField
                label="duration"
                name="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
              />
              <ErrorMessage component="div" name="duration" />
              <TextField
                label="tech Stack"
                name="techStack"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.techStack}
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="techStack" />
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

export default WorkDetailsForm;
