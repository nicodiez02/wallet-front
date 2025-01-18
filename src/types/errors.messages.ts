export const PASSWORD = "La contraseña debe contener números,letras y caracteres especiales";
export const EMAIL = "Correo electrónico invalido";
export const REQUIRED = "El campo es obligatorio";
export const USER_NOT_FOUND = "No pudimos encontrar el usuario, revise las credenciales";
export const UNEXPECTED = "Ha ocurrido un error inesperado, intentelo más tarde";
export const REDIS_REFUSE = "Redis Connection Refused";
export const NUMBER = "Este campo solo admite numeros";
export const STRING = "Este campo solo admite letras";
export const ALREADY_REGISTER = "El mail ya esta registrado";
export const INVALID_CREDENTIALS = "Credenciales Invalidas";

export const LOGIN_ERRORS: Record<number, string> = {
  [401]: INVALID_CREDENTIALS,
  [404]: USER_NOT_FOUND,
};
