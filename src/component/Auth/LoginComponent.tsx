import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../../redux/userSlicse";
import type { LoginRequest } from "../../redux/type/UserType";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("password is required"),
  });

  const navigate = useNavigate();

  function handleSubmit(values: LoginRequest) {
    dispatch(loginUser(values)).unwrap().then((res) => navigate(`/${res.username}`));
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form className="flex flex-col justify-center items-center min-h-screen">
        <Field name="username" placeholder="username" className="bg-white" />
        <ErrorMessage name="username" component="div" />

        <Field name="password" placeholder="password" className="bg-white" />
        <ErrorMessage name="password" component="div" />
        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
}

export default LoginComponent;
