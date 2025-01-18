import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { schemas } from "@/types/schemas";
import { Inputs, Status } from "@/types/form.types";
import { useValidation } from "@/hooks/useValidation";

export interface PasswordProps {
  useFormHandler?: boolean;
  statusHandler?: (status: Status) => void;
}

export const Password: React.FC<PasswordProps> = ({ useFormHandler, statusHandler }) => {
  const schema = schemas[Inputs.password];
  const { register, watch } = useFormContext();
  const { onBlur, onFocus, status, message } = useValidation();
  const value: string = watch(Inputs.password);

  useEffect(() => {
    if (statusHandler) {
      statusHandler(status);
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col gap-2 w-full lg:items-center">
        <input
          {...register(Inputs.password)}
          onFocus={onFocus}
          onBlur={() => onBlur(schema, value)}
          type="password"
          className="rounded-[10px] text-black lg:w-[360px] w-full px-5 py-[14px]"
          placeholder="......"
        />
      </div>
    </>
  );
};
