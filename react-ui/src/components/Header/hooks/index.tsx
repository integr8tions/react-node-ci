import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useLocationForHP = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [location]);

  return isHidden;
};

export default useLocationForHP;
