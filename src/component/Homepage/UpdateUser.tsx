import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MediaForm from "../Auth/Mediaform";
import { UpdateUserDetails } from "../../redux/userSlicse";

function UpdateUser() {
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector((state) => state.user);
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
  });

  const initialValues = {
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    email: userDetails?.email,
    aboutMe: userDetails?.aboutMe,
    username: userDetails?.username,
    profilePicture: userDetails?.profilePicture,
    github: userDetails?.github,
    phone: userDetails?.phone,
    linkedIn: userDetails?.linkedIn,
    resume: userDetails?.resume,
  };
  const navigate = useNavigate();

  function handleSubmit(values) {
    console.log(values);
    const userDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      aboutMe: values.aboutMe,
      profilePicture: values.profilePicture,
      resume: values.resume,
      github: values.github,
      phone: values.phone,
      linkedIn: values.linkedIn,
    };

    const formData = new FormData();
    formData.append(
      "user",
      new Blob([JSON.stringify(userDetails)], {
        type: "application/json",
      })
    );

    if (values.profilePicture instanceof File) {
      formData.append("profile-picture", values.profilePicture);
    }
    if (values.resume instanceof File) {
      formData.append("resume", values.resume);
    }

    dispatch(UpdateUserDetails(formData))
      .unwrap()
      .then((res) => navigate(`/${res.username}`));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit({ ...values })}
    >
      {({ errors, touched, values, setFieldValue }) => (
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
                width: 1000,
                borderRadius: 2,
                bgcolor: "#fff",
                boxShadow: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Left column */}
              <Stack spacing={2} sx={{ flex: 1, pr: 4 }}>
                <Field as={TextField} name="firstName" label="First Name" />
                <Field as={TextField} name="lastName" label="Last Name" />
                <Field as={TextField} name="username" label="Username" />
                <Field as={TextField} name="email" label="Email" />
                <Field as={TextField} name="github" label="Github" />
                <Field
                  as={TextField}
                  name="phone"
                  label="Phone"
                  type="number"
                />
                <Field as={TextField} name="linkedIn" label="LinkedIn" />
              </Stack>

              {/* Right column */}
              <Box sx={{ flex: 1 }}>
                <MediaForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
                <img
                  src={`${userDetails?.profilePicture}`}
                  loading="lazy"
                  alt="Ajay Avatar"
                  className="rounded-full object-cover ml-30 w-60 h-60 md:w-72 md:h-72 bg-cyan-800"
                />
                <button
                  onClick={() =>
                    window.open(`${userDetails?.resume}`, "_blank")
                  }
                  className="mt-5 ml-50 bg-cyan-500 hover:bg-cyan-400 text-white pl-5 pr-5 px-2 py-2 shadow-lg hover:scale-120 transition duration-300"
                >
                  {userDetails?.username} Resume
                </button>
              </Box>
            </Box>
            <Box>
              <Button type="submit" variant="contained" sx={{ marginTop: 5 }}>
                Update
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateUser;
