import React from 'react'
import Product from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="https://cdn.pixabay.com/photo/2022/11/16/17/48/girl-7596495__340.jpg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season arrivals    </h5>
                        <p className="card-text lea fs-2">Check out the all the trained</p>
                    </div>
                </div>
            </div>
            <Product/>
        </div>
    )
}
