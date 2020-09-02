/* eslint-disable react/button-has-type */
import React from "react";
import LinkTo from "components/atoms/NavLink";

import "./styles.scss";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Hollow = "hollow",
  Link = "link",
}

interface ButtonProps {
  variant?: ButtonVariant;
  asLink?: boolean;
  to?: string;
  type?: "button" | "submit";
  onClick?: (event?: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  asLink = false,
  variant = ButtonVariant.Primary,
  type = "button",
  to = "/",
  onClick,
}) => {
  const classname = `btn btn-${variant}`;
  if (asLink) {
    return (
      <LinkTo className={classname} to={to || "/"}>
        {children}
      </LinkTo>
    );
  }

  return (
    <button type={type} className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
