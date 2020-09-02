import React from "react";
import { render, act } from "@testing-library/react";
import { Order } from "types/order";
import mockOrders from "api/mock/data";
import OrderItem from "./index";

const handleCancel = jest.fn();
const item: Order = mockOrders[0];

describe("OrderItem component", () => {
  it("should render item props", () => {
    const { getByText } = render(<OrderItem item={item} handleCancel={handleCancel} />);
    const ref = getByText(item.ref);
    const status = getByText(item.status);

    expect(ref).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });

  it("should be possible to cancel order, when status isn't already cancelled", () => {
    const { queryByText } = render(<OrderItem item={item} handleCancel={handleCancel} />);
    const cancelButton = queryByText("Cancel");
    expect(cancelButton).toBeInTheDocument();

    act(() => {
      cancelButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it("does not render cancel button when status is cancelled", () => {
    const { queryByText } = render(
      <OrderItem item={{ ...item, status: "cancelled" }} handleCancel={handleCancel} />,
    );

    const cancelButton = queryByText("Cancel");
    expect(cancelButton).not.toBeInTheDocument();
  });
});
