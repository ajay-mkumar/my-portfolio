import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";

type Props = {
  touched: unknown;
  errors: unknown;
};

function AccademicForm({ touched, errors }: Props) {
  return (
    <>
      <Field
        as={TextField}
        name="degree"
        label="Degree"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.degree && Boolean(errors.degree)}
        helperText={<ErrorMessage name="degree" />}
      />
      <Field
        as={TextField}
        name="specification"
        label="Specification"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.specification && Boolean(errors.specification)}
        helperText={<ErrorMessage name="specification" />}
      />
      <Field
        as={TextField}
        name="college"
        label="College"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.college && Boolean(errors.college)}
        helperText={<ErrorMessage name="college" />}
      />

      {/* Password Field */}
      <Field
        as={TextField}
        name="CGPA"
        label="CGPA"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        error={touched.CGPA && Boolean(errors.CGPA)}
        helperText={<ErrorMessage name="CGPA" />}
      />

      <Box display="flex" gap={2} mt={2}>
        {/* From Month-Year */}
        <Field
          as={TextField}
          name="degreeDurationFrom"
          label="From"
          type="month"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={
            touched.degreeDurationFrom && Boolean(errors.degreeDurationFrom)
          }
          helperText={<ErrorMessage name="degreeDurationFrom" />}
        />

        {/* To Month-Year */}
        <Field
          as={TextField}
          name="degreeDurationTo"
          label="To"
          type="month"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={touched.degreeDurationTo && Boolean(errors.degreeDurationTo)}
          helperText={<ErrorMessage name="degreeDurationTo" />}
        />
      </Box>
    </>
  );
}

export default AccademicForm;
