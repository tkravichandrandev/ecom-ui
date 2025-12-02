import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolToTop = ({ top }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: top ?? 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};

export default ScrolToTop;
