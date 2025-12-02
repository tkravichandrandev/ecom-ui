import { FaRegUser } from "react-icons/fa";
import "../styles/menu.css";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export const Menu = () => {
  const cartCount = useSelector((state) => state?.products?.cartProducts);
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <div
        className="menu-icons cart-container-icon"
        onClick={() => navigate("/cart")}
      >
        <BiCart />
        <span className="cart-count">
          {cartCount?.length > 0 ? cartCount?.length : ""}
        </span>
        <span>Cart</span>
      </div>
      <div className="menu-icons">
        <FaRegUser />
        <span>Profile</span>
      </div>
    </div>
  );
};
