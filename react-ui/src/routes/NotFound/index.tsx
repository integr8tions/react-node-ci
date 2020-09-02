import React from "react";
import Button from "components/atoms/Button";
import Container from "components/atoms/Container";

import "./styles.scss";

function Home() {
  return (
    <Container className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Button asLink to="/">
        Go to Homepage
      </Button>
    </Container>
  );
}

export default Home;
