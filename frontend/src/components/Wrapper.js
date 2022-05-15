import React from "react"
import { Link } from "react-router-dom"

const Wrapper = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link text-decoration-underline"
                  to="/"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-decoration-underline"
                  to="/orders"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          { children }
        </main>
      </div>
    </div>
  )
}

export default Wrapper