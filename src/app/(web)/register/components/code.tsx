"use client";
import { Button, ButtonElement, ButtonProps, ButtonType } from "@/components/button";
import { Error } from "@/components/error";
import { Input } from "@/components/form/Common";
import { Email } from "@/components/form/Email";
import { EMAIL } from "@/types/errors.messages";
import { Inputs, Status } from "@/types/form.types";
import React, { useState } from "react";
import Swiper from "swiper";

interface CodeProps {
  button: ButtonProps;
}

export const Code: React.FC<CodeProps> = ({ button }) => {
  const styles = { fontBold: true };
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const statusHandler = (status: Status) => {
    setDisabled(!(status === "VALID"));
    setMessage(status === "INVALID" ? EMAIL : "");
  };

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="w-full text-center font-bold font-open text-white">Ingresá el código de verificación</p>
          <Input attributes={{ name: Inputs.phone, type: "number", placeholder: "Telefono*" }} statusHandler={statusHandler} />

          <Button disabled={disabled} {...button} />
        </div>
        <Error message={message ?? ""} />
      </div>
    </>
  );
};
