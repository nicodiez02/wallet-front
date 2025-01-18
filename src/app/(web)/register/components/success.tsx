"use client";
import { Error } from "@/components/error";
import { MouseEventHandler, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { PasswordForm, EmailForm } from "../../login/components/";
import { User } from "@/services/user.service";
import { Credentials } from "@/types/user.type";
import { NotFoundError } from "@/error/notfound.class";
import { PASSWORD, UNEXPECTED, USER_NOT_FOUND } from "@/types/errors.messages";
import { Code } from "./code";
import { ButtonElement, ButtonProps, ButtonType } from "@/components/button";
import { SucessMessage } from "./success_message";
import { Password, PasswordProps } from "@/components/form/Password";
import { OneStepForm } from "@/components/form/OneStepForm";

export const SuccesfulyRegistered = () => {
  const methods = useForm<Credentials>();
  const [message, setMessage] = useState("");
  const { handleSubmit } = methods;
  const swiperRef = useRef<SwiperCore | null>(null);
  const onSubmit = async (data: Credentials) => {
    try {
      const user = new User();
      await user.login(data);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      if (error instanceof NotFoundError) {
        setMessage(USER_NOT_FOUND);
      } else {
        setMessage(UNEXPECTED);
      }
    }
  };

  const submit: ButtonProps = { type: ButtonType.SECONDARY, element: ButtonElement.Submit, fontBold: true, text: "Ingresar" };
  const button: ButtonProps = { type: ButtonType.SECONDARY, element: ButtonElement.Button, fontBold: true, text: "Continuar" };
  const next = () => swiperRef?.current?.slideNext();
  const password = (props: PasswordProps) => <Password {...props} />;

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
            <EmailForm button={[{ ...button, onClick: next }]} />
          </SwiperSlide>

          <SwiperSlide>
            <OneStepForm input={password} button={[{ ...button, onClick: next }]} error={PASSWORD} />
          </SwiperSlide>

          <SwiperSlide>
            <Code button={submit} />
            {<Error message={message ?? ""} />}
          </SwiperSlide>
        </Swiper>
      </form>
    </FormProvider>
  );
};
