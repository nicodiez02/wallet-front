import { LayoutType } from "@/types/layout.types";
import Image from "next/image";
import React from "react";

export const WebNav: React.FC<{ type: LayoutType }> = ({ type }) => {
  const image = {
    [LayoutType.PRIMARY]: "/images/logo.png",
    [LayoutType.SECONDARY]: "/images/logo2.png",
  };

  const background = {
    [LayoutType.PRIMARY]: "bg-primary",
    [LayoutType.SECONDARY]: "bg-secondary",
  };

  return (
    <>
      <nav className={`flex justify-between w-full ${background[type]} p-3 z-20`}>
        <div className="flex items-center">
          <Image src={image[type]} alt="logo digital money" width={87} height={34} style={{ flexShrink: 0 }} priority />
        </div>
      </nav>
    </>
  );
};
