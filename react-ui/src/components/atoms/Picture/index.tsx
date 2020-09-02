import React from "react";

import hero375 from "assets/images/homepage_hero-sm-xhdpi.jpg";
import hero720 from "assets/images/homepage_hero-lg-hdpi.jpg";
import hero1440 from "assets/images/homepage_hero-lg-xhdpi.jpg";

import embraceLogo240 from "assets/images/embrace_logo-sm.svg";
import embraceLogo330 from "assets/images/embrace_logo.png";

import promo366 from "assets/images/embrace_front-xhdpi.jpg";

const HeroBG = (
  <picture>
    <source srcSet={hero1440} media="(min-width: 720px)" />
    <source srcSet={hero720} media="(min-width: 375px)" />
    <source srcSet={hero375} />
    <img alt="Hero" src={hero375} />
  </picture>
);

export const EmbraceLogo = (
  <picture className="logo">
    <source srcSet={embraceLogo330} media="(min-width: 768px)" />
    <source srcSet={embraceLogo240} />
    <img alt="Embrace Logo" src={embraceLogo240} loading="lazy" />
  </picture>
);

export const WatchPromo = (
  <picture className="embrace">
    <img alt="Embrace Watch" src={promo366} loading="lazy" />
  </picture>
);

export default HeroBG;
