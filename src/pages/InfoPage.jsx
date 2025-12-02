import RatingStars from "../components/StartRating";

const InfoPage = ({ item, updateQty, isCartItem, addToCartFn, setStep }) => {
  return (
    <>
      <h2 className="item-title">
        {item?.title}( <span>{item?.category}</span> )
      </h2>
      <hr />
      <div className="rating">
        <span style={{ fontWeight: 600 }}>
          {item?.rating?.rate} &nbsp;&nbsp;
        </span>
        <RatingStars rating={item?.rating?.rate} />
        <span style={{ fontWeight: 600 }}>
          &nbsp; &nbsp;{item?.rating?.count}
          <span style={{ fontWeight: 400 }}>Rating</span>
        </span>
      </div>
      <h6>{item?.description}</h6>
      <div className="info">
        <span className="offer-percent">&nbsp;&nbsp;- 50 %</span>
        <span className="offer-price">₹ {item?.price}</span>
      </div>
      <div className="mrp-info">
        <span style={{ fontWeight: 600 }}>M.R.P</span>
        <span className="strike-out">
          &nbsp;&nbsp;₹.{item?.price + item?.price}
        </span>
      </div>
      <div className="buyitem-option">
        <div className="buyitem-qty">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={updateQty}
          >
            <option selected value="1">
              Quantity 1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        {isCartItem ? (
          <button className="btn cart-added-items">Already Added</button>
        ) : (
          <button className="buyitem-add-to-cart btn" onClick={addToCartFn}>
            Add To Cart
          </button>
        )}
        <button
          className="buyitem-buy btn btn-warning"
          onClick={() => setStep(2)}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default InfoPage;
