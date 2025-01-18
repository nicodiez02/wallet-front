import { useValidation } from "@/hooks/useValidation";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { schemas } from "@/types/schemas";
import { Inputs, Status } from "@/types/form.types";

export interface EmailProps {
  useFormHandler?: boolean;
  statusHandler?: (status: Status) => void;
}

export const Email: React.FC<EmailProps> = ({ useFormHandler, statusHandler }) => {
  const schema = schemas[Inputs.email];
  const { register, watch } = useFormContext();
  const { onBlur, onFocus, message, status } = useValidation();
  const value: string = watch("email");

  useEffect(() => {
    if (statusHandler) {
      statusHandler(status);
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col gap-2 w-full lg:w-[360px] lg:items-center">
        <input
          {...register("email")}
          onFocus={onFocus}
          onBlur={() => onBlur(schema, value)}
          type="text"
          className="rounded-[10px] text-black w-full px-5 py-[14px] lg:w-[360px]"
          placeholder="Correo Electronico"
        />
      </div>
    </>
  );
};
