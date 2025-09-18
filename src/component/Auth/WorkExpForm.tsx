import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";

type Props = {
  touched: unknown;
  errors: unknown;
};

function WorkExpForm({ touched, errors }: Props) {
  return (
    <>
      <Field
        as={TextField}
        name="companyName"
        label="Company Name"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.companyName && Boolean(errors.companyName)}
        helperText={<ErrorMessage name="companyName" />}
      />
      <Field
        as={TextField}
        name="role"
        label="Role"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.role && Boolean(errors.role)}
        helperText={<ErrorMessage name="role" />}
      />
      <Field
        as={TextField}
        name="tecckStakcs"
        label="Tech Stacks"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.tecckStakcs && Boolean(errors.tecckStakcs)}
        helperText={<ErrorMessage name="tecckStakcs" />}
      />

      <Box display="flex" gap={2} mt={2}>
        {/* From Month-Year */}
        <Field
          as={TextField}
          name="workDurationFrom"
          label="From"
          type="month"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={touched.workDurationFrom && Boolean(errors.workDurationFrom)}
          helperText={<ErrorMessage name="workDurationFrom" />}
        />

        {/* To Month-Year */}
        <Field
          as={TextField}
          name="workDurationTo"
          label="To"
          type="month"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={touched.workDurationTo && Boolean(errors.workDurationTo)}
          helperText={<ErrorMessage name="workDurationTo" />}
        />
      </Box>
    </>
  );
}

export default WorkExpForm;
