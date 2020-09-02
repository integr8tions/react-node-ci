import { deleteOrderById } from "api";
import { replaceItemAtIndex } from "utils/functions";
import { Order, OrderList } from "types/order";
import { CANCELLED_STATUS } from "../../Item";

const useOrderCancel = (orders: OrderList, setOrders: any) => {
  return (item: Order, index: number): void => {
    const { id, status } = item;

    if (status !== CANCELLED_STATUS) {
      deleteOrderById(id);
      // Updating status to cancelled, as it seems better than just deleting the whole order
      const newList = replaceItemAtIndex(orders, index, {
        ...item,
        status: CANCELLED_STATUS,
      });
      setOrders(newList);
    }
  };
};

export default useOrderCancel;
