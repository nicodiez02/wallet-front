import { Button, ButtonProps } from "@/components/button";
import { Error } from "@/components/error";
import { Email } from "@/components/form/Email";
import { EMAIL } from "@/types/errors.messages";
import { Status } from "@/types/form.types";
import React, { MouseEventHandler, useState, useMemo } from "react";

interface EmailFormProps {
  button: ButtonProps[];
}

export const EmailForm: React.FC<EmailFormProps> = ({ button }) => {
  const [status, setStatus] = useState<Status>("FOCUS");
  const message = useMemo(() => (status === "INVALID" ? EMAIL : ""), [status]);
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
          <Email useFormHandler={true} statusHandler={(status: Status) => setStatus(status)} />

          {button.map((config, index) => (
            <Button key={`button_email_form_${index}`} {...config} onClick={(event) => handleClick(event, config?.onClick)} />
          ))}
        </div>
        <Error message={message ?? ""} />
      </div>
    </>
  );
};
