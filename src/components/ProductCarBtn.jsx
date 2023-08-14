import React from 'react'

function ProductCarBtn({productId, handleProductSelect}) {
  return (
    <div>
       <button className='outline' onClick={() => handleProductSelect(productId)}>
        Sec  {/* {productId}*/}
        </button> 
    </div>
  )
}

export default ProductCarBtn