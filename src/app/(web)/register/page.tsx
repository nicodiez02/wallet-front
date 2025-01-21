"use client";
import { Error } from "@/components/error";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NotFoundError } from "@/error/notfound.class";
import { ALREADY_REGISTER, EMAIL, NUMBER, PASSWORD, STRING, UNEXPECTED } from "@/types/errors.messages";
import { Input, InputAttributes } from "@/components/form/Common";
import { Email } from "@/components/form/Email";
import { Password } from "@/components/form/Password";
import { ExtendedStatus, Inputs, Status } from "@/types/form.types";
import { Submit } from "@/components/form/Submit";
import { Button, ButtonElement, ButtonType } from "@/components/button";
import { RepeatPassword } from "@/components/form/RepeatPassword";
import { User } from "@/services/user.service";
import { HttpError } from "@/error/http-custom.class";
import { SuccesfulyRegistered } from "./components/success";

export interface CreateAccount {
  [Inputs.firstname]: string;
  [Inputs.lastname]: string;
  [Inputs.email]: string;
  [Inputs.password]: string;
  [Inputs.repeat_password]: string;
  [Inputs.phone]: string;
  [Inputs.dni]: string;
}

const configuration: Record<keyof CreateAccount, InputAttributes> = {
  [Inputs.firstname]: { name: Inputs.firstname, type: "text", placeholder: "Nombre*" },
  [Inputs.lastname]: { name: Inputs.lastname, type: "text", placeholder: "Apellido*" },
  [Inputs.email]: { name: Inputs.lastname, type: "text", placeholder: "Correo Electronico" },
  [Inputs.password]: { name: Inputs.lastname, type: "text", placeholder: "Contraseña" },
  [Inputs.repeat_password]: { name: Inputs.lastname, type: "text", placeholder: "Confirmar contraseña" },
  [Inputs.dni]: { name: Inputs.dni, type: "number", placeholder: "DNI*" },
  [Inputs.phone]: { name: Inputs.phone, type: "number", placeholder: "Telefono*" },
};

const ErrorCases: Record<number, string> = {
  [409]: ALREADY_REGISTER,
};

const generateErrorMessage = (name: keyof CreateAccount, message: string) => `Error en ${configuration[name].placeholder.replace("*", "").toLowerCase()}: ${message.toLowerCase()}`;

export default function Register() {
  const methods = useForm<CreateAccount>();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Record<Inputs, ExtendedStatus> | {}>({});
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleDisabled = (status: Status, message: string, name: keyof CreateAccount) => {
    setStatus((prev) => ({
      ...prev,
      [name]: {
        status,
        message,
      },
    }));
  };

  const { handleSubmit } = methods;
  const onSubmit = async (data: CreateAccount) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      console.log("entre");
      setDisabled(true);

      const invalidInput = Object.entries(status).find(([_, element]) => element.status === "INVALID");
      const emptyField = Object.values(data).some((value) => !value || value === "");

      console.log("🚀 ~ onSubmit ~ status:", status);
      console.log("🚀 ~ onSubmit ~ invalidInput:", invalidInput);

      if (invalidInput || emptyField) {
        return;
      }

      const { repeat_password, ...account } = data;
      const user = new User();
      //await user.register({ ...account, dni: Number(account[Inputs.dni]) });
      setTimeout(() => {
        console.log("la conchita mia chetooo");
        //setMessage("");
        //setSuccess(true);
      }, 2000);
    } catch (error) {
      if (error instanceof HttpError) {
        setMessage(ErrorCases[error.status] ?? UNEXPECTED);
        return;
      }

      setMessage(UNEXPECTED);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    const input = Object.entries(status).find(([_, element]) => element.status === "INVALID");

    if (input) {
      const name = input[0] as keyof CreateAccount;
      const message = input[1].message;
      setMessage(generateErrorMessage(name, message));
    } else {
      setMessage("");
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center p-45 flex-col min-h-screen gap-4">
      {success ? (
        <SuccesfulyRegistered />
      ) : (
        <FormProvider {...methods}>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <span className="w-full text-center font-bold font-open text-white">Crear cuenta</span>

            <div className="flex flex-col lg:flex-row lg:w-full lg:mb-[24px] lg:justify-center lg:gap-[62px] gap-4">
              <Input attributes={configuration[Inputs.firstname]} statusHandler={(status: Status) => handleDisabled(status, STRING, Inputs.firstname)} />
              <Input attributes={configuration[Inputs.lastname]} statusHandler={(status: Status) => handleDisabled(status, STRING, Inputs.lastname)} />
            </div>

            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-center lg:gap-[62px] gap-4">
              <Input attributes={configuration[Inputs.dni]} statusHandler={(status: Status) => handleDisabled(status, NUMBER, Inputs.dni)} />
              <Email statusHandler={(status: Status) => handleDisabled(status, EMAIL, Inputs.email)} />
            </div>

            <p className="w-full text-center text-11 font-open text-white">Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número.)</p>

            <div className="flex flex-col lg:flex-row lg:w-full lg:mb-[24px] lg:justify-center lg:gap-[62px] gap-4">
              <Password statusHandler={(status: Status) => handleDisabled(status, PASSWORD, Inputs.password)} />
              <RepeatPassword statusHandler={(status: Status, message: string) => handleDisabled(status, message, Inputs.repeat_password)} />
            </div>

            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-center lg:gap-[62px] gap-4">
              <Input attributes={configuration[Inputs.phone]} statusHandler={(status: Status) => handleDisabled(status, NUMBER, Inputs.phone)} />
              <Button type={ButtonType.SECONDARY} fontBold={true} element={ButtonElement.Submit} disabled={disabled} text={"Enviar"} />
            </div>
            <Error message={message} />
          </form>
        </FormProvider>
      )}
    </div>
  );
}
