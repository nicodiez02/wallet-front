export enum Inputs {
  firstname = "firstname",
  lastname = "lastname",
  email = "email",
  password = "password",
  repeat_password = "repeat_password",
  phone = "phone",
  dni = "dni",
  code = "code",
}

export type ExtendedStatus = {
  status: Status;
  message: string;
};

export type Status = "VALID" | "INVALID" | "FOCUS";
export type FormType = "SUBMIT" | "STEPPER";
