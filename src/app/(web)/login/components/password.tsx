import { Button, ButtonProps } from "@/components/button";
import { Error } from "@/components/error";
import { Password } from "@/components/form/Password";
import { PASSWORD } from "@/types/errors.messages";
import { Status } from "@/types/form.types";
import React, { MouseEventHandler, useState, useMemo } from "react";

interface PasswordFormProps {
  button: ButtonProps[];
}

export const PasswordForm: React.FC<PasswordFormProps> = ({ button }) => {
  const [status, setStatus] = useState<Status>("FOCUS");
  const message = useMemo(() => (status === "INVALID" ? PASSWORD : ""), [status]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, onClick?: MouseEventHandler<HTMLButtonElement>) => {
    if (status === "INVALID" || status === "FOCUS") {
      return;
    }

    if (onClick) onClick(event);
  };

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="w-full text-center font-bold font-open text-white">¡Hola! Ingresá tu e-mail</p>
          <Password useFormHandler={true} statusHandler={(status: Status) => setStatus(status)} />

          {button.map((config, index) => (
            <Button key={`button_password_form_${index}`} {...config} onClick={(event) => handleClick(event, config?.onClick)} />
          ))}
        </div>
        <Error message={message ?? ""} />
      </div>
    </>
  );
};
