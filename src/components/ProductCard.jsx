import React from 'react'
import ProductCarBtn from './ProductCarBtn'

function ProductCard({product ,handleProductSelect}) {
  return (
    <div>
        <article>
      <header>{product.name} </header>
      <img src={product.thumbnail} alt="" />
      <footer > <ProductCarBtn productId={product.id} handleProductSelect={handleProductSelect} /> </footer>
    </article>
    </div>
  )
}

export default ProductCard