export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.message = message;
      this.name = "NotFoundError";
    }
  }
  