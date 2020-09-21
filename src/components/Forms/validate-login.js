import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Must be a valid email."),

  password: yup.string().required("Password is required."),
});
