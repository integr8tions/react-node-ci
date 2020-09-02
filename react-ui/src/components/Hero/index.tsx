import React from "react";
import Container from "components/atoms/Container";
import HeroBG from "components/atoms/Picture";

import "./styles.scss";

interface HeroProps {
  title: string;
  subtitle: string;
  background?: React.ReactNode;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  children,
  title,
  subtitle,
  background = HeroBG,
  className,
}) => {
  return (
    <div className={`hero ${className || ""}`}>
      {background}
      <Container largePaddings>
        <h1>{title}</h1>
        {children}
        <p>{subtitle}</p>
      </Container>
    </div>
  );
};

export default Hero;
