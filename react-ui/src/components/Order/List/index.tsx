import React from "react";
import Container from "components/atoms/Container";
import { Order } from "types/order";
import OrderItem from "../Item";
import * as hooks from "./hooks";

function Orders() {
  const { useOrderList } = hooks;
  const { orders, handleCancel, isLoading, showError } = useOrderList();

  let message = null;

  if (showError) {
    message = "There has been an error, cannot retrieve orders";
  } else if (isLoading && !orders.length) {
    message = "Orders are loading..";
  } else if (!orders.length) {
    message = "There are no orders";
  }

  if (message) {
    return <Container>{message}</Container>;
  }

  return (
    <Container className="table">
      <div key="header-row" className="row">
        <p>ID</p>
        <p>Ref</p>
        <p>Status</p>
      </div>
      {orders.map((item: Order, key: number) => (
        <OrderItem
          key={`order-item${item.id}`}
          handleCancel={() => handleCancel(item, key)}
          item={item}
        />
      ))}
    </Container>
  );
}

export default Orders;
