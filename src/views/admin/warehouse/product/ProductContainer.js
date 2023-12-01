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
    alert(product.title);
    setProduct([...products,product]);
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
            <button>Clear</button>
          </div>
        </div>
        <div className='product-list'>
          <h3>Product List: </h3>
          <div>
            <div>
              Code: 
            </div>
            <div>
              Price:
            </div>
            <div>
              Title:
            </div>
          </div>
          <div>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div>ProductContainer</div>
    </>
  )
}
