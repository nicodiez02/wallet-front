import Link from "next/link";
import React from "react";

export enum ButtonType {
  PRINCIPAL,
  SECONDARY,
}

export enum ButtonElement {
  Ancor,
  Button,
}

interface ButtonProps {
  text: string;
  type: ButtonType;
  fontBold: boolean;
  element: ButtonElement;
  link?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  fontBold,
  link,
  element,
}) => {
  const style: Record<ButtonType, string> = {
    [ButtonType.PRINCIPAL]: "border border-secondary rounded-md text-secondary",
    [ButtonType.SECONDARY]: "border text-principal bg-secondary rounded-md border-transparent",
  };
  const styles = `leading-10 px-5 h-10 ${style[type]} ${fontBold ? "font-bold" : ""}`;

  const render: Record<ButtonElement, JSX.Element> = {
    [ButtonElement.Ancor]: <Link href={link ?? "/"} className={styles}>{text}</Link>,
    [ButtonElement.Button]: <button className={styles}>{text}</button>,
  };

  return render[element];
};
