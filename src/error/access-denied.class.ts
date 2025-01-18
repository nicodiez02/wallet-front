export class AccessDeniedError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = "AccessDeniedError";
  }
}
