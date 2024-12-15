import { Card } from "@/components/card";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(/images/home.png)" }}
        ></div>

        <div className="flex flex-col gap-76 absolute w-full h-full">
          <div className="flex flex-col gap-7 py-75 px-50 w-full z-10">
            <p className="md:w-418 w-190 text-white text-5xl font-open">
              De ahora en adelante, hacés más con tu dinero
            </p>
            <p className="md:text-27 text-secondary text-36 font-open">
              Tu nueva <b>billetera virtual</b>
            </p>
          </div>

          <div className="bg-secondary rounded-t-30 absolute inset-x-0 bottom-0 z-0 pt-28 pb-16"></div>

          <div className="relative z-10 max-w-screen-xl mx-auto flex w-full justify-center gap-13 flex-wrap py-16">
            <Card title="Transferí dinero">
              Desde Digital Money House vas a poder transferir dinero a otras
              cuentas, así como también recibir transferencias y nuclear tu
              capital en nuestra billetera virtual.
            </Card>
            <Card title="Pago de servicios">
              Pagá mensualmente los servicios en 3 simples clics. Fácil, rápido
              y conveniente. Olvidate de las facturas en papel.
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
