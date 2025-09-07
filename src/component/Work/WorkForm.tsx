import { ErrorMessage, Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import type { WorkExperienceRequest } from "../../redux/type/WorkType";
import { addWorkExperience } from "../../redux/workExperienceSlice";

interface WorkFormProps {
  open: boolean;
  onClose: () => void;
  workExperience?: WorkExperienceRequest;
}

function WorkForm({ open, onClose, workExperience }: WorkFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);

  const validationSchema = Yup.object({
    companyName: Yup.string().required("companyName is required"),
    designation: Yup.string().required("designation is required"),
    duration: Yup.string().required("Duration is required"),
    workDetails: Yup.string().required("workDetails is required"),
  });

  const initialValues: WorkExperienceRequest = {
    companyName: workExperience?.companyName || "",
    designation: workExperience?.designation || "",
    duration: workExperience?.duration || "",
    workDetails: workExperience?.workDetails || "",
  };

  async function handleSubmit(values: WorkExperienceRequest) {
    try {
      await dispatch(addWorkExperience(values));
      navigate(`/${username}/work`);
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
                label="companyName"
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
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="duration" />
              <TextField
                label="workDetails"
                name="workDetails"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.workDetails}
              />
              <ErrorMessage component="div" name="workDetails" />
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

export default WorkForm;
