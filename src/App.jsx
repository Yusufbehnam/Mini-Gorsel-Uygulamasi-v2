import { useState } from "react";
import { products as productsObject } from "./data/products";
import ImgNotSelected from "./components/imgNotSelected";
import ImgContainer from "./components/ImgContainer";

function App() {
  const [products, setProducts] = useState(productsObject);
  const [ActiveProduct, setActiveProduct] = useState(
    products.find(item=>item.isActive)
  )

  //  console.log(products);


  function handleProductSelect(productId) {
    const selectedProduct = productsObject.find(item=>item.id ===productId)
    selectedProduct.isActive = true

    setActiveProduct(selectedProduct)

    const notSelectedProducts = productsObject.filter (item => item.id !== productId
      ).map(item => {
        return {
          ...item,
          isActive : false
        }
      }
        )
    // console.log("App Production ID :" , productId);
    // console.log("App Production ID :" , selectedProduct);
    // console.log("Not Selected Products:" , notSelectedProducts);
    setProducts(() => {
      return [
        ...notSelectedProducts,
        selectedProduct
      ].sort((a,b) => a.id - b.id)
    })
    
  }

  return (
    <>
      <main className="container">

      {
        ActiveProduct ? <> <img src={ActiveProduct.imgName} style={{width:"100%"}} alt="" /> </> : <ImgNotSelected />
      }
      <ImgContainer products={products} handleProductSelect={handleProductSelect}/>
      </main>
    </>
  );
}

export default App;
