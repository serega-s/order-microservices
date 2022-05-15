import Header from "./components/Header"
import React from "react"
import Products from "./components/Products"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsCreate from "./components/ProductsCreate"
import Orders from "./components/Orders"


const App = () => {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={ <Products /> }
        />
        <Route
          path="/create"
          element={ <ProductsCreate /> }
        />
        <Route
          path="/orders"
          element={ <Orders /> }
        />
        <Route
          path="*"
          element={
            <main style={ { padding: "1rem" } }>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
