import { useEffect } from "react";
import { useRecoilState } from "recoil";

import notificationListState from "state/notification/list";
import removeItemAtIndex from "utils/functions";

const useNotifications = (autoDelete: boolean, dismissTime: number) => {
  const [notifications, setNotificationList] = useRecoilState(notificationListState);

  const closeNotification = (id: number) => {
    setNotificationList(removeItemAtIndex(notifications, id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && notifications.length) {
        closeNotification(0);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications, autoDelete, dismissTime]);

  return { notifications, closeNotification };
};

export default useNotifications;
