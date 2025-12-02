import { Link } from "react-router-dom";
import { useState } from "react";
const PaymentDetailsPage = ({ item, setStep, setPaymentType }) => {
  const [pItem, setPayitem] = useState(1);
  const paymentAppItems = [
    {
      id: 1,
      name: "Google Pay",
      selected: true,
      desc: "",
    },
    {
      id: 2,
      name: "RMart Pay",
      selected: false,
      balance: 32807,
      desc: "",
    },
    {
      id: 3,
      name: "EMI",
      selected: false,
      desc: "Unavailable for this payment",
    },
    {
      id: 4,
      name: "Net Bancking",
      selected: false,
    },
    {
      id: 5,
      name: "Cash on Delivery/Pay On Delivery",
      selected: false,
      desc: "Cash, UPI and Cards Aceepted",
    },
  ];
  const handleSelect = (pitem) => {
    setPayitem(pitem?.id);
    setPaymentType(pitem);
  };
  return (
    <div className="buy-section">
      <h2 className="item-title">
        {item?.title}( <span>{item?.category}</span> )
      </h2>
      <hr />
      <div className="address-details">
        <h4>Delivering to Ravichandran</h4>
        <span>1/47, North Street, Elanthanguzhi (PO), Alathur (TK)</span>
        <span>Perambalur (DT), 621708, INDIA</span>
        <Link src="#">Change delivery address</Link>
      </div>
      <hr />
      <button className="btn btn-warning" onClick={() => setStep(3)}>
        Continue
      </button>

      <div className="payment-type-selection">
        <div className="recommended-section">
          {paymentAppItems?.map((payapp, index) => {
            console.log("🚀 ~ PaymentDetailsPage ~ payapp:", payapp);

            return (
              <div className="payapp-radio">
                <input
                  type="radio"
                  className="payment-method"
                  name="payment-method"
                  checked={pItem == payapp?.id}
                  onChange={() => handleSelect(payapp)}
                />
                <div className="pay-app-desc">
                  <label for="payment-method">
                    <h5>{payapp?.name}</h5>
                  </label>
                  <span>
                    {payapp?.balance > 0
                      ? `Available balance: ${payapp?.balance}`
                      : ""}
                  </span>
                  <span>{payapp?.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button className="btn btn-warning" onClick={() => setStep(3)}>
          Continue
        </button>
        <button className="btn btn-secondary" onClick={() => setStep(1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
