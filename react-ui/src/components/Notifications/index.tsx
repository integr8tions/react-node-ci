import React from "react";

import useNotifications from "./hooks";
import "./styles.scss";

// Can be refactored as dynamic settings
const TIME_INTERVAL = 1500;
const AUTO_DELETE = true;
const POSITION = "top-right";

const Notifications = () => {
  const { notifications, closeNotification } = useNotifications(AUTO_DELETE, TIME_INTERVAL);

  return (
    <>
      <div className={`notification-container ${POSITION}`}>
        {notifications.map(({ type, description }, i: number) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`notification-${i}`}
            className={`notification ${POSITION} ${type}`}
          >
            <div>
              <p className="notification-message">{description}</p>
            </div>
            <button type="button" onClick={() => closeNotification(i)}>
              <span>Close</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notifications;
