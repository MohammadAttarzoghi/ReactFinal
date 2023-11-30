import React from 'react'

export const ProductContainer = () => {
  return (
    <>
      <h2>Products</h2>
      <div>
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
      <div>
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
      <div>ProductContainer</div>
    </>
  )
}
