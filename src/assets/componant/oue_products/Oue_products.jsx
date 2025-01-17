import React, { useEffect, useState } from "react";
import "./our_products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/action/productAction";

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const [items, setItems] = useState([]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    setItems(product.slice(0, visibleCount));
  }, [product, visibleCount]);

  return (
    <div className="Our-Products">
      <h1 className="title">Our Products</h1>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.image} alt={item.name} />
            <div className="details ">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>
                Price: Rp {item.price.toLocaleString()}{" "}
                {item.original_price && (
                  <span>
                    <del>Rp {item.original_price.toLocaleString()}</del>
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
        {visibleCount < product.length && (
          <div className="button">
            <button className="btn" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
