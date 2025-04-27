import "server-only";

import { UserData } from "@/interfaces/auth/user";
import { verifySession } from "@/lib/session";
import { cache } from "react";

export const getUser = cache(async (): Promise<UserData | null> => {
  const session = await verifySession();
  if (!session) {
    return null;
  }

  try {
    const user = await fetch(`${process.env.API_URL}/profile`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    }).then((res) => res.json());

    if (user.message) {
      return null;
    }

    return user;
  } catch {
    console.log("Failed to fetch user");
    return null;
  }
});
