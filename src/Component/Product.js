import { Button } from 'bootstrap';
import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {addCard} from '../redux/action'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

export default function Product() {
    const {id} = useParams();
    const [Product, setProduct] = useState([]);
    const [loading , setLoading ] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product )=>{
        dispatch(addCard(product))
    }

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json());
        setLoading(false);
      }
    getProduct();
    }, [])


    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>
                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style ={{marginLeft:6}}/>

                </div>
            </>
        )
    }
    
    const ShowProduct = () =>{
        return (
            <>
                <div className='col-md-6'>
                    <img src ={Product.image} alt= {Product.title} height="400px" width = "400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{Product.category}</h4>
                    <h1 className='display-5'>{Product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {Product.rating && Product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {Product.price}    
                     </h3>
                      <p className='lead '>{Product.discription}</p>
                     <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(Product)}>Add to card </button>
                     <Link to= "/card" className='btn btn-dark ms-2 px-3 py-2'>Go to card </Link>
                    
                </div>
            </>
        )
    }
  return (

    <div>
        <div className='container py-5 '>
            <div className='row py-4'>
                {loading ? <Loading/> :<ShowProduct/>}
            </div>
        </div>
    </div>
  )
}
