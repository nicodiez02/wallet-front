import { AccessDeniedError } from "@/error/access-denied.class";
import { HttpError } from "@/error/http-custom.class";
import { NotFoundError } from "@/error/notfound.class";

export class HttpBase {
  protected publicAPI: string = "";
  protected privateAPI: string = "";

  constructor(publicAPI: string, privateAPI: string) {
    this.publicAPI = publicAPI;
    this.privateAPI = privateAPI;
  }

  async getPrivate<T>(endpoint: string, params: URLSearchParams): Promise<T> {
    const response = await fetch(this.privateAPI + endpoint + "" + params);

    if (!response.ok) {
      throw new HttpError("Unexpected Error", response.status);
    }

    const json = response.json();
    return json;
  }

  async getPublic<T>(endpoint: string, params: URLSearchParams): Promise<T> {
    const response = await fetch(this.publicAPI + endpoint + "" + params);

    if (!response.ok) {
      throw new HttpError("Unexpected Error", response.status);
    }

    const json = response.json();
    return json;
  }

  async postPrivate<T, K>(endpoint: string, body: K): Promise<T> {
    const response = await fetch(this.privateAPI + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new HttpError("Unexpected Error", response.status);
    }

    const json = response.json();
    return json;
  }

  async postPublic<T, K>(endpoint: string, body: K): Promise<T> {
    const response = await fetch(this.publicAPI + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new HttpError("Unexpected Error", response.status);
    }

    const json = response.json();
    return json;
  }
}
