import React, {useState} from 'react'

const SearchBar = (props) => {
    const search = (event) => {
        props.searchValue(event.target.value)
    }

    return (
        <div className="search-bar align-right">
            <input type="text" placeholder="Search..." onChange={search}></input>
            <button className="bttn clear-bttn" onClick={search}>Clear</button>
        </div>
    )
}

export default SearchBar
