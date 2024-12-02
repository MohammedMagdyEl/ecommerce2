import React, { useState, createContext } from "react";
import "./our_products.css";

import Image1 from "../../image/products/Image1.png";
import Image2 from "../../image/products/Image2.png";
import Image3 from "../../image/products/Image3.png";
import Image4 from "../../image/products/Image4.png";
import Image5 from "../../image/products/Image5.png";
import Image6 from "../../image/products/Image6.png";
import Image7 from "../../image/products/Image7.png";
import Image8 from "../../image/products/Image8.png";

const arrayOfProducts = [
  {
    id: "1",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "2",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "3",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "4",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "5",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "6",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "7",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "8",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
  {
    id: "9",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "10",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "11",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "12",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "13",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "14",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "15",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "16",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
  {
    id: "17",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "18",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "19",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "20",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "21",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "22",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "23",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "24",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
  {
    id: "25",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "26",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "27",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "28",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "29",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "30",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "31",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "32",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
  {
    id: "33",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "34",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "35",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "36",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "37",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "38",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "39",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "40",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
  {
    id: "41",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    discount: "30%",
    original_price: 3500000,
    category: "Furniture",
    image: Image1,
  },
  {
    id: "42",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    currency: "IDR",
    category: "Furniture",
    image: Image2,
  },
  {
    id: "43",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image3,
  },
  {
    id: "44",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    currency: "IDR",
    category: "Furniture",
    new: true,
    image: Image4,
  },
  {
    id: "45",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    currency: "IDR",
    category: "Lighting",
    image: Image5,
  },
  {
    id: "46",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    currency: "IDR",
    category: "Accessories",
    new: true,
    image: Image6,
  },
  {
    id: "47",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    currency: "IDR",
    discount: "50%",
    original_price: 14000000,
    category: "Furniture",
    image: Image7,
  },
  {
    id: "48",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    currency: "IDR",
    category: "Decor",
    new: true,
    image: Image8,
  },
];
export const ProductsContext = createContext({
  products: arrayOfProducts,
});

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Start with 8 items
  const [items, setItems] = useState(arrayOfProducts.slice(0, visibleCount));

  const handleShowMore = () => {
    const newCount = visibleCount + 8; // Increase the count by 8
    setVisibleCount(newCount);
    setItems(arrayOfProducts.slice(0, newCount)); // Update the visible items
  };

  return (
    <div className="Our-Products">
      <h1 className="title">Our Products</h1>
      <div className="product-list">
        {items.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="details ">
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
          </div>
        ))}
      {visibleCount < arrayOfProducts.length && (
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
