import React, { useState, useEffect } from "react";
import "./shop_products.css";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  addToCart,
  addToWishlistItems,
} from "../../../redux/action/productAction";
// import { addToCart } from "../../../redux/action/productAction"; // Import addToCart action

function Shop_products() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const itemsPerPage = 24;

  // Update currentItems when products or page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setCurrentItems(product.slice(startIndex, startIndex + itemsPerPage));
  }, [product, currentPage]);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleLike = (item) => {
    // Implement "Like" functionality
    console.log(`Liked: ${item.name}`);
  };

  return (
    <div className="Our-Products">
      <div className="product-list">
        {currentItems.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.image} alt={item.name} />
            <div className="details">
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
            <div className="hover-after">
              <div className="button">
                <button
                  className="add_btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
              <div className="icons">
                <div className="icon">
                  <IoMdShare /> <span>Share</span>
                </div>
                <div className="icon">
                  <MdOutlineCompareArrows /> <span>Compare</span>
                </div>
                <button
                  className="icon btn_favorite"
                  onClick={() => dispatch(addToWishlistItems(item))}
                >
                  <div className="heart">
                    <FaHeart />
                  </div>
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="pagination-btn"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop_products;
