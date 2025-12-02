import "../styles/cart.css";
const CartItem = ({ item }) => {
  return (
    <div className="item-container" key={`item-${item?.id}`}>
      <img src={item?.image} alt={item?.title} />
      <div className="item-desc">
        <p className="item-text" title={item?.title}>
          {item?.title}
        </p>
        <button className="btn btn-info">${item?.price}</button>
      </div>
    </div>
  );
};

export default CartItem;
