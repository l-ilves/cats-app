import React, {useState} from 'react'
import ViewToolbar from '../view-toolbar/ViewToolbar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const SearchBar = (props) => {
    const search = (event) => {
        props.searchValue(event.target.value)
    }

    return (
        <div className="search-bar align-right">
            <input type="text" placeholder="Search..." onChange={search}></input>
            <button className="bttn clear-bttn" onClick={search}>Clear</button>
            <ViewToolbar>
          <div className="icon-button">          <FontAwesomeIcon icon="bars" /><span className="icon-label">List View</span></div>
        </ViewToolbar> 
        </div>
    )
}

export default SearchBar
