import { useValidation } from "@/hooks/useValidation";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Inputs, Status } from "@/types/form.types";
import * as yup from "yup";

interface EmailProps {
  useFormHandler?: boolean;
  statusHandler?: (status: Status, message: string) => void;
}

export const RepeatPassword: React.FC<EmailProps> = ({ useFormHandler, statusHandler }) => {
  const { register, watch } = useFormContext();
  const value: string = watch(Inputs.repeat_password);
  const password: string = watch(Inputs.password);
  const schema = yup.string().oneOf([password], "Las contraseñas deben coincidir").required("La confirmación de contraseña es requerida");
  const { onBlur, onFocus, status, message } = useValidation();

  useEffect(() => {
    if (statusHandler) {
      statusHandler(status, message ?? "");
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <input
          {...register(Inputs.repeat_password)}
          onFocus={onFocus}
          onBlur={() => onBlur(schema, value)}
          type="password"
          className="rounded-[10px] text-black w-full px-5 py-[14px]"
          placeholder="Confirmar contraseña*"
        />
      </div>
    </>
  );
};
