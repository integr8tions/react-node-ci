import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import * as api from "api/index";
import mockOrders from "api/mock/data";
import meState from "state/user/me";
import TestRenderer from "react-test-renderer";
import { useOrderList } from "./index";
import { UseOrderReturnType } from "./hook";

const { act } = TestRenderer;
const ordersApiSpy = jest.spyOn(api, "getOrdersByUserId");
const me = { id: 1 };

let response = { result: { current: {} as UseOrderReturnType } };

const setup = async (mockValue: any) => {
  ordersApiSpy.mockResolvedValue(mockValue);

  await act(async () => {
    response = renderHook(
      () => {
        const setMe = useSetRecoilState(meState);

        useEffect(() => {
          setMe(me);
        }, [setMe]);

        return useOrderList();
      },
      {
        wrapper: RecoilRoot,
      },
    );
  });
};

describe("useOrderList", () => {
  it("should initialise with default values", () => {
    const {
      result: {
        current: { orders, showError, isLoading },
      },
    } = renderHook(() => useOrderList(), {
      wrapper: RecoilRoot,
    });

    expect(orders.length).toEqual(0); // user data isnt present
    expect(showError).toEqual(false);
    expect(isLoading).toEqual(false);
  });
});

describe("useOrderList with updated me state", () => {
  it("should return orders when user data present", async () => {
    await setup({
      data: {
        orders: mockOrders,
      },
    });

    const { orders, isLoading, showError } = response.result.current;

    expect(ordersApiSpy).toHaveBeenCalledTimes(1);
    expect(ordersApiSpy).toHaveBeenCalledWith(me.id);
    expect(orders.length).toEqual(mockOrders.length);
    expect(showError).toEqual(false);
    expect(isLoading).toEqual(false);
  });

  it("should return return error response when api call fails", async () => {
    await setup(Promise.reject(new Error("Error: Request failed with status code 500")));

    const { orders, showError } = response.result.current;

    expect(orders.length).toEqual(0);
    expect(showError).toEqual(true);
  });
});
