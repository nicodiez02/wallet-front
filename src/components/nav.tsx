import { LayoutType } from "@/types/layout.types";
import Image from "next/image";
import React from "react";
import { Button, ButtonElement, ButtonType } from "@/components/button";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Nav: React.FC<{ type: LayoutType }> = async ({ type }) => {
  const cookiesStore = await cookies();
  const isLogin = cookiesStore.get("AuthCookie");
  const image = {
    [LayoutType.PRIMARY]: "/images/logo.png",
    [LayoutType.SECONDARY]: "/images/logo2.png",
  };

  const background = {
    [LayoutType.PRIMARY]: "bg-primary",
    [LayoutType.SECONDARY]: "bg-secondary",
  };

  const logout = () => {
    cookiesStore.set("AuthCookie", "", { expires: new Date(0) });
    redirect("/");
  };

  return (
    <nav className={`flex justify-between w-full ${background[type]} p-3 z-20`}>
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src={image[type]} alt="logo digital money" width={87} height={34} style={{ flexShrink: 0 }} priority />
        </Link>
      </div>

      {!isLogin && (
        <div className="flex justify-between gap-2.5">
          <Button link="/login" type={ButtonType.PRIMARY} fontBold={true} fontSize="text-sm" element={ButtonElement.Ancor} width="w-fit" text="Ingresar" />
          <Button fontSize="text-sm" element={ButtonElement.Ancor} link="/register" type={ButtonType.SECONDARY} fontBold={true} width="w-fit" text="Crear cuenta" />
        </div>
      )}
    </nav>
  );
};
