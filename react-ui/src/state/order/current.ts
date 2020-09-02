import { atom } from "recoil";

const roomCurrentState = atom({
  key: "orderCurrent",
  default: null,
});

export default roomCurrentState;
