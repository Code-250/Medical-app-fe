import * as yup from "yup";

export const loginSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
  // role: yup
  //   .string()
  //   .oneOf(["ADMIN", "PATIENT", "PHARMACIST", "PHYSICIAN"])
  //   .required("Please select a role"),
});
