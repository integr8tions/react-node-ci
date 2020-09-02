/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useCallback, memo } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useRecoilValue } from "recoil";

import userAtoms from "state/user";

// eslint-disable-next-line react/display-name
const RoutePrivate: FC<any> = memo(({ component: RouteComponent, componentProps, ...rest }) => {
  const me = useRecoilValue(userAtoms.me);
  const renderComponent = useCallback(
    (props: RouteComponentProps) => {
      if (!RouteComponent) return null;

      return <RouteComponent {...props} {...componentProps} />;
    },
    [RouteComponent, componentProps],
  );

  if (!me) {
    return <Redirect to="/login" />;
  }

  return <Route render={renderComponent} {...rest} />;
});

export default RoutePrivate;
