import { useValidation } from "@/hooks/useValidation";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { schemas } from "@/types/schemas";
import { Inputs, Status } from "@/types/form.types";

export type InputAttributes = {
  type: string;
  placeholder: string;
  name: Exclude<keyof typeof Inputs, "repeat_password">;
};

export interface InputProps {
  attributes: InputAttributes;
  useFormHandler?: boolean;
  statusHandler?: (status: Status) => void;
}

export const Input: React.FC<InputProps> = ({ useFormHandler, attributes, statusHandler }) => {
  const { name, type, placeholder } = attributes;
  const schema = schemas[name];
  const { register, watch, formState } = useFormContext();
  const { onBlur, onFocus, status } = useValidation();
  const error = useMemo(() => (status === "INVALID" ? "border-solid border border-red-500" : ""), [status]);
  const value: string = watch(name);

  useEffect(() => {
    if (statusHandler) {
      statusHandler(status);
    }
  }, [status]);

  useEffect(() => {
    if (formState.isSubmitted) {
      onBlur(schema, value);
    }
  }, [formState]);

  return (
    <>
      <div className="flex flex-col gap-2 w-full lg:w-[360px] lg:items-center">
        <input
          {...register(name)}
          onFocus={onFocus}
          onBlur={() => onBlur(schema, value)}
          type={type}
          className={`px-5 py-[14px] rounded-[10px] px-5 text-black w-full lg:w-[360px] ${error}`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
