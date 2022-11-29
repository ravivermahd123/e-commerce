import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const state = useSelector((state) => state.handelCard)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to = "/">Raj</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto  mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/contact">Contact </Link>
                            </li>
                           
                        </ul>
                    <div className='buttons'>
                        <Link to= "/login" className='btn btn-outline-dark'>
                        <i className="fa fa-sign-in me-1" aria-hidden="true"></i>Login
                        </Link>
                    </div>
                    <div className='buttons'>
                        <Link to= "/register" className='btn btn-outline-dark ms-2' >
                        <i className="fa fa-user-plus me-1" aria-hidden="true"></i>Register
                        </Link>
                    </div>
                    <div className='buttons'>
                        <Link to= "/card" className='btn btn-outline-dark ms-2'>
                        <i className="fa fa-cart-plus me-1" aria-hidden="true"></i>Card({state.length})
                        </Link>
                    </div>
                    </div>
                </div>
            </nav>
            <Outlet/>

        </div>
    )
}
