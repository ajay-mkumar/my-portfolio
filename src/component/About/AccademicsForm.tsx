import { ErrorMessage, Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import type { accademics } from "../../redux/type/UserType";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addAccademicDetails } from "../../redux/userSlicse";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface AccademicsFormProps {
  open: boolean;
  onClose: () => void;
  accademics?: accademics;
}

function AccademicsForm({ open, onClose, accademics }: AccademicsFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);

  const validationSchema = Yup.object({
    degree: Yup.string().required("Degree is required"),
    specialization: Yup.string().required("Specialization is required"),
    duration: Yup.string().required("Duration is required"),
    CGPA: Yup.string().required("CGPA is required"),
  });

  const initialValues = {
    degree: accademics?.degree || "",
    specialization: accademics?.specialization || "",
    college: accademics?.college || "",
    duration: accademics?.duration || "",
    CGPA: accademics?.CGPA || "",
  };

  async function handleSubmit(values: typeof initialValues) {
    try {
      await dispatch(addAccademicDetails(JSON.stringify(values)));
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
                label="Degree"
                name="degree"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.degree}
                sx={{ mb: 2 }}
              />
              <ErrorMessage component="div" name="degree" />
              <TextField
                label="specialization"
                name="specialization"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.specialization}
                sx={{ ml: 2 }}
              />
              <ErrorMessage component="div" name="specialization" />
              <TextField
                label="college"
                name="college"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.college}
                sx={{ mb: 2 }}
              />
              <ErrorMessage component="div" name="college" />
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
                label="CGPA"
                name="CGPA"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.CGPA}
              />
              <ErrorMessage component="div" name="CGPA" />
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

export default AccademicsForm;
