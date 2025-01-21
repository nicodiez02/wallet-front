"use client";
import { Error } from "@/components/error";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { User } from "@/services/user.service";
import { Credentials } from "@/types/user.type";
import { NotFoundError } from "@/error/notfound.class";
import { EMAIL, PASSWORD, UNEXPECTED, USER_NOT_FOUND } from "@/types/errors.messages";
import { ButtonElement, ButtonProps, ButtonType } from "@/components/button";
import { SucessMessage } from "./success_message";
import { Email, EmailProps } from "@/components/form/Email";
import { Password, PasswordProps } from "@/components/form/Password";
import { OneStepForm } from "@/components/form/OneStepForm";
import { Input, InputProps } from "@/components/form/Common";
import { Inputs } from "@/types/form.types";
import { useRouter } from "next/navigation";

export const SuccesfulyRegistered = () => {
  const methods = useForm<Credentials>();
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { handleSubmit } = methods;
  const swiperRef = useRef<SwiperCore | null>(null);
  const router = useRouter();

  const onSubmit = async (data: Credentials) => {
    try {
      setDisabled(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    } finally {
      setDisabled(false);
    }
  };

  const next = () => swiperRef?.current?.slideNext();
  const submit: ButtonProps = { type: ButtonType.SECONDARY, element: ButtonElement.Button, onClick: handleSubmit(onSubmit), fontBold: true, text: "Ingresar" };
  const button: ButtonProps = { onClick: next, type: ButtonType.SECONDARY, element: ButtonElement.Button, fontBold: true, text: "Continuar" };

  const email = (props: EmailProps) => <Email {...props} />;
  const password = (props: PasswordProps) => <Password {...props} />;
  const code = (props: InputProps) => <Input {...props} attributes={{ type: "number", placeholder: "Código", name: Inputs.code }} />;

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Swiper style={{ width: "100%", height: "100%" }} slidesPerView={1} onSwiper={(swiper) => (swiperRef.current = swiper)} allowTouchMove={false}>
          <SwiperSlide>
            <SucessMessage heading="Registro Exitoso" button={{ ...button, onClick: next }}>
              <p className="text-md text-center">Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión.</p>
            </SucessMessage>
          </SwiperSlide>

          <SwiperSlide>
            <OneStepForm title={""} input={email} button={[button]} error={EMAIL} />
          </SwiperSlide>

          <SwiperSlide>
            <OneStepForm title={""} input={password} button={[button]} error={PASSWORD} />
          </SwiperSlide>

          <SwiperSlide>
            <OneStepForm disabled={disabled} title={""} input={code} button={[submit]} error={PASSWORD} />
            <Error message={message ?? ""} />
          </SwiperSlide>
        </Swiper>
      </form>
    </FormProvider>
  );
};
