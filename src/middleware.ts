import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/falabella-co/myaccount/registration"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = (await cookies()).get("session")?.value;

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/falabella-co", req.nextUrl));
  }

  return NextResponse.next();
}
