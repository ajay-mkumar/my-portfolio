import { Box, Button, Typography } from "@mui/material";

type Props = {
  touched: unknown;
  errors: unknown;
  values: unknown;
  setFieldValue: unknown;
};

function MediaForm({ touched, errors, values, setFieldValue }: Props) {
  return (
    <>
      <Box display="flex" gap={2} mt={2}>
        {values.profilePicture && <p>{values.profilePicture.name}</p>}
        <Typography>Profile Picture</Typography>
        <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
          + Upload File
          <input
            type="file"
            hidden
            onChange={(event) => {
              setFieldValue(
                "profilePicture",
                event.currentTarget.files?.[0] || null
              );
            }}
          />
        </Button>

        {touched.profilePicture && errors.profilePicture && (
          <div style={{ color: "red" }}>{errors.profilePicture}</div>
        )}
      </Box>

      <Box display="flex" gap={2} mt={2}>
        {values.resume && <p>{values.resume.name}</p>}
        <Typography>Resume</Typography>
        <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
          + Upload File
          <input
            type="file"
            hidden
            onChange={(event) =>
              setFieldValue("resume", event.currentTarget.files?.[0] || null)
            }
          />
        </Button>
        {touched.resume && errors.resume && (
          <div style={{ color: "red" }}>{errors.resume}</div>
        )}
      </Box>
    </>
  );
}

export default MediaForm;
