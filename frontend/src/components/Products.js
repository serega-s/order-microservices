import React, { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import axios from "axios"
import { Link } from "react-router-dom"

const Products = () => {
  const [products, setProducts] = useState([])
  
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure to delete it?")) {
      const response = await axios.delete(process.env.REACT_APP_INVENTORY_API_URL + "products/" + id)
      setProducts(products.filter(p => p.pk !== id))
    }
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(process.env.REACT_APP_INVENTORY_API_URL + "products/")
      setProducts(response.data)
    }
    fetchProducts()
  }, [])
  
  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link
          to={ "/create" }
          className="btn btn-sm btn-outline-secondary"
        >Add</Link>
      </div>
      <table className="table table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        { products.map(product => (
          <tr key={ product.pk }>
            <td>{ product.pk }</td>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
            <td>{ product.quantity }</td>
            <td>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={ () => deleteProduct(product.pk) }
              >
                Delete
              </button>
            </td>
          </tr>
        )) }
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Products