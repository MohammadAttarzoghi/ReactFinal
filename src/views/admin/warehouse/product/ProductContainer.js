import React, { useState } from 'react'
import './ProductContainer.css'

export const ProductContainer = () => {

  const [products, setProduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const [first, setfirst] = useState(second)

  const save = () => {
    let product = {};
    product.code = document.getElementById("code").value;
    product.price = document.getElementById("price").value;
    product.title = document.getElementById("title").value;
  //  alert(product.title);
    setProduct([product,...products]);
    clear();
  }
  const clear=()=>{
    document.getElementById("code").value = ""
    document.getElementById("price").value = ""
    document.getElementById("title").value = ""
    document.getElementById("code").focus();

  }


  return (
    <>
      <h2>Products</h2>
      <div className='product-container'>
        <div className='product-info'>
          <h3>Product Info:</h3>
          <div>
            <label>Code: </label>
            <input id="code" />
          </div>
          <div>
            <lable>Title: </lable>
            <input id="title" />
          </div>
          <div>
            <lable>Price: </lable>
            <input id="price" />
          </div>
          <div>
            <button onClick={save}>Save</button>
            <button onClick={clear}>Clear</button>
           
          </div>
        </div>
        <div className='product-list'>
          <h3>Product List: </h3>

          {products.map((item,index) => (
            <div>
              <h4>item index: {index+1}</h4>
              <div>
                Code: {item.code}
              </div>
              <div>
                Price:{item.price}
              </div>
              <div>
                Title:{item.title}
              </div>

              <div>
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>ProductContainer</div>
    </>
  )
}
