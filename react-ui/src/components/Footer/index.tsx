import React from "react";
import LinkTo from "components/atoms/NavLink";
import globeIcon from "assets/images/globe.png";

import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <LinkTo to="/company">
        <img alt="English" src={globeIcon} />
        <span>English (US)</span>
      </LinkTo>
      <div>
        <LinkTo to="/company">Company</LinkTo>
        <LinkTo to="/careers">Careers</LinkTo>
      </div>
      <p>© 2017 Empatica Inc. - ISO 13485 Cert. No. 9124.EPTC - All rights reserved</p>
    </footer>
  );
};

export default Footer;
