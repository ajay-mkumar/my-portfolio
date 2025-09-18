import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../../redux/userSlicse";
import type { LoginRequest } from "../../redux/type/UserType";
import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginComponent() {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("password is required"),
  });

  const navigate = useNavigate();
  const [mode, setMode] = useState("login");

  const handleToggle = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: "login" | "signup" | null
  ) => {
    if (newMode) setMode(newMode);

    if (newMode === "login") navigate("/auth/login");
    else navigate("/auth/signup");
  };

  function handleSubmit(values: LoginRequest) {
    dispatch(loginUser(values))
      .unwrap()
      .then((res) => navigate(`/${res.username}`));
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit({ ...values })}
    >
      {({ errors, touched }) => (
        <Form>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f4f6f8"
          >
            <Box
              sx={{
                p: 4,
                width: 350,
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

              {/* Title */}
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                {mode === "login" ? "Welcome Back" : "Create an Account"}
              </Typography>

              {/* Username Field */}
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

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, py: 1.2, borderRadius: "8px" }}
              >
                {mode === "login" ? "Login" : "Sign Up"}
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default LoginComponent;
