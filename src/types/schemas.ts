import * as yup from "yup";
import { Inputs } from "./form.types";
import { EMAIL, NUMBER, PASSWORD, REQUIRED, STRING } from "./errors.messages";

const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,20}$/;
const regexString = /^[a-zA-Z]+$/;

type SchemaInputs = Exclude<keyof typeof Inputs, "repeat_password">;

export const schemas: Record<SchemaInputs, yup.Schema> = {
  email: yup.string().email(EMAIL).required(REQUIRED),
  firstname: yup.string().required(REQUIRED).matches(regexString, STRING),
  lastname: yup.string().required(REQUIRED).matches(regexString, STRING),
  phone: yup.number().integer().typeError(NUMBER).required(REQUIRED),
  code: yup.number().integer().typeError(NUMBER).required(REQUIRED),
  dni: yup.number().integer().typeError(NUMBER).required(REQUIRED),
  password: yup.string().matches(regexPassword, PASSWORD).required(REQUIRED),
};
