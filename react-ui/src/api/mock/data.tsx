import { Order } from "types/order";

const mockOrders: Order[] = [
  {
    id: 1,
    ref: "#ref-123",
    status: "paid",
    items: [{ sku: "123", name: "Watch", amount: 230 }],
  },
  {
    id: 2,
    ref: "#ref-333",
    status: "cancelled",
    items: [
      { sku: "333", name: "Cool Name", amount: 1000 },
      { sku: "44", name: "Cooler Name", amount: 55 },
    ],
  },
];

export default mockOrders;
