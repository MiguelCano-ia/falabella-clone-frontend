export interface Address {
  message: string;
  addresses: AddressElement[];
}

export interface AddressElement {
  address_id: number;
  department: string;
  city: string;
  via: null;
  primary_number: null;
  complement_1: string;
  complement_2: null;
  neighborhood: string;
  reference: null | string;
  is_favorite: boolean;
  created_at: Date;
  updated_at: Date;
}
