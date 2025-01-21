import { Card } from "@/components/card";
import { Layout } from "@/components/layout";
import { Nav } from "@/components/nav";
import { LayoutType } from "@/types/layout.types";

export default function Home() {
  const homeNav = () => <Nav type={LayoutType.PRIMARY} />;

  return (
    <>
      <Layout nav={homeNav}>
        <div className="inset-0 absolute bg-cover bg-no-repeat bg-center bg-home-mobile lg:bg-home-desktop aspect-3/6 lg:aspect-9/4"></div>
        <div className="flex flex-col w-full gap-[114px] h-full inset-0">
          <div className="w-full z-10 pl-20 pt-44 pr-180 lg:pr-0 lg:pt-[75px] lg:mb-[76px] lg:pl-[50px] lg:flex lg:flex-col lg:gap-[28px]">
            <p className="hidden sm:block text-white text-27 lg:text-5xl font-semibold lg:font-light">
              De ahora en <br /> adelante, hacés <br /> más con tu dinero
            </p>
            <p className="block sm:hidden text-white text-27 lg:text-5xl font-semibold lg:font-light">
              De ahora <br /> en adelante,
              <br /> hacés más <br /> con tu dinero
            </p>

            <hr className="border-secondary border-t-4 w-25 my-17 lg:hidden" />

            
            <p className="hidden sm:block text-secondary text-21.5 lg:text-[34px]">
              Tu nueva <span className="font-semibold">billetera virtual</span>
            </p>
            <p className="block sm:hidden text-secondary text-21.5 lg:text-[34px]">
              Tu nueva <br/> <span className="font-semibold">billetera virtual</span>
            </p>

          </div>

          <div className="flex flex-col lg:flex-row lg:justify-center gap-4 z-10 px-18 bg-secondary rounded-t-30 pb-[19px] relative">
            <Card title="Transferí dinero" classes="relative mt-[-3.5rem] lg:mt-[-7rem]">
              <p className="block sm:hidden lg:mr-[18px]">
                Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.
              </p>
              <p className="hidden sm:block lg:mr-[18px]">
                Desde Digital Money House vas a poder <br /> transferir dinero a otras cuentas, así como <br /> también recibir transferencias y nuclear tu <br /> capital en nuestra billetera virtual.
              </p>
            </Card>

            <Card title="Pago de servicios" classes="lg:relative lg:mt-[-7rem]">
              <p className="block sm:hidden lg:mr-[18px]">Pagá mensualmente los servicios en 3 simples clics. Fácil, rápido y conveniente. Olvidate de las facturas en papel.</p>
              <p className="hidden sm:block lg:mr-[18px]">
                Pagá mensualmente los servicios en 3 <br /> simples clics. Fácil, rápido y conveniente. <br /> Olvidate de las facturas en papel.
              </p>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
