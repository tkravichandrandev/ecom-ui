import { Outlet, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import ScrolToTop from "../components/ScrolToTop";
import "../styles/productinfo.css";

const ProductLayout = () => {
  return (
    <div style={{ margin: "30px", width: "100%" }}>
      <ScrolToTop />
      <BackButton buttonText="Product Info" navigatePage="/" />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
