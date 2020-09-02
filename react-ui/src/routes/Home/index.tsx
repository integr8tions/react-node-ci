import React from "react";
import Button, { ButtonVariant } from "components/atoms/Button";
import HeroBlock from "components/Hero";
import PromoBlock from "components/Promo";

import { EmbraceLogo, WatchPromo } from "components/atoms/Picture";

const PromoButton = <Button asLink>Discover Embrace Features</Button>;

function Home() {
  return (
    <>
      <HeroBlock
        title="Smart technology for people living with epilepsy"
        subtitle="Comes with a 30-day Free Trial Subscription"
      >
        <Button asLink variant={ButtonVariant.Secondary} to="/login">
          Buy Now
        </Button>
      </HeroBlock>
      <PromoBlock
        title="Your companion for epilepsy management"
        subtitle="The Embrace watch uses advances learning algorithms to indetify tonic-clonic seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis."
        top={EmbraceLogo}
        main={WatchPromo}
        button={PromoButton}
      />
    </>
  );
}

export default Home;
