import { useState } from "react";
import { products as productsObject } from "./data/products";
import ImgNotSelected from "./components/imgNotSelected";
import ImgContainer from "./components/ImgContainer";

function App() {
  const [ActiveProduct, setActiveProduct] = useState(false)
  const [products, setProducts] = useState(productsObject);
  //  console.log(products);


  function handleProductSelect(id) {
    console.log(id);
  }

  return (
    <>
      <main className="container">

      {
        ActiveProduct ? <>{ActiveProduct.name} </> : <ImgNotSelected />
      }
      <ImgContainer products={products} handleProductSelect={handleProductSelect}/>
      </main>
    </>
  );
}

export default App;
