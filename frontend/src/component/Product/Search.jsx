import React, { Fragment, useState } from 'react'
import "./Search.css"
import Metadata from "../layout/MetaData"

function Search() {
    const [keyword, setKeyword] = useState("")

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            // history.push(`/products/${keyword}`)
            window.location.href = `/products/${keyword}`
        }
        else{
            // history.push("/products")
            window.location.href = "/products"
        }
    }
    return (
        <Fragment>
            <Metadata/>
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder='Search a Product'
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    )
}


export default Search
