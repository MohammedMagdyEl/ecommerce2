import React, { useState, useEffect } from "react";
import "./shop_products.css";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify"; // تم إضافة الاستيراد الصحيح للـ Bounce
import "react-toastify/dist/ReactToastify.css";
import { IoFilterSharp } from "react-icons/io5";
import {
  getProduct,
  addToCart,
  addToWishlistItems,
} from "../../../redux/action/productAction";

function Shop_products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const itemsPerPage = 24;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setCurrentItems(product.slice(startIndex, startIndex + itemsPerPage));
  }, [product, currentPage]);

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  // تصفية المنتجات بناءً على الفئة المحددة
  const filteredItems =
    selectedCategory === "All"
      ? currentItems
      : currentItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <ToastContainer />
      <div className="filter">
        <h5>
          <IoFilterSharp /> Filter{" "}
        </h5>
        <ul>
          <li>
            <button onClick={() => handleCategoryChange("All")}>All Categories</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Furniture")}>Furniture</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Lighting")}>Lighting</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Accessories")}>Accessories</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Decor")}>Decor</button>
          </li>
        </ul>
      </div>

      <div className="Our-Products">
        <div className="product-list">
          {filteredItems.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.name} />
              <div className="button">
                <button
                  className="add_btn"
                  onClick={() => {
                    dispatch(addToCart(item));
                    toast.success("The product has been added to the cart!", {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  }}
                >
                  <span>Add to Cart</span>
                  <FaCartPlus />
                </button>
              </div>
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
                <div className="icons">
                  <button
                    className="icon btn_favorite"
                    onClick={() => {
                      dispatch(addToWishlistItems(item));
                      toast.info(
                        "The product has been added to the Favorite!",
                        {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          transition: Bounce,
                        }
                      );
                    }}
                  >
                    <div className="heart">
                      <FaHeart />
                    </div>
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
    </>
  );
}

export default Shop_products;
