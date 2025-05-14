import { useState } from "react";
export const usePayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [showCardNumber, setShowCardNumber] = useState(false);

  const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const formattedValue = digitsOnly.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue.substring(0, 19);
  };

  const formatExpiration = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length > 2) {
      return `${digitsOnly.substring(0, 2)}/${digitsOnly.substring(2, 4)}`;
    }

    return digitsOnly;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiration(e.target.value);
    setExpiration(formattedValue);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setCvv(digitsOnly.substring(0, 3));
  };

  return {
    cardNumber,
    expiration,
    cvv,
    showCardNumber,
    handleCardNumberChange,
    handleExpirationChange,
    handleCvvChange,
    setShowCardNumber,
    setCardNumber,
    setExpiration,
    setCvv,
  };
};
