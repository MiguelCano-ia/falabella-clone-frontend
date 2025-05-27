"use server";

import { redirect } from "next/navigation";

export async function searchAction() {
  return redirect("/falabella-co/products/tecnologia");
}
