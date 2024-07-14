import React, { Fragment, useEffect } from 'react'
import { CgMouse } from "react-icons/cg"
import "./Home.css"
import ProductCard from "./ProductCard.jsx"
import MetaData from "../layout/MetaData.jsx"
import { getProduct } from "../../actions/productActions.js"
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader/Loader.jsx'
import { useAlert } from 'react-alert'


const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(state => state.products)

    useEffect(() => {
        if(error){
            return alert.error(error)
        }
        dispatch(getProduct())
    }, [dispatch, error, alert])

    return (
        <Fragment>
            {loading ? <Loader/> :
                <Fragment>
                    <MetaData title="Ecommerce Home page" />

                    <div className='banner'>
                        <p>Welcome to Ecommerce</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>

                        <a href="#container">
                            <button>
                                Scroll <CgMouse />
                            </button>
                        </a>
                    </div>

                    <h2 className='homeHeading'>Featured Products</h2>

                    <div className='container' id='container'>
                        {
                            products && products?.map((product) =>
                                <ProductCard product={product} key={product.name}/>
                            )
                        }
                    </div>
                </Fragment>}
        </Fragment>
    )
}

export default Home
