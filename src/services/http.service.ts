import { HttpBase } from "./http.base.service";

const PUBLIC_API = "https://digitalmoney.digitalhouse.com/api";
const PRIVATE_API = "http://localhost:3000/api";

export class http extends HttpBase {
  constructor() {
    super(PUBLIC_API, PRIVATE_API);
  }
}
