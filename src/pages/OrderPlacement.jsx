import { Link, useNavigate } from "react-router-dom";
import GetDate from "../components/GetDate";
import { useDispatch } from "react-redux";
import { confirmOrder } from "../slices/orderSlice";
import { address } from "framer-motion/client";
import { toast } from "react-toastify";
import CommonService from "../components/CommonService";

const OrderPlacement = ({ item, setStep, itemQty, paymentType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    dispatch(
      confirmOrder({
        item: {
          ...item,
          qty: itemQty,
          totalSavings: Number(item?.price) * Number(itemQty),
          discount: item?.price * itemQty,
          address: {
            address1: "1/47, North Street, Elanthanguzhi (PO), Alathur (TK)",
            address2: "Perambalur (DT), 621708, INDIA",
          },
          user: "Ravichandran",
          orderdate: new Date(),
          expectedDeliverydate: CommonService.getDate(),
          paymentType: paymentType,
        },
      })
    );
    toast.success("Order placess successfully!..");
    navigate("/");
  };
  return (
    <div className="order-placment">
      <p>
        Once place your order, you agree to Rmart's &nbsp;
        <span className="terms">terms & conditions</span>&nbsp; will be
        applicable
      </p>
      <button className="btn btn-warning" onClick={placeOrder}>
        Confirm your Order
      </button>
      <hr />
      <div>
        <div className="order-item">
          <label htmlFor="item-qty">Item Quantity</label>
          <div>{itemQty}</div>
        </div>
        <div className="order-item">
          <label htmlFor="item-price">Item price</label>
          <div>₹&nbsp; {item?.price * 2}</div>
        </div>
        <div className="order-item">
          <label htmlFor="item-amt">
            Items Amount (<span>Item Quantity * Item price</span>)
          </label>
          <div>₹&nbsp; {item?.price * itemQty * 2}</div>
        </div>
        <div className="order-item">
          <label htmlFor="item-delivery">Delivery</label>
          <div>₹&nbsp; 0.0</div>
        </div>
        <div className="order-item">
          <label htmlFor="item-txn">Transaction fee</label>
          <div>₹&nbsp; 0.0</div>
        </div>
        <div className="order-item">
          <label htmlFor="item-txn">Transaction fee</label>
          <div>₹&nbsp; 0.0</div>
        </div>
        <div className="order-item disc-amt">
          <label htmlFor="item-discount">Discount</label>
          <div>₹&nbsp; {item?.price * itemQty}</div>
        </div>
        <div className="order-item total-amt">
          <label htmlFor="item-total">Total Amount</label>
          <div>₹&nbsp; {Number(item?.price) * Number(itemQty)}</div>
        </div>
        <span className="saving-amt">
          Total Savings: ₹&nbsp; {Number(item?.price) * Number(itemQty)}
        </span>
      </div>
      <hr />
      <div className="address-details">
        <h4>Delivering to Ravichandran</h4>
        <span>1/47, North Street, Elanthanguzhi (PO), Alathur (TK)</span>
        <span>Perambalur (DT), 621708, INDIA</span>
        <Link src="#">Change delivery address</Link>
      </div>
      <hr />
      <div className="arriving-details">
        <h4>Arriving {CommonService.getDate()}</h4>
        <span>
          Once you confirm you will get the items before{" "}
          {CommonService.getDate()}
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button className="btn btn-warning" onClick={placeOrder}>
          Confirm your Order
        </button>
        <button className="btn btn-danger" onClick={() => setStep(1)}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default OrderPlacement;
