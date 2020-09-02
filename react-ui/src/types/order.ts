const ORDER_STATUS_PAID = "paid";
const ORDER_STATUS_CANCELLED = "cancelled";
const ORDER_STATUS_WIP = "in-progress";

export const OrderStatuses = { ORDER_STATUS_PAID, ORDER_STATUS_WIP, ORDER_STATUS_CANCELLED };

export type OrderItem = {
  sku: string;
  name: string;
  amount: number;
};

export type Discount = {
  name: string;
  type: string;
  value: number;
};

export type StatusType = "paid" | "cancelled" | "in-progress";

export interface Order {
  id: number;
  ref: string;
  status: StatusType;
  tracking?: {
    carrier: string;
    trackingCode: string;
    status: string;
  };
  items: OrderItem[];
  discounts?: Discount[];
}

export type OrderList = Order[];
