import * as React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

export interface LinkToProps {
  to: string;
  className?: string;
}

const LinkTo: React.FC<LinkToProps> = ({ to, children, className }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

export default LinkTo;
