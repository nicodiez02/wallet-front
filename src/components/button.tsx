import Link from "next/link";
import React, { MouseEventHandler, PropsWithChildren } from "react";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  TERCIARY,
}

export enum ButtonElement {
  Ancor,
  Button,
  Submit,
}

export interface ButtonProps {
  type: ButtonType;
  fontBold: boolean;
  text: string;
  element: ButtonElement;
  height?: string;
  leading?: string;
  fontSize?: string;
  width?: string;
  disabled?: boolean;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ type, text, fontSize, leading, disabled, fontBold, link, element, height, width, onClick }) => {
  const types: Record<ButtonType, string> = {
    [ButtonType.PRIMARY]: "border border-secondary rounded-[10px] text-secondary lg:w-[360px]",
    [ButtonType.SECONDARY]: "border text-primary bg-secondary rounded-[10px] border-transparent lg:w-[360px]",
    [ButtonType.TERCIARY]: "border text-primary bg-white rounded-[10px] border-transparent lg:w-[360px]",
  };
  const styles = `text-center ${width ?? "w-full"} ${fontSize ?? ""} ${leading ?? ""} px-5 py-[14px] ${height ?? ""} ${types[type]} ${fontBold ? "font-bold" : ""}`;

  const render: Record<ButtonElement, JSX.Element> = {
    [ButtonElement.Ancor]: (
      <Link href={link ?? "/"} className={styles}>
        {text}
      </Link>
    ),
    [ButtonElement.Button]: (
      <button type="button" disabled={disabled ?? false} onClick={onClick ? onClick : undefined} className={styles}>
        {text}
      </button>
    ),
    [ButtonElement.Submit]: (
      <button disabled={disabled ?? false} type="submit" className={styles}>
        {text}
      </button>
    ),
  };

  return render[element];
};
