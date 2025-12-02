import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/ProdectApi";
import {
  addToCart,
  setProductList,
  setSelectedProduct,
} from "../slices/productSlice";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => {
    return state?.products?.products;
  });

  const cartItems = useSelector((state) => {
    return state?.products?.cartProducts;
  });

  useEffect(() => {
    fetchProducts()
      .then((data) => dispatch(setProductList(data)))
      .catch((err) => console.log(err));
  }, []);

  const addToCartFn = (item) => {
    const isCartAddedItem = cartItems?.includes(item);
    if (!isCartAddedItem) {
      dispatch(addToCart({ item: item }));
    }
  };

  const setSelectedProductFn = (item) => {
    dispatch(setSelectedProduct(item));
    navigate(`/products/info`);
  };
  const cartItemsIds = cartItems?.map((citem) => citem?.id);
  console.log("🚀 ~ ProductList ~ cartItemsIds:", cartItemsIds);
  return (
    <div className="produc-container">
      <h1>Products</h1>
      <div className="product-items-container">
        {allProducts?.map((item, index) => {
          const isCartItem = cartItemsIds?.includes(item?.id);
          return (
            <div
              className="product-container-items"
              key={`product-item-${index}${item?.id}`}
            >
              <img
                src={item?.image}
                alt={item?.title}
                onClick={() => setSelectedProductFn(item)}
              />
              <div className="product-items-desc">
                <p className="product-items-text" title={item?.title}>
                  {item?.title}
                </p>
                <div className="product-button-container">
                  <button
                    className="price-btn"
                    onClick={() => setSelectedProductFn(item)}
                  >
                    <span className="default-text">₹&nbsp;{item?.price}</span>
                    <span className="hover-text">Buy Now</span>
                  </button>
                  {isCartItem ? (
                    <button className="add-to-cart btn btn-warning cart-added-items">
                      Already Added
                    </button>
                  ) : (
                    <button
                      className="add-to-cart btn btn-warning"
                      onClick={() => addToCartFn(item)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
