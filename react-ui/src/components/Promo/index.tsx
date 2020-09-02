import React, { ReactNode, FC } from "react";
import Container from "components/atoms/Container";

import "./styles.scss";

interface PromoProps {
  title: string;
  subtitle: string;
  top?: ReactNode;
  main: ReactNode;
  button?: ReactNode;
}

const Promo: FC<PromoProps> = ({ button, title, subtitle, top, main }) => {
  return (
    <Container className="promo" largePaddings>
      <div>
        {top}
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {button}
      </div>
      <div>{main}</div>
      {button}
    </Container>
  );
};

export default Promo;
