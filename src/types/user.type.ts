import { Inputs } from "./form.types";

export interface Credentials {
  email: string;
  password: string;
}

export type Token = {
  token: string;
};

export interface AccountCreated {
  account_id: number;
  email: string;
  user_id: number;
}

export interface NewAccount {
  [Inputs.firstname]: string;
  [Inputs.lastname]: string;
  [Inputs.email]: string;
  [Inputs.password]: string;
  [Inputs.phone]: string;
  [Inputs.dni]: number;
}
