
import React, { useState, useContext } from "react";
import { ProductsContext } from "../../oue_products/Oue_products";
import "./shop_products.css";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { CartContext } from "../../../context/context";

function Shop_products() {
  const { addToCart, addToWishlist } = useContext(CartContext);
  const { products = [] } = useContext(ProductsContext); // Default to an empty array if undefined

  const itemsPerPage = 24; // Fixed number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Start on page 1

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  // Handle page number click
  const handlePageChange = (page) => {
    setCurrentPage(page); // Set the current page
  };

  const totalPages = Math.ceil(products.length / itemsPerPage); // Calculate total pages

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Move to the next page
    }
  };

  return (
    <div className="Our-Products">
      <div className="product-list">
        {currentItems.map((product) => (
          <div key={product.id} className="product-item ">
            <img src={product.image} alt={product.name} />
            <div className="details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                Price: Rp {product.price.toLocaleString()}{" "}
                {product.original_price && (
                  <span>
                    <del>Rp {product.original_price.toLocaleString()}</del>
                  </span>
                )}
              </p>
            </div>
            <div className="hover-after">
              <div className="button">
                <button className="add_btn" onClick={() => addToCart(product)}>
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
                <button className="icon btn_favorite" onClick={() => addToWishlist(product)}>
                  <div className="heart"><FaHeart /></div>
                   <span>Like</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination with Page Numbers */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
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

