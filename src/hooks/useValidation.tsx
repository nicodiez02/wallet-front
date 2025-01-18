import { Status } from "@/types/form.types";
import { useEffect, useState } from "react";
import * as yup from "yup";


export const useValidation = () => {
  const [status, setStatus] = useState<Status>("FOCUS");
  const [message, setMessage] = useState<string | null>(null);

  const onFocus = () => {
    setStatus("FOCUS");
  };
  const onBlur = async <K,>(schema: yup.Schema<K>, value: K) => {
    try {
      await schema.validate(value);
      setStatus("VALID");

      return true;
    } catch (error) {
      const message = error as yup.ValidationError;
      setStatus("INVALID");
      setMessage(message.message);
      return false;
    }
  };

  return { onFocus, onBlur, message, status };
};
