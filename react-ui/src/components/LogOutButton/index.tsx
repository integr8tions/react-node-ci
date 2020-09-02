import React from "react";

import Button, { ButtonVariant } from "components/atoms/Button";
import useLogout from "./hooks";

const LogOutButton: React.FC = () => {
  const { me, handleLogout } = useLogout();

  if (!me) return null;

  return (
    <Button variant={ButtonVariant.Link} onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogOutButton;
