class CustomError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class HttpError extends CustomError {
  constructor(message: string, status: number) {
    super(message, status);
  }
}
