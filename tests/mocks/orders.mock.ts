import { productsMock } from "./products.mocks";

export const ordersMock = [
  {
    id: 1,
    purchase_date: new Date("2023-01-01"),
    total_price: "5000",
    payment_status: "pending",
    payment_id: "1234567890",
    products: [
      {
        id: 1,
        quantity: 1,
        unit_price: "1000",
        product: productsMock[0],
      },
    ],
  },
];
