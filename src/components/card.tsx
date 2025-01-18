import React, { CSSProperties, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  classes?: string;
}

const desktop = " lg:relative";

export const Card: React.FC<CardProps> = ({ title, classes, children }) => {
  return (
    <div className={`p-[20px] lg:py-[30px] lg:pl-[30px] lg:pr-[35px] rounded-30 bg-white inline-block ${desktop} ${classes}`}>
      <h3 className="text-[28px] font-open font-bold text-black">{title}</h3>
      <hr className="border-secondary border-2 my-[12px]" />
      <div className="text-[16px] text-black font-open">{children}</div>
    </div>
  );
};
