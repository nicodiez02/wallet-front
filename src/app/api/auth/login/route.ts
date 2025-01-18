import { AccessDeniedError } from "@/error/access-denied.class";
import { HttpError } from "@/error/http-custom.class";
import { NotFoundError } from "@/error/notfound.class";
import { RedisError } from "@/error/redis.class";
import { http } from "@/services/http.service";
import { Client } from "@/services/redis.service";
import { LOGIN_ERRORS, REDIS_REFUSE, UNEXPECTED } from "@/types/errors.messages";
import { Credentials, Token } from "@/types/user.type";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const ONE_MINUTE = 60;

export async function POST(request: NextRequest) {
  const body: Credentials = await request.json();
  const { email } = body;
  let client;

  try {
    const redis = new Client();
    client = await redis.connect();

    const http_service = new http();
    const response = await http_service.postPublic<Token, Credentials>("/login", body);
    const token = response.token;
    const sessionId = uuidv4();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + ONE_MINUTE * 1000).toUTCString();
    const cookie = `AuthCookie=${sessionId}; Domain=localhost; Secure; HttpOnly; Expires=${expiresAt}; Path=/`;

    await client.set(sessionId, token, { EX: ONE_MINUTE });
    return new Response(JSON.stringify(email), {
      status: 200,
      headers: { "Set-Cookie": cookie },
    });
  } catch (error) {
    if (error instanceof RedisError) {
      return new Response(REDIS_REFUSE, {
        status: 503,
      });
    }

    if (error instanceof HttpError) {
      const status = error.status;
      return new Response(UNEXPECTED, {
        status,
      });
    }

    return new Response(UNEXPECTED, {
      status: 500,
    });
  } finally {
    if (client) client.disconnect();
  }
}

export async function GET(request: Request) {
  let client;

  try {
    const redis = new Client();
    client = await redis.connect();

    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key") ?? "";
    const token = await client.get(key);
    if (!token) throw new Error("Session Expired");
    console.log("🚀 ~ GET ~ token:", token);

    return NextResponse.json({ token });
  } catch (error) {
    if (error instanceof RedisError) {
      return new Response(REDIS_REFUSE, {
        status: 503,
      });
    }

    return new Response("Unexpected error", {
      status: 500,
    });
  } finally {
    if (client) client.disconnect();
  }
}
