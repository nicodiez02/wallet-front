"use client";
import { Error } from "@/components/error";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { User } from "@/services/user.service";
import { Credentials } from "@/types/user.type";
import { EMAIL, LOGIN_ERRORS, PASSWORD, UNEXPECTED } from "@/types/errors.messages";
import { ButtonElement, ButtonProps, ButtonType } from "@/components/button";
import { OneStepForm } from "@/components/form/OneStepForm";
import { Password, PasswordProps } from "@/components/form/Password";
import { Email, EmailProps } from "@/components/form/Email";
import { useRouter } from "next/navigation"; // Importa el hook
import { HttpError } from "@/error/http-custom.class";

const EMAIL_TITLE = "¡Hola! Ingresá tu e-mail";
const PASSWORD_TITLE = "Ingresá tu clave";

export default function Login() {
  const methods = useForm<Credentials>();
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { handleSubmit } = methods;
  const swiperRef = useRef<SwiperCore | null>(null);
  const router = useRouter(); // Usa el hook aquí

  const onSubmit = async (data: Credentials) => {
    try {
      setDisabled(true);

      const user = new User();
      await user.login(data);
      setMessage("");

      router.push("/");
    } catch (error) {
      if (error instanceof HttpError) {
        setMessage(LOGIN_ERRORS[error.status] ?? UNEXPECTED);
        return;
      }

      setMessage(UNEXPECTED);
    } finally {
      setDisabled(false);
    }
  };

  const next = () => swiperRef?.current?.slideNext();
  const email = (props: EmailProps) => <Email {...props} />;
  const password = (props: PasswordProps) => <Password {...props} />;
  const submit: ButtonProps = { type: ButtonType.SECONDARY, element: ButtonElement.Button, fontBold: true, text: "Ingresar", onClick: handleSubmit(onSubmit) };
  const button: ButtonProps = { type: ButtonType.SECONDARY, element: ButtonElement.Button, fontBold: false, text: "Continuar", onClick: next };
  const createAccount: ButtonProps = { type: ButtonType.TERCIARY, element: ButtonElement.Ancor, link: "/register", text: "Crear Cuenta", fontBold: true };

  return (
    <div className="flex items-center justify-center p-45 flex-col min-h-screen gap-4">
      <FormProvider {...methods}>
        <form className="flex flex-col gap-4 w-full">
          <Swiper style={{ width: "100%", height: "100%" }} slidesPerView={1} onSwiper={(swiper) => (swiperRef.current = swiper)} allowTouchMove={false}>
            <SwiperSlide>
              <SwiperSlide>
                <OneStepForm title={EMAIL_TITLE} input={email} button={[button, createAccount]} error={EMAIL} />
              </SwiperSlide>
            </SwiperSlide>

            <SwiperSlide>
              <OneStepForm disabled={disabled} title={PASSWORD_TITLE} input={password} button={submit} error={PASSWORD} />
              <Error message={message} />
            </SwiperSlide>
          </Swiper>
        </form>
      </FormProvider>
    </div>
  );
}
