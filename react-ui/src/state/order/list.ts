import { atom } from "recoil";
import { OrderList } from "types/order";

const roomListState = atom({
  key: "orderList",
  default: [] as OrderList,
});

export default roomListState;
