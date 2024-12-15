import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
}

const mobile = "w-full";
const desktop = "md:w-[500px]";

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      className={`p-30 rounded-30 bg-white flex flex-col gap-[12px] ${mobile} ${desktop}`}
    >
      <h3 className="text-[40px] font-bold text-black">{title}</h3>
      <hr className="border-secondary border-2" />
      <p className="text-[20px] text-black">{children}</p>
    </div>
  );
};
