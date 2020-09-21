import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().required("First Name is required."),

  lastName: yup.string().required("Last Name is required."),

  email: yup
    .string()
    .required("Email is required.")
    .email("Must be a valid email."),

  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be 8 characters or longer.")
    .matches(/a-zA-Z0-9/, "Password can only contain letters and numbers."),

  newPassword: yup
    .string()
    .required("Password confirmation is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
