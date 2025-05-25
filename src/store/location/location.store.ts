import { create } from "zustand";

interface LocationState {
  selectedDepartment: string;
  selectedCity: string;
  selectedNeighborhood: string;
  confirmedNeighborhood: string;
  setSelectedDepartment: (department: string) => void;
  setSelectedCity: (city: string) => void;
  setSelectedNeighborhood: (neighborhood: string) => void;
  saveLocation: () => void;
  loadLocationFromStorage: () => void;
}

export const useLocationStore = create<LocationState>((set, get) => ({
  selectedDepartment: "",
  selectedCity: "",
  selectedNeighborhood: "",
  confirmedNeighborhood: "",

  setSelectedDepartment: (department) =>
    set({ selectedDepartment: department }),
  setSelectedCity: (city) => set({ selectedCity: city }),
  setSelectedNeighborhood: (neighborhood) =>
    set({ selectedNeighborhood: neighborhood }),

  saveLocation: () => {
    if (typeof window !== "undefined") {
      const { selectedDepartment, selectedCity, selectedNeighborhood } = get();
      localStorage.setItem("selectedDepartment", selectedDepartment);
      localStorage.setItem("selectedCity", selectedCity);
      localStorage.setItem("selectedNeighborhood", selectedNeighborhood);

      set({ confirmedNeighborhood: selectedNeighborhood });
    }
  },

  loadLocationFromStorage: () => {
    if (typeof window !== "undefined") {
      const selectedDepartment =
        localStorage.getItem("selectedDepartment") || "";
      const selectedCity = localStorage.getItem("selectedCity") || "";
      const selectedNeighborhood =
        localStorage.getItem("selectedNeighborhood") || "";
      set({
        selectedDepartment,
        selectedCity,
        selectedNeighborhood,
        confirmedNeighborhood: selectedNeighborhood,
      });
    }
  },
}));
