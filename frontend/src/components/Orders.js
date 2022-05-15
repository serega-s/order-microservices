import React, { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import axios from "axios"

const Orders = () => {
  const [productId, setProductId] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [message, setMessage] = useState("Buy a product.")
  
  const submitOrder = async () => {
    const response = await axios.post(process.env.REACT_APP_PAYMENT_API_URL + "orders/", {
      product_id: productId,
      quantity
    })
    setMessage("Thank you for your order.")
  }
  
  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const response = await axios.get(process.env.REACT_APP_INVENTORY_API_URL + "products/" + productId)
          const price = parseFloat(response.data.price) * 1.2
          setMessage(`Your product price is $${ price }`)
        } catch {
          setMessage("No such a product")
        }
      }
      getProduct()
    }
  }, [productId])
  
  
  return (
    <Wrapper>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead">{ message }</p>
          </div>
        </main>
        <div className="row g-3">
          <div className="col-sm-6">
            <label
              className="form-label"
              htmlFor="product"
            >Product</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product"
              onChange={ e => setProductId(e.target.value) }
            />
          </div>
          <div className="col-sm-6">
            <label
              className="form-label"
              htmlFor="quantity"
            >Quantity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              onChange={ e => setQuantity(e.target.value) }
            />
          </div>
          
          <hr className="my-4" />
          <button
            className="w-100 btn btn-dark btn-md"
            onClick={ submitOrder }
          >Buy
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Orders