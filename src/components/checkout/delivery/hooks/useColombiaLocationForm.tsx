import { useState } from "react";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { z } from "zod";

export const addressSchema = z
  .string()
  .min(3, { message: "Por favor, ingresa tu dirección" })
  .max(50);

export function useColombiaLocationForm(
  departmentsAndCities: DepartmentAndCities[] | undefined
) {
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const departmentOptions =
    departmentsAndCities?.map((d) => d.departamento) || [];

  const cityOptions =
    departmentsAndCities?.find((d) => d.departamento === department)
      ?.ciudades || [];

  const neighborhoodOptions = city ? [city] : [];

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    setCity("");
    setNeighborhood("");
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    setNeighborhood("");
  };

  const handleNeighborhoodChange = (value: string) => {
    setNeighborhood(value);
  };

  const handleOnBlurAddress = () => {
    const result = addressSchema.safeParse(address);
    if (!result.success) {
      setErrorAddress(result.error.issues[0].message);
    } else {
      setErrorAddress("");
    }
  };

  return {
    department,
    setDepartment: handleDepartmentChange,
    departmentOptions,
    city,
    setCity: handleCityChange,
    cityOptions,
    neighborhood,
    setNeighborhood: handleNeighborhoodChange,
    neighborhoodOptions,
    address,
    setAddress,
    errorAddress,
    setErrorAddress,
    handleOnBlurAddress,
    apartment,
    setApartment,
  };
}
