import React, { FC } from "react";

import Button, { ButtonVariant } from "components/atoms/Button";
import { Order } from "types/order";

export const CANCELLED_STATUS = "cancelled";

interface OrderItemProps {
  item: Order;
  handleCancel: () => void;
}

const OrderItem: FC<OrderItemProps> = ({ item, handleCancel }) => {
  const { id, ref, status } = item;

  const renderCancelButton = () => {
    if (status === CANCELLED_STATUS) {
      return null;
    }

    return (
      <Button variant={ButtonVariant.Link} onClick={handleCancel}>
        Cancel
      </Button>
    );
  };

  return (
    <div key={id} className="row">
      <p>
        <span className="mobile-visible"> ID: </span>
        {id}
      </p>
      <p>
        <span className="mobile-visible"> Ref: </span>
        {ref}
      </p>
      <p>
        <span className="mobile-visible"> Status: </span>
        <span className={`status ${status}`}>{status}</span>
      </p>
      {renderCancelButton()}
    </div>
  );
};

export default OrderItem;
