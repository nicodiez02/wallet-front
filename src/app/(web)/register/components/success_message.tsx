import { Button, ButtonProps } from "@/components/button";
import React, { PropsWithChildren } from "react";

interface SuccessMessage extends PropsWithChildren {
  heading: string;
  button: ButtonProps;
}

export const SucessMessage: React.FC<SuccessMessage> = ({ heading, button, children }) => {
  return (
    <>
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="text-[34px]">{heading}</h1>
        <img src="/images/Check.png" width={100} height={100} />
        {children}
        <Button {...button} />
      </div>
    </>
  );
};
