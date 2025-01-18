import { Button, ButtonProps } from "@/components/button";
import { Error } from "@/components/error";
import { Status } from "@/types/form.types";
import React, { MouseEventHandler, useState, useMemo, useEffect } from "react";

interface OneStepFormProps<T> {
  button: ButtonProps | ButtonProps[];
  input: (props: T) => JSX.Element;
  disabled?: boolean;
  error: string;
  title: string;
}

export const OneStepForm = <T,>({ button, error, input, title, disabled }: OneStepFormProps<T>) => {
  const [status, setStatus] = useState<Status>("FOCUS");
  const message = useMemo(() => (status === "INVALID" ? error : ""), [status]);
  const props: T = {
    useFormHandler: true,
    statusHandler: (status: Status) => setStatus(status),
  } as T;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, onClick?: MouseEventHandler<HTMLButtonElement>) => {
    if (status === "INVALID" || status === "FOCUS") {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-center flex-col gap-4">
        <p className="w-full text-center font-bold font-open text-white">{title}</p>
        {input(props)}

        {Array.isArray(button) ? (
          button.map((config, index) => <Button disabled={disabled ?? false} key={`one_step_form_${index}`} {...config} onClick={(event) => handleClick(event, config?.onClick)} />)
        ) : (
          <Button {...button} disabled={disabled ?? false} onClick={(event) => handleClick(event, button?.onClick)} />
        )}
      </div>
      <Error message={message ?? ""} />
    </div>
  );
};
