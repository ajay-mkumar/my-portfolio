import { Form, Formik } from "formik";
import FormComponent from "../Form/FormComponent";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import type { workDetails } from "../../redux/type/UserType";

interface WorkDetailsFormProps {
  open: boolean;
  onClose: () => void;
  workDetails?: workDetails;
}

function WorkDetailsForm({ open, onClose, workDetails }: WorkDetailsFormProps) {

    const initialValues = {
        companyName: workDetails?.companyName || '',
        designation: workDetails?.designation || '',
        duration: workDetails?.duration || '',
        techStack: workDetails?.techStack || ''
    }
  function handleSubmit() {}

  return (
    <FormComponent open={open} onClose={onClose} title="Add Work Details">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, values }) => (
          <Form>
            <DialogContent dividers>
              <TextField
                label="name"
                name="companyName"
                onChange={handleChange}
                value={values.companyName}
                sx={{mb: 2}}
              />
              <TextField
                label="designation"
                name="designation"
                onChange={handleChange}
                value={values.designation}
                sx={{ml: 2}}
              />
              <TextField
                label="duration"
                name="duration"
                onChange={handleChange}
                value={values.duration}
              />
              <TextField
                label="tech Stack"
                name="techStack"
                onChange={handleChange}
                value={values.techStack}
                sx={{ml: 2}}
              />
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
