import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProduct } from '../../actions/productActions'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import { useParams } from 'react-router-dom'
import Pagination from "react-js-pagination"
import { useAlert } from "react-alert";
import Slider from "@material-ui/core/Slider";
import Metadata from "../layout/MetaData"
import Typography from "@material-ui/core/Typography";
import { Rating } from '@material-ui/lab'
import { categories } from '../../utils/categories'

function Products() {
    const dispatch = useDispatch()

    const alert = useAlert()

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([0, 250000])
    const [category, setCategory] = useState("")

    const [ratings, setRatings] = useState(0)
    const [starValue, setStarValue] = useState(0)


    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products)

    const { keyword } = useParams()

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice)
    }

    const resetFiltersHandler = () =>{
        setPrice([0, 250000])
        setCategory("")
        setRatings(0)
        setStarValue(0)
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct(keyword, currentPage, price, category, ratings))
    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error])

    return (
        <Fragment>
            <Metadata title="Products -- ECOMMERCE" />

            {loading ? <Loader /> :
                <Fragment>
                    <h2 className='productsHeading'>Products</h2>

                    <div className='filterBox'>
                        <h3>Price</h3>
                        <Slider
                            value={price}
                            onChange={priceHandler}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={250000}
                        />

                        <h3>Categories</h3>
                        <ul className="categoryBox">
                            {categories.map((category) => (
                                <li
                                    className="category-link"
                                    key={category}
                                    onClick={() => setCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>

                        <fieldset>
                            <Typography component="legend">Ratings Above</Typography>
                            {
                                <Rating
                                    name="simple-controlled"
                                    value={starValue}
                                    onChange={(e) => {
                                        setStarValue(e.target.value)
                                        setRatings(e.target.value);
                                    }}
                                    size="small"
                                />
                            }
                            <button
                                className='clearStar'
                                onClick={(e) => {
                                    setStarValue(0)
                                    setRatings(0);
                                }}
                            >
                                Clear star
                            </button>
                        </fieldset>

                        <button className='resetFilters'
                            onClick={(e)=>{
                                resetFiltersHandler()
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>

                    <div className='products'>
                        {products &&
                            products.map((product) => (
                                <ProductCard product={product} key={product._id} />

                            ))
                        }
                    </div>

                    {
                        (filteredProductsCount > resultPerPage) && (
                            <div className="paginationBox">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />
                            </div>
                        )
                    }
                </Fragment>
            }
        </Fragment>

    )
}

export default Products
