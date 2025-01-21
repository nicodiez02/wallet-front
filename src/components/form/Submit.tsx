import { FieldValues } from "react-hook-form";
import { Button, ButtonElement, ButtonProps, ButtonType } from "../button";

interface SubmitButtonProps {
  label: string;
  type: ButtonType;
  disabled?: boolean;
}

export const Submit = ({ label, type, disabled }: SubmitButtonProps) => {
  const commonConfig = { fontBold: true, element: ButtonElement.Submit, disabled: disabled ?? false, text: label };
  const config: Record<ButtonType, ButtonProps> = {
    [ButtonType.TERCIARY]: { ...commonConfig, type: ButtonType.TERCIARY },
    [ButtonType.PRIMARY]: { ...commonConfig, type: ButtonType.PRIMARY },
    [ButtonType.SECONDARY]: { ...commonConfig, type: ButtonType.SECONDARY },
  };

  return <Button {...config[type]} />;
};
