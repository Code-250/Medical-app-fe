import * as yup from "yup";

export const registerSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.string().required(),
  phoneNumber: yup.string().required(),
  gender: yup.string().required(),
  // role: yup
  //   .string()
  //   .oneOf(["ADMIN", "PATIENT", "PHARMACIST", "PHYSICIAN"])
  //   .required("Please select a role"),
});
