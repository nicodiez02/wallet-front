export class RedisError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = "RedisError";
  }
}
