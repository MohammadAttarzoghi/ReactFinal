import React from 'react'
import './ProductContainer.css'
export const ProductContainer = () => {
  return (
    <>
      <h2>Products</h2>
      <div className='product'>
        <div className='Product-info'>
          <h3>Product Info:</h3>
          <div>
            <label>Code: </label>
            <input />
          </div>
          <div>
            <lable>Title: </lable>
            <input />
          </div>
          <div>
            <lable>Price: </lable>
            <input />
          </div>
          <div>
            <button>Save</button>
            <button>Clear</button>
          </div>
        </div>
        <div className='product-list'>
          <h3>Product List</h3>
          <div>
            Code:
          </div>
          <div>
            Price:
          </div>
          <div>
            Title:
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
