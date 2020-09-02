import React from "react";
import { Redirect } from "react-router-dom";
import Button, { ButtonVariant } from "components/atoms/Button";
import HeroBlock from "components/Hero";
import HeroBG from "components/atoms/Picture";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getSuccessNotification } from "types/notification";
import userAtoms from "state/user";
import notificationState from "state/notification/list";

import { login } from "api";

import "./styles.scss";

const Login = () => {
  const [me, setMe] = useRecoilState(userAtoms.me);
  const setNotificationList = useSetRecoilState(notificationState);

  async function handleLogin() {
    const result = await login();

    if (result) {
      setNotificationList((notifications) => [
        ...notifications,
        getSuccessNotification("You have logged in successfully!"),
      ]);

      setMe(result.data);
    }
  }

  if (me) {
    return <Redirect to="/orders" />;
  }

  return (
    <div className="content">
      <HeroBlock className="login" title="Log in to your Account" subtitle="" background={HeroBG}>
        <Button type="submit" variant={ButtonVariant.Secondary} onClick={handleLogin}>
          Log in
        </Button>
      </HeroBlock>
    </div>
  );
};

export default Login;
