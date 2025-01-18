import { AccountCreated, Credentials, NewAccount, Token } from "@/types/user.type";
import { http } from "./http.service";

export class User {
  async login(credentials: Credentials): Promise<Token> {
    const http_service = new http();
    const response = http_service.postPrivate<Token, Credentials>("/auth/login", credentials);
    return response;
  }
  async register(data: NewAccount): Promise<AccountCreated> {
    const http_service = new http();
    const response = await http_service.postPublic<AccountCreated, NewAccount>("/users", data);

    return response;
  }
}
