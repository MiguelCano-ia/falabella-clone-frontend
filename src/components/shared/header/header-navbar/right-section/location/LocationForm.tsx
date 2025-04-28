import { FloatingLabelSelect } from "./FloatingLabelSelect";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { useLocationStore } from "@/store/location/location.store";
import { useEffect } from "react";

interface Props {
  departmentsAndCities: DepartmentAndCities[] | undefined;
}

const getDepartments = (data: DepartmentAndCities[] | undefined) => {
  const departamentos = data?.map((deparment) => deparment.departamento);

  return departamentos;
};

const getCitiesByDeparment = (
  deparmentName: string,
  deparments: DepartmentAndCities[] | undefined
) => {
  const departamentoEncontrado = deparments?.find(
    (dep) => dep.departamento.toLowerCase() === deparmentName.toLowerCase()
  );

  if (departamentoEncontrado) {
    return departamentoEncontrado.ciudades;
  }

  return [];
};

export const LocationForm = ({ departmentsAndCities }: Props) => {
  const {
    selectedDepartment,
    selectedCity,
    selectedNeighborhood,
    setSelectedDepartment,
    setSelectedCity,
    setSelectedNeighborhood,
    loadLocationFromStorage,
  } = useLocationStore();

  useEffect(() => {
    loadLocationFromStorage();
  }, [loadLocationFromStorage]);

  return (
    <div className="space-y-8">
      <FloatingLabelSelect
        label="Departamento"
        placeholder="Ingresa un departamento"
        options={getDepartments(departmentsAndCities)}
        value={selectedDepartment}
        onValueChange={(value) => {
          setSelectedDepartment(value);
          setSelectedCity("");
          setSelectedNeighborhood("");
        }}
      />

      <FloatingLabelSelect
        label="Ciudad"
        placeholder="Ingresa una ciudad"
        options={getCitiesByDeparment(selectedDepartment, departmentsAndCities)}
        value={selectedCity}
        onValueChange={(value) => {
          setSelectedCity(value);
          setSelectedNeighborhood("");
        }}
        disabled={!selectedDepartment}
      />

      <FloatingLabelSelect
        label="Barrio"
        placeholder="Ingresa un barrio"
        options={selectedCity ? [selectedCity] : []}
        value={selectedNeighborhood}
        onValueChange={(value) => setSelectedNeighborhood(value)}
        disabled={!selectedCity}
      />
    </div>
  );
};
