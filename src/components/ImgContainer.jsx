import React from "react";
import ProductCard from "./ProductCard";

function ImgContainer({ products,handleProductSelect }) {
  return (
    <div className="grid">
      {products
        .filter((products) => products.isAvailable)
        .map((products) => (
          <ProductCard product={products} key={products.id} handleProductSelect={handleProductSelect} />
        ))}
    </div>
  );
}

export default ImgContainer;
