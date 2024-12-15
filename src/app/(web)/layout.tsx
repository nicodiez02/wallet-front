import { Layout } from "@/components/layout"; // El layout que usas también en `(web)`
import { LayoutType } from "@/types/layout.types"; // Si lo usas para definir tipos

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout type={LayoutType.SECONDARY}> {/* Layout para rutas en /web/* */}
      {children}
    </Layout>
  );
}
