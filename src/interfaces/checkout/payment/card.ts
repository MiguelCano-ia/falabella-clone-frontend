export interface CardData {
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  security_code: string;
  cardholder: {
    name: string;
    identification: {
      type: string;
      number: string;
    };
  };
}

export interface CardTokenResponse {
  id: string;
  first_six_digits: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
}
