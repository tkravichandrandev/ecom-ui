import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/productinfo.css";
import RatingStars from "../components/StartRating";
import { addToCart } from "../slices/productSlice";
import { useState } from "react";
import InfoPage from "./InfoPage";
import PaymentDetailsPage from "./PaymentDetailsPage";
import OrderPlacement from "./OrderPlacement";

const ProductInfo = () => {
  const item = useSelector((state) => state?.products?.selectedProduct);
  const dispatch = useDispatch();
  const [itemQty, setItemQty] = useState(1);
  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState({
    id: 1,
    name: "Google Pay",
    selected: true,
    desc: "",
  });

  const cartItems = useSelector((state) => {
    return state?.products?.cartProducts;
  });

  const updateQty = (e) => {
    setItemQty(e.target?.value || 1);
  };

  const addToCartFn = () => {
    const isCartAddedItem = cartItems?.includes(item);
    if (!isCartAddedItem) {
      dispatch(addToCart({ item: item, qty: itemQty }));
    }
  };
  const cartItemsIds = cartItems?.map((citem) => citem?.id);
  const isCartItem = cartItemsIds?.includes(item?.id);
  return (
    <div className="product-info-container">
      <div className="left-section">
        <CartItem item={item} />
      </div>
      <div
        className={`product-details-container ${step == 1 ? "slide-in" : ""}`}
      >
        {step == 1 ? (
          <InfoPage
            item={item}
            updateQty={updateQty}
            itemQty={itemQty}
            isCartItem={isCartItem}
            addToCartFn={addToCartFn}
            setStep={setStep}
          />
        ) : step == 2 ? (
          <PaymentDetailsPage
            item={item}
            setStep={setStep}
            setPaymentType={setPaymentType}
          />
        ) : (
          <OrderPlacement
            item={item}
            setStep={setStep}
            itemQty={itemQty}
            paymentType={paymentType}
          />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
