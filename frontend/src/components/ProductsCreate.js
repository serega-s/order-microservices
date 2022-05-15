import React, { useState } from "react"
import Wrapper from "./Wrapper"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ProductsCreate = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()
  
  const createProduct = async () => {
    const response = await axios.post(process.env.REACT_APP_INVENTORY_API_URL + "products/",
                                      { name, price, quantity }
    )
    await navigate(-1)
  }
  
  return (
    <Wrapper>
      <div className="mt-3">
        <div className="form-floating pb-3">
          <input type={ "text" }
                 className="form-control"
                 placeholder="Name"
                 onChange={ (e) => setName(e.target.value) }
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating pb-3">
          <input type={ "number" }
                 className="form-control"
                 placeholder="Price"
                 onChange={ (e) => setPrice(e.target.value) }
          />
          <label htmlFor="price">Price</label>
        </div>
        <div className="form-floating pb-3">
          <input type={ "number" }
                 className="form-control"
                 placeholder="Quantity"
                 onChange={ (e) => setQuantity(e.target.value) }
          />
          <label htmlFor="Quantity">Quantity</label>
        </div>
        
        <button className="w-100 btn btn-md btn-dark"
                onClick={ createProduct }>Submit
        </button>
      </div>
    </Wrapper>
  )
}

export default ProductsCreate