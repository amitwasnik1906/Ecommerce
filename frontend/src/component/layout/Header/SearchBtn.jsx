import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

function SearchBtn() {
  return (
    <Link className='search' to={"/search"}>
        <SearchIcon fontSize='large'/>
    </Link>
  )
}

export default SearchBtn
