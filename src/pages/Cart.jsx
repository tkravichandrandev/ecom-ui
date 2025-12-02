import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/cart.css";
import BackButton from "../components/BackButton";

const Cart = () => {
  const cartItems = useSelector((state) => state?.products?.cartProducts || []);
  return (
    <div className="cart-container">
      <BackButton buttonText="Cart" navigatePage="/" />
      <div className="cart-body">
        {cartItems?.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
