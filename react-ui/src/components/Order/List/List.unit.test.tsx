import React from "react";
import { render } from "@testing-library/react";
import mockOrders from "api/mock/data";
import OrderList from "./index";
import * as hooks from "./hooks";

const handleCancel = jest.fn;

const mockedReturnValue = {
  orders: mockOrders,
  handleCancel,
  isLoading: false,
  showError: false,
};

const stateSpy = jest.spyOn(hooks, "useOrderList");

describe("OrderList component", () => {
  it("should render table with orders", () => {
    stateSpy.mockReturnValue(mockedReturnValue);
    const { queryAllByText } = render(<OrderList />);

    const rows = queryAllByText(/Status/i);

    expect(rows).toHaveLength(mockOrders.length + 1); // because header label row adds +1
  });

  it("should render loading message when api request is made", () => {
    stateSpy.mockReturnValue({ ...mockedReturnValue, orders: [], isLoading: true });
    const { getByText } = render(<OrderList />);

    const loadingMessage = getByText(/Orders are loading/i);

    expect(loadingMessage).toBeInTheDocument();
  });

  it("should render error message", () => {
    stateSpy.mockReturnValue({ ...mockedReturnValue, showError: true });
    const { getByText } = render(<OrderList />);

    const loadingMessage = getByText(/There has been an error/i);

    expect(loadingMessage).toBeInTheDocument();
  });

  it("should not render orders table if there arent any", () => {
    stateSpy.mockReturnValue({ ...mockedReturnValue, orders: [] });
    const { getByText, queryAllByText } = render(<OrderList />);

    const loadingMessage = getByText(/There are no orders/i);
    const rows = queryAllByText(/ID/i);

    expect(loadingMessage).toBeInTheDocument();
    expect(rows).toHaveLength(0);
  });
});
