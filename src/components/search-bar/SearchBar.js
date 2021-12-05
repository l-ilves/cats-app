import React, {useState} from 'react'
import ViewToolbar from '../view-toolbar/ViewToolbar'
import Button from '../card-view/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faGripHorizontal);

const SearchBar = (props) => {
    const search = (event) => {
        props.searchValue(event.target.value)
    }
    const toggleListView = (event) => {
        props.setItemsView();
    }

    return (
        <div className="search-bar align-right">
            <input type="text" placeholder="Search..." onChange={search}></input>
            <button className="bttn toolbar-bttn" onClick={search}>Clear</button>
            <ViewToolbar onClick="setListViewOn">

                {props.listViewOn ?                 <button className="bttn toolbar-bttn icon-label-bttn" onClick={toggleListView}><FontAwesomeIcon icon="grip-horizontal" /><span className="icon-label">Icon View</span></button> : <button className="bttn toolbar-bttn" onClick={toggleListView}>      
                    <FontAwesomeIcon icon="bars" /><span className="icon-label">List View</span>
                </button>}


            </ViewToolbar> 
        </div>
    )
}

export default SearchBar
