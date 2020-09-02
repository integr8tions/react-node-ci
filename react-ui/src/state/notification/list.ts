import { atom } from "recoil";
import { NotificationList } from "types/notification";

const notificationListState = atom({
  key: "notificationList",
  default: [] as NotificationList,
});

export default notificationListState;
