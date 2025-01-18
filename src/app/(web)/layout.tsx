import { Layout } from "@/components/layout";
import { WebNav } from "@/components/web_nav";
import { LayoutType } from "@/types/layout.types";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  const webNav = () => <WebNav type={LayoutType.SECONDARY} />;

  return <Layout nav={webNav}>{children}</Layout>;
}
