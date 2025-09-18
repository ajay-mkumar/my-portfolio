import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../../redux/userSlicse";
import type { LoginRequest } from "../../redux/type/UserType";
import {
  Box,
  Button,
  LinearProgress,
  Step,
  StepLabel,
  Stepper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AboutMeEditor from "./AboutMeEditor";
import AccademicForm from "./AccademicForm";
import WorkExpForm from "./WorkExpForm";

const steps = ["Basic Details", "About Me", "Accademics", "Work Experience"];

function SignUpComponent() {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("password is required"),
  });

  const navigate = useNavigate();
  const [mode, setMode] = useState("signup");

  const handleToggle = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: "login" | "signup" | null
  ) => {
    if (newMode) setMode(newMode);

    if (newMode === "login") navigate("/auth/login");
    else navigate("/auth/signup");
  };

  const isLastStep = activeStep === steps.length - 1;
  const progress = ((activeStep + 1) / steps.length) * 100;

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  function handleSubmit(values: LoginRequest) {
    if (!isLastStep) {
      handleNext();
      return;
    }

    dispatch(loginUser(values))
      .unwrap()
      .then((res) => navigate(`/${res.username}`));
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        aboutMe: "",
        username: "",
        password: "",
        degree: "",
        specification: "",
        college: "",
        degreeDurationFrom: "",
        defreeDurationTo: "",
        CGPA: "",
        companyName: "",
        role: "",
        workDurationFrom: "",
        workDurationTo: "",
        techStacks: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit({ ...values })}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f4f6f8"
          >
            <Box
              sx={{
                p: 4,
                width: 500,
                borderRadius: 2,
                bgcolor: "#fff", // ✅ White form background
                boxShadow: 3,
              }}
            >
              {/* Toggle Switch */}
              <Box display="flex" justifyContent="center" mb={2}>
                <ToggleButtonGroup
                  value={mode}
                  exclusive
                  onChange={handleToggle}
                  aria-label="auth switch"
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <ToggleButton
                    value="login"
                    sx={{ textTransform: "none", px: 3 }}
                  >
                    Login
                  </ToggleButton>
                  <ToggleButton
                    value="signup"
                    sx={{ textTransform: "none", px: 3 }}
                  >
                    Signup
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Box width="100%" maxWidth={600} mb={2}>
                <LinearProgress value={progress} variant="determinate" />
              </Box>

              <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Username Field */}
              {activeStep == 0 && (
                <>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={<ErrorMessage name="firstName" />}
                  />
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={<ErrorMessage name="lastName" />}
                  />
                  <Field
                    as={TextField}
                    name="username"
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={touched.username && Boolean(errors.username)}
                    helperText={<ErrorMessage name="username" />}
                  />

                  {/* Password Field */}
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                    helperText={<ErrorMessage name="password" />}
                  />
                </>
              )}

              {activeStep === 1 && (
                <AboutMeEditor
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  activeStep={activeStep}
                  touched={touched}
                />
              )}

              {activeStep == 2 && (
                <AccademicForm touched={touched} errors={errors} />
              )}

              {activeStep == 3 && (
                <WorkExpForm touched={touched} errors={errors} />
              )}

              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button type="submit" variant="contained">
                  {isLastStep ? "Finish" : "Next"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpComponent;
