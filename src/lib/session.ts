import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export const verifySession = cache(async () => {
  const session = (await cookies()).get("session")?.value;

  if (!session) {
    return null;
  }

  return session;
});

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;

  if (!session) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
