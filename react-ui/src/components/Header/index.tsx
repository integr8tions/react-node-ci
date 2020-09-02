import React, { FC } from "react";

import LinkTo from "components/atoms/NavLink";
import Container from "components/atoms/Container";
import { EmbraceLogo } from "components/atoms/Picture";
import useLocationForHP from "./hooks";

import "./styles.scss";

const Footer: FC = () => {
  const isHidden = useLocationForHP();

  if (isHidden) return null;

  return (
    <header>
      <Container>
        <LinkTo to="/">{EmbraceLogo}</LinkTo>
      </Container>
    </header>
  );
};

export default Footer;
