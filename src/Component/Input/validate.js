import * as yup from "yup";

export const validateSchema = yup.object().shape({
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(3).max(8).required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password not matched")
    .required("required"),
});
