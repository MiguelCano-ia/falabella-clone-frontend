"use server";

import { Location } from "@/interfaces/checkout/delivery/location";

export async function getLocationAction(_: unknown, formData: FormData) {
  const address = formData.get("address") as string;

  if (!address) {
    return { coords: undefined };
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GEOCODING_API_KEY}`
    );
    const data: Location = await response.json();
    return {
      coords: data.results[0].geometry.location,
      partialMatch: data.results[0]?.partial_match || false,
    };
  } catch {
    return { error: "No se pudo obtener la ubicación, intenta nuevamente." };
  }
}
