import { LayoutType } from "@/types/layout.types";
import React, { PropsWithChildren } from "react";
import { Nav } from "./nav";

interface LayoutProps extends PropsWithChildren {
  type?: LayoutType;
}

export const Layout: React.FC<LayoutProps> = ({ children, type }) => {
  return (
    <>
      <Nav type={type ?? LayoutType.PRIMARY} />

      <main className="flex-1 z-10 relative">{children}</main>

      <footer className="flex p-5 justify-between w-full bg-terciary z-10">
        <p className="text-secondary text-sm">© 2022 Digital Money House</p>
      </footer>
    </>
  );
};
