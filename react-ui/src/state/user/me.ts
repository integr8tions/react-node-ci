import { atom } from "recoil";

const meState = atom({
  key: "me",
  default: null,
  // @ts-ignore
  persistence_UNSTABLE: { type: true },
});

export default meState;
