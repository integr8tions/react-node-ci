import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import ordersListState from "state/order/list";
import meState from "state/user/me";

import { getOrdersByUserId } from "api/index";
import useOrderCancel from "./UseOrderDelete";
import { UseOrderReturnType } from "./hook";

export const useOrderList = (): UseOrderReturnType => {
  const me = useRecoilValue(meState);
  const [orders, setOrders] = useRecoilState(ordersListState);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCancel = useOrderCancel(orders, setOrders);

  useEffect(() => {
    const { id = null } = (me as any) || {};
    const fetchOrders = async () => {
      setIsLoading(true);

      try {
        await getOrdersByUserId(id).then((result: any) => {
          setOrders(result.data.orders);
          setIsLoading(false);
        });
      } catch (error) {
        setShowError(true);
      }
    };

    if (!orders.length && id) {
      fetchOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me]);

  return { orders, handleCancel, isLoading, showError };
};

export default useOrderList;
