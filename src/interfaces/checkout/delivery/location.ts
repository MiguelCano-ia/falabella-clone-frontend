export interface Location {
  results: Result[];
  status: string;
}

export interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  partial_match?: boolean;
  navigation_points: NavigationPoint[];
  place_id: string;
  plus_code: PlusCode;
  types: string[];
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Geometry {
  location: NortheastClass;
  location_type: string;
  viewport: Viewport;
}

export interface NortheastClass {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: NortheastClass;
  southwest: NortheastClass;
}

export interface NavigationPoint {
  location: NavigationPointLocation;
}

export interface NavigationPointLocation {
  latitude: number;
  longitude: number;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}
