import { RedisError } from "@/error/redis.class";
import { createClient, RedisClientType } from "redis";

export class Client {
  protected client: RedisClientType;

  constructor(url?: string) {
    this.client = createClient({
      url: url ?? "redis://localhost:6379",
    });

    this.client.on("error", (err) => {
      throw new RedisError("Cannot create connection" + err);
    });
  }

  async connect() {
    try {
      await this.client.connect();
      return this.client;
    } catch (error) {
      throw new RedisError("Cannot connect to redis");
    }
  }

  disconnect() {
    this.client.disconnect();
  }

  getter() {
    return this.client;
  }
}
