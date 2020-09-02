import { useRecoilState, useSetRecoilState } from "recoil";
import notificationState from "state/notification/list";
import { getSuccessNotification } from "types/notification";
import userAtoms from "state/user";

const useLogout = () => {
  const [me, setMe] = useRecoilState(userAtoms.me);
  const setNotificationList = useSetRecoilState(notificationState);

  const handleLogout = () => {
    setMe(null);

    setNotificationList((notifications) => [
      ...notifications,
      getSuccessNotification("You have logged out!"),
    ]);
  };

  return { me, handleLogout };
};

export default useLogout;
