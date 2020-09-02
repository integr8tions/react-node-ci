import { OrderList, Order } from "types/order";

export interface UseOrderReturnType {
  orders: OrderList;
  handleCancel: (item: Order, index: number) => void;
  isLoading: boolean;
  showError: boolean;
}
