import React from "react";

import LogOutButton from "components/LogOutButton";
import Container from "components/atoms/Container";
import OrderList from "components/Order/List";
import Button, { ButtonVariant } from "components/atoms/Button";

import "./styles.scss";

function Orders() {
  return (
    <div className="content">
      <div className="orders">
        <div className="heading">
          <h2>My Orders</h2>
          <LogOutButton />
        </div>
        <OrderList />
      </div>
      <div className="about">
        <Container>
          <h2>We create groundbreaking technology that is friendly, caring and more human</h2>
          <Button asLink variant={ButtonVariant.Secondary}>
            Discover More
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Orders;
